import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { QuoteHistory, QuoteTimeframe, Result } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { QuoteTimeframeSchema } from "@/validation";
import { isValid, subYears } from "date-fns";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../../page";
import HistoricalDataScreen from "./screen";
import ErrorScreen from "../../error-screen";

export async function generateMetadata(props: {
  params: { ticker: string };
}): Promise<Metadata> {
  try {
    const {
      params: { ticker },
    } = props;

    const tickerRepo = new TickerRepository(serverAPI);
    const profile = await tickerRepo.getCompanyProfile(ticker);

    return {
      title: `${profile.companyName} (${profile.symbol}) Stock Description - Historical Data | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type HistoricalPageData = {
  quoteHistory?: QuoteHistory[];
  currency?: string;
};

async function getData(
  ticker: string,
  timeframe: QuoteTimeframe,
  filter?: { from?: Date; to?: Date }
): Promise<Result<HistoricalPageData, Error>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    let [profile, quoteHistory] = await Promise.all([
      tickerRepo.getCompanyProfile(ticker),
      tickerRepo.getQuoteHistory(ticker, timeframe, filter),
    ]);

    return { data: { currency: profile.currency || undefined, quoteHistory } };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw { error };
  }
}

interface HistoricalDataPageProps extends SearchTickerPageProps {
  searchParams: { period: string; from?: Date; to: Date; show?: string };
}

export default async function HistoricalDataPage(
  props: HistoricalDataPageProps
) {
  const {
    params: { ticker },
    searchParams,
  } = props;

  let timeframe: QuoteTimeframe;
  if (QuoteTimeframeSchema.safeParse(searchParams.period).success) {
    timeframe = searchParams.period as QuoteTimeframe;
  } else {
    timeframe = "1day";
  }

  let filter: {
    from?: Date;
    to?: Date;
  } = {};

  let from = searchParams.from;
  if (from && isValid(new Date(from))) {
    filter.from = new Date(from);
  } else {
    filter.from = subYears(new Date(), 1);
  }

  let to = searchParams.to;
  if (to && isValid(new Date(to))) {
    filter.to = new Date(to);
  } else {
    filter.to = new Date();
  }

  const { data, error } = await getData(ticker, timeframe, filter);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <HistoricalDataScreen ticker={ticker} {...data} />;
}

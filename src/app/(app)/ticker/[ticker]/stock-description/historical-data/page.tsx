import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { QuoteHistoryTimeframe } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { QuoteHistoryTimeframeSchema } from "@/validation";
import { isValid, subYears } from "date-fns";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../../page";
import HistoricalDataScreen from "./screen";

export async function generateMetadata(props: {
  params: { ticker: string };
}): Promise<Metadata> {
  try {
    const {
      params: { ticker },
    } = props;

    const tickerRepo = new TickerRepository(serverAPI);
    const outlook = await tickerRepo.getCompanyOutLook(ticker);

    return {
      title: `${outlook.profile.companyName} (${ticker}) Stock Description - Historical Data | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

async function getData(
  ticker: string,
  timeframe: QuoteHistoryTimeframe,
  filter?: { from?: Date; to?: Date }
) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    let [quote, quoteHistory] = await Promise.all([
      tickerRepo.getQuote(ticker),
      tickerRepo.getQuoteHistory(ticker, timeframe, filter),
    ]);

    return { quote, quoteHistory };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }
    throw error;
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

  let timeframe: QuoteHistoryTimeframe;
  if (QuoteHistoryTimeframeSchema.safeParse(searchParams.period).success) {
    timeframe = searchParams.period as QuoteHistoryTimeframe;
  } else {
    timeframe = "1week";
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

  const { quote, quoteHistory } = await getData(ticker, timeframe, filter);

  return <HistoricalDataScreen ticker={ticker} quoteHistory={quoteHistory} />;
}

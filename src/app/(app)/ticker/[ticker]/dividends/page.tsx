import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { CompanyOutlook, Dividend, Ratio } from "@/modules/ticker/types";
import { Result } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ErrorScreen from "../error-screen";
import { SearchTickerPageProps } from "../page";
import DividendsScreen from "./screen";

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
      title: `${profile.companyName} (${profile.symbol}) Dividends | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type DividendsPageData = {
  outlook: CompanyOutlook;
  dividends: Dividend[];
  currency?: string;
  ratio?: Ratio;
};

async function getData(ticker: string): Promise<Result<DividendsPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    const [dividends, outlook, ratios] = await Promise.all([
      tickerRepo.getDividendHistory(ticker),
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getRatios(ticker, { period: "annual", limit: 1 }),
    ]);

    return {
      data: {
        dividends,
        outlook,
        currency: outlook.profile.currency || undefined,
        ratio: ratios[0],
      },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface DividendsPageProps extends SearchTickerPageProps {}

export default async function DividendsPage(props: DividendsPageProps) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <DividendsScreen ticker={ticker} {...data} />;
}

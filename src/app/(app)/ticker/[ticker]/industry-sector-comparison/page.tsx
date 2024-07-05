import { serverAPI } from "@/config/server/api";
import { MarketRepository } from "@/modules/market/repository";
import { SectorPerformanceHistory } from "@/modules/market/types";
import { TickerRepository } from "@/modules/ticker/repository";
import { CompanyProfile } from "@/modules/ticker/types";
import { Quote, Result } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ErrorScreen from "../error-screen";
import { SearchTickerPageProps } from "../page";
import IndustrySectorComparisonScreen from "./screen";

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
      title: `${profile.companyName} (${profile.symbol}) Industry and Sector Comparison  | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type IndustrySectorComparisonPageData = {
  currency: string;
  profile: CompanyProfile;
  similarStocks: Quote[];
  sectorPerformanceHistory: SectorPerformanceHistory[];
};

async function getData(
  ticker: string
): Promise<Result<IndustrySectorComparisonPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const marketRepo = new MarketRepository(serverAPI);

    let [profile, similarStocks, sectorPerformanceHistory] = await Promise.all([
      tickerRepo.getCompanyProfile(ticker),
      tickerRepo.getTickerSimilarStocks(ticker),
      marketRepo.getSectorPerformanceHistory(),
    ]);

    return {
      data: {
        profile,
        currency: profile.currency,
        similarStocks,
        sectorPerformanceHistory,
      },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}
interface IndustrySectorComparisonPageProps extends SearchTickerPageProps {}

export default async function IndustrySectorComparisonPage(
  props: IndustrySectorComparisonPageProps
) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <IndustrySectorComparisonScreen ticker={ticker} {...data} />;
}

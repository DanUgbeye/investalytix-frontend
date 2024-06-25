import { serverAPI } from "@/config/server/api";
import { MarketRepository } from "@/modules/market/repository";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
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

async function getData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const marketRepo = new MarketRepository(serverAPI);

    let [profile, similarStocks, sectorPerformanceHistory] = await Promise.all([
      tickerRepo.getCompanyProfile(ticker),
      tickerRepo.getTickerSimilarStocks(ticker),
      marketRepo.getSectorPerformanceHistory(),
    ]);

    return {
      profile,
      similarStocks,
      sectorPerformanceHistory,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw error;
  }
}
interface IndustrySectorComparisonPageProps extends SearchTickerPageProps {}

export default async function IndustrySectorComparisonPage(
  props: IndustrySectorComparisonPageProps
) {
  const {
    params: { ticker },
  } = props;

  const { profile, sectorPerformanceHistory, similarStocks } =
    await getData(ticker);

  return (
    <IndustrySectorComparisonScreen
      ticker={ticker}
      currency={profile.currency}
      profile={profile}
      sectorPerformaceHistory={sectorPerformanceHistory}
      similarStocks={similarStocks}
    />
  );
}

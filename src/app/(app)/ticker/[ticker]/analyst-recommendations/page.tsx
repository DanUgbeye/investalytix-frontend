import ErrorScreen from "@/app/(app)/ticker/[ticker]/error-screen";
import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import {
  CompanyProfile,
  TickerAnalystRecommendation,
  TickerPriceTarget,
  TickerPriceTargetConsensus,
  TickerPriceTargetSummary,
  TickerUpgradeDowngradeConsensus,
  TickerUpgradesDowngrades,
} from "@/modules/ticker/types";
import { QuoteHistory, Result } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { subYears } from "date-fns";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../page";
import AnalystRecommendationScreen from "./screen";

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
      title: `${profile.companyName} (${profile.symbol}) Analyst Recommendation | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type AnalystRecommendationPageData = {
  profile: CompanyProfile;
  consensus?: TickerUpgradeDowngradeConsensus;
  analystRecommendation: TickerAnalystRecommendation[];
  upgradesDowngrades: TickerUpgradesDowngrades[];
  priceTargetConsensus?: TickerPriceTargetConsensus;
  priceTargetSummary?: TickerPriceTargetSummary;
  priceTarget: TickerPriceTarget[];
  quoteHistory: QuoteHistory[];
};

async function getData(
  ticker: string
): Promise<Result<AnalystRecommendationPageData, Error>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    let [
      profile,
      consensus,
      analystRecommendation,
      upgradesDowngrades,
      priceTargetConsensus,
      priceTargetSummary,
      priceTarget,
      quoteHistory,
    ] = await Promise.all([
      tickerRepo.getCompanyProfile(ticker),
      tickerRepo.getTickerUpgradesDowngradesConsensus(ticker),
      tickerRepo.getTickerAnalystRecommendations(ticker),
      tickerRepo.getTickerUpgradesDowngrades(ticker),
      tickerRepo.getTickerPriceTargetConsensus(ticker),
      tickerRepo.getTickerPriceTargetSummary(ticker),
      tickerRepo.getTickerPriceTarget(ticker),
      tickerRepo.getQuoteHistory(ticker, "1week", {
        from: subYears(new Date(), 2),
        to: new Date(),
      }),
    ]);

    return {
      data: {
        profile,
        consensus,
        analystRecommendation,
        upgradesDowngrades,
        priceTargetConsensus,
        priceTargetSummary,
        priceTarget,
        quoteHistory,
      },
    };
  } catch (error: any) {
    console.log(error);
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface AnalystRecommendationPageProps extends SearchTickerPageProps {}

export default async function AnalystRecommendationPage(
  props: AnalystRecommendationPageProps
) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <AnalystRecommendationScreen ticker={ticker} {...data} />;
}

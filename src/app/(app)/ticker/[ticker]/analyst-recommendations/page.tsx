import { Metadata } from "next";
import React from "react";
import AnalystRecommendationScreen from "./screen";
import { SearchTickerPageProps } from "../page";
import { TickerRepository } from "@/modules/ticker/repository";
import { serverAPI } from "@/config/server/api";
import { errorUtils } from "@/utils/error.utils";
import { notFound } from "next/navigation";
import { subYears } from "date-fns";

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

async function getData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    let [
      profile,
      consensus,
      analystRecommendation,
      upgradesDowngrades,
      priceTargetConsensus,
      priceTargetSummary,
      quoteHistory,
    ] = await Promise.all([
      tickerRepo.getCompanyProfile(ticker),
      tickerRepo.getTickerUpgradesDowngradesConsensus(ticker),
      tickerRepo.getTickerAnalystRecommendations(ticker),
      tickerRepo.getTickerUpgradesDowngrades(ticker),
      tickerRepo.getTickerPriceTargetConsensus(ticker),
      tickerRepo.getTickerPriceTargetSummary(ticker),
      tickerRepo.getQuoteHistory(ticker, "1week", {
        from: subYears(new Date(), 1),
        to: new Date(),
      }),
    ]);

    return {
      profile,
      consensus,
      analystRecommendation,
      upgradesDowngrades,
      priceTargetConsensus,
      priceTargetSummary,
      quoteHistory,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface AnalystRecommendationPageProps extends SearchTickerPageProps {}

export default async function AnalystRecommendationPage(
  props: AnalystRecommendationPageProps
) {
  const {
    params: { ticker },
  } = props;

  const {
    analystRecommendation,
    consensus,
    profile,
    upgradesDowngrades,
    priceTargetConsensus,
    priceTargetSummary,
    quoteHistory,
  } = await getData(ticker);

  return (
    <AnalystRecommendationScreen
      ticker={ticker}
      analystRecommendation={analystRecommendation}
      profile={profile}
      consensus={consensus}
      upgradesDowngrades={upgradesDowngrades}
      priceTargetConsensus={priceTargetConsensus}
      priceTargetSummary={priceTargetSummary}
      quoteHistory={quoteHistory}
    />
  );
}

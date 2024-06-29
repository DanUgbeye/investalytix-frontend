import { Metadata } from "next";
import React from "react";
import AnalystRecommendationScreen from "./screen";
import { SearchTickerPageProps } from "../page";
import { TickerRepository } from "@/modules/ticker/repository";
import { serverAPI } from "@/config/server/api";
import { errorUtils } from "@/utils/error.utils";
import { notFound } from "next/navigation";

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
    ] = await Promise.all([
      tickerRepo.getCompanyProfile(ticker),
      tickerRepo.getTickerUpgradesDowngradesConsensus(ticker),
      tickerRepo.getTickerAnalystRecommendations(ticker),
      tickerRepo.getTickerUpgradesDowngrades(ticker),
      tickerRepo.getTickerPriceTargetConsensus(ticker),
      tickerRepo.getTickerPriceTargetSummary(ticker),
    ]);

    return {
      profile,
      consensus,
      analystRecommendation,
      upgradesDowngrades,
      priceTargetConsensus,
      priceTargetSummary
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw error;
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
    priceTargetSummary
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
    />
  );
}

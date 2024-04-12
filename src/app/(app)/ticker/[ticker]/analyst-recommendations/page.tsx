import { Metadata } from "next";
import React from "react";
import AnalystRecommendationScreen from "./screen";
import { SearchTickerPageProps } from "../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface AnalystRecommendationPageProps extends SearchTickerPageProps {}

function AnalystRecommendationPage(props: AnalystRecommendationPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Analyst Recommendation | Investalytix`;

  return <AnalystRecommendationScreen ticker={ticker} />;
}

export default AnalystRecommendationPage;

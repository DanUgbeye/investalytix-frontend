import { Metadata } from "next";
import React from "react";
import RatioScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface RatioPageProps extends SearchTickerPageProps {}

function RatioPage(props: RatioPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Financials - Ratio | Investalytix`;

  return <RatioScreen ticker={ticker} />;
}

export default RatioPage;

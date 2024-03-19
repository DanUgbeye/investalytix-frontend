import { Metadata } from "next";
import React from "react";
import StockDescriptionRatioScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface StockDescriptionRatioPageProps extends SearchTickerPageProps {}

function StockDescriptionRatioPage(props: StockDescriptionRatioPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Ratios | Investalytix`;

  return <StockDescriptionRatioScreen ticker={ticker} />;
}

export default StockDescriptionRatioPage;

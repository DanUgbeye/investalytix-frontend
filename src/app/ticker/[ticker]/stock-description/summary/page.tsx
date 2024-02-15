import { Metadata } from "next";
import React from "react";
import StockDescriptionScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface StockDescriptionPageProps extends SearchTickerPageProps {}

function StockDescriptionPage(props: StockDescriptionPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Summary | Investalytix`;

  return <StockDescriptionScreen ticker={ticker} />;
}

export default StockDescriptionPage;

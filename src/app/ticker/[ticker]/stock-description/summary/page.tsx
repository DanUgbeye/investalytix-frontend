import { Metadata } from "next";
import React from "react";
import StockDescriptionSummaryScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface StockDescriptionSummaryPageProps extends SearchTickerPageProps {}

function StockDescriptionSummaryPage(props: StockDescriptionSummaryPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Summary | Investalytix`;

  return <StockDescriptionSummaryScreen ticker={ticker} />;
}

export default StockDescriptionSummaryPage;

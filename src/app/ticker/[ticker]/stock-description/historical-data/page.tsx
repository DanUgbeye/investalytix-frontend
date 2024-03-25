import { Metadata } from "next";
import React from "react";
import StockDescriptionHistoricalDataScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface StockDescriptionHistoricalDataPageProps
  extends SearchTickerPageProps {}

function StockDescriptionHistoricalDataPage(
  props: StockDescriptionHistoricalDataPageProps
) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Historical Data | Investalytix`;

  return <StockDescriptionHistoricalDataScreen ticker={ticker} />;
}

export default StockDescriptionHistoricalDataPage;

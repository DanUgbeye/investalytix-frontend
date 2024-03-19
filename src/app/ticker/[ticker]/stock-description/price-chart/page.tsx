import { Metadata } from "next";
import React from "react";
import StockDescriptionPriceChartScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface StockDescriptionPriceChartPageProps extends SearchTickerPageProps {}

function StockDescriptionPriceChartPage(
  props: StockDescriptionPriceChartPageProps
) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Price Chart | Investalytix`;

  return <StockDescriptionPriceChartScreen ticker={ticker} />;
}

export default StockDescriptionPriceChartPage;

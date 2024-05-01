import { Metadata } from "next";
import React from "react";
import PriceChartScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface PriceChartPageProps extends SearchTickerPageProps {}

export default function PriceChartPage(props: PriceChartPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Price Chart | Investalytix`;

  return <PriceChartScreen ticker={ticker} />;
}

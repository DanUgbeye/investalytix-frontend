import { Metadata } from "next";
import React from "react";
import HistoricalDataScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface HistoricalDataPageProps extends SearchTickerPageProps {}

export default function HistoricalDataPage(props: HistoricalDataPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Historical Data | Investalytix`;

  return <HistoricalDataScreen ticker={ticker} />;
}

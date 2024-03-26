import { Metadata } from "next";
import React from "react";
import SummaryScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface SummaryPageProps extends SearchTickerPageProps {}

function SummaryPage(props: SummaryPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Summary | Investalytix`;

  return <SummaryScreen ticker={ticker} />;
}

export default SummaryPage;

import { Metadata } from "next";
import React from "react";
import DividendsScreen from "./screen";
import { SearchTickerPageProps } from "../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface DividendsPageProps extends SearchTickerPageProps {}

function DividendsPage(props: DividendsPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Dividends | Investalytix`;

  return <DividendsScreen ticker={ticker} />;
}

export default DividendsPage;

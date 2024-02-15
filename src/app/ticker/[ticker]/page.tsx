import { Metadata } from "next";
import React from "react";
import SearchTickerScreen from "./screen";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

export interface SearchTickerPageProps {
  params: {
    ticker: string;
  };
}

function SearchTickerPage(props: SearchTickerPageProps) {
  const {
    params: { ticker },
  } = props;

  return <SearchTickerScreen ticker={ticker} />;
}

export default SearchTickerPage;

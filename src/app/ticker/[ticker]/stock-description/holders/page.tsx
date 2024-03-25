import { Metadata } from "next";
import React from "react";
import StockDescriptionHoldersScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface StockDescriptionHoldersPageProps extends SearchTickerPageProps {}

function StockDescriptionHoldersPage(props: StockDescriptionHoldersPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Holders | Investalytix`;

  return <StockDescriptionHoldersScreen ticker={ticker} />;
}

export default StockDescriptionHoldersPage;

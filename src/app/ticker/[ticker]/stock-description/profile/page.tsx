import { Metadata } from "next";
import React from "react";
import StockDescriptionProfileScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface StockDescriptionProfilePageProps extends SearchTickerPageProps {}

function StockDescriptionProfilePage(props: StockDescriptionProfilePageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Profile | Investalytix`;

  return <StockDescriptionProfileScreen ticker={ticker} />;
}

export default StockDescriptionProfilePage;

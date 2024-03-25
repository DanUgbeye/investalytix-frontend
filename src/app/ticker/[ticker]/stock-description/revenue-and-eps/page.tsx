import { Metadata } from "next";
import React from "react";
import StockDescriptionRevenueAndEPSScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface StockDescriptionRevenueAndEPSPageProps extends SearchTickerPageProps {}

function StockDescriptionRevenueAndEPSPage(
  props: StockDescriptionRevenueAndEPSPageProps
) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Revenue and EPS | Investalytix`;

  return <StockDescriptionRevenueAndEPSScreen ticker={ticker} />;
}

export default StockDescriptionRevenueAndEPSPage;

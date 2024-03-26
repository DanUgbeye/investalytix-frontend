import { Metadata } from "next";
import React from "react";
import RevenueAndEPSScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface RevenueAndEPSPageProps extends SearchTickerPageProps {}

export default function RevenueAndEPSPage(props: RevenueAndEPSPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Revenue and EPS | Investalytix`;

  return <RevenueAndEPSScreen ticker={ticker} />;
}

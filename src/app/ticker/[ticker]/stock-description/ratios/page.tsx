import { Metadata } from "next";
import React from "react";
import RatiosScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface RatiosPageProps extends SearchTickerPageProps {}

export default function RatiosPage(props: RatiosPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Ratios | Investalytix`;

  return <RatiosScreen ticker={ticker} />;
}

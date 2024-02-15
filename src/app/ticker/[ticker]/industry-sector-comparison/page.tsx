import { Metadata } from "next";
import React from "react";
import IndustrySectorComparisonScreen from "./screen";
import { SearchTickerPageProps } from "../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface IndustrySectorComparisonPageProps extends SearchTickerPageProps {}

function IndustrySectorComparisonPage(
  props: IndustrySectorComparisonPageProps
) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Industry Sector Comparison | Investalytix`;

  return <IndustrySectorComparisonScreen ticker={ticker} />;
}

export default IndustrySectorComparisonPage;

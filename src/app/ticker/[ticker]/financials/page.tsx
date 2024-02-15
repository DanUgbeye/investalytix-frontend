import { Metadata } from "next";
import React from "react";
import FinancalsScreen from "./screen";
import { SearchTickerPageProps } from "../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface FinancalsPageProps extends SearchTickerPageProps {}

function FinancalsPage(props: FinancalsPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Financals | Investalytix`;

  return <FinancalsScreen ticker={ticker} />;
}

export default FinancalsPage;

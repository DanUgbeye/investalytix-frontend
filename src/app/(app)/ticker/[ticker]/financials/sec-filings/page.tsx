import { Metadata } from "next";
import React from "react";
import SECFilingsScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Investalytix",
};

interface SECFilingsPageProps extends SearchTickerPageProps {}

function SECFilingsPage(props: SECFilingsPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Financials - SEC Filings | Investalytix`;

  return <SECFilingsScreen ticker={ticker} />;
}

export default SECFilingsPage;

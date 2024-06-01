import { Metadata } from "next";
import React from "react";
import KeyStatsScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Investalytix",
};

interface KeyStatsPageProps extends SearchTickerPageProps {}

function KeyStatsPage(props: KeyStatsPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Financials - Key Stats | Investalytix`;

  return <KeyStatsScreen ticker={ticker} />;
}

export default KeyStatsPage;

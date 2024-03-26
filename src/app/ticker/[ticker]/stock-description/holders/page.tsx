import { Metadata } from "next";
import React from "react";
import HoldersScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface HoldersPageProps extends SearchTickerPageProps {}

export default function HoldersPage(props: HoldersPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Holders | Investalytix`;

  return <HoldersScreen ticker={ticker} />;
}

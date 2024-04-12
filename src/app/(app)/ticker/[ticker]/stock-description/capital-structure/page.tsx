import { Metadata } from "next";
import React from "react";
import CapitalStructureScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface CapitalStructurePageProps extends SearchTickerPageProps {}

export default function CapitalStructurePage(props: CapitalStructurePageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Capital Structure | Investalytix`;

  return <CapitalStructureScreen ticker={ticker} />;
}

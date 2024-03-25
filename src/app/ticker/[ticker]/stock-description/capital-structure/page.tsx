import { Metadata } from "next";
import React from "react";
import StockDescriptionCapitalStructureScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface StockDescriptionCapitalStructurePageProps
  extends SearchTickerPageProps {}

function StockDescriptionCapitalStructurePage(
  props: StockDescriptionCapitalStructurePageProps
) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Capital Structure | Investalytix`;

  return <StockDescriptionCapitalStructureScreen ticker={ticker} />;
}

export default StockDescriptionCapitalStructurePage;

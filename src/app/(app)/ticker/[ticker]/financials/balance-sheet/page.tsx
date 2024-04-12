import { Metadata } from "next";
import React from "react";
import BalanceSheetScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface BalanceSheetPageProps extends SearchTickerPageProps {}

function BalanceSheetPage(props: BalanceSheetPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Financials - Balance Sheet | Investalytix`;

  return <BalanceSheetScreen ticker={ticker} />;
}

export default BalanceSheetPage;

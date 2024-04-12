import { Metadata } from "next";
import React from "react";
import CashFlowStatementScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface CashFlowStatementPageProps extends SearchTickerPageProps {}

function CashFlowStatementPage(props: CashFlowStatementPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Financials - Cash Flow Statement | Investalytix`;

  return <CashFlowStatementScreen ticker={ticker} />;
}

export default CashFlowStatementPage;

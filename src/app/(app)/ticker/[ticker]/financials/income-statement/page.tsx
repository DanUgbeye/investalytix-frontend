import { Metadata } from "next";
import React from "react";
import IncomeStatementScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Investalytix",
};

interface IncomeStatementPageProps extends SearchTickerPageProps {}

function IncomeStatementPage(props: IncomeStatementPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Financials - Income Statement | Investalytix`;

  return <IncomeStatementScreen ticker={ticker} />;
}

export default IncomeStatementPage;

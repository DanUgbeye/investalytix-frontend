import { Metadata } from "next";
import React from "react";
import IncomeStatementScreen from "./screen";
import { SearchTickerPageProps } from "../../page";
import { TickerRepository } from "@/modules/ticker/repository";
import { serverAPI } from "@/config/server/api";
import { notFound } from "next/navigation";
import { errorUtils } from "@/utils/error.utils";
import { FinancialPeriod } from "@/modules/ticker/types";
import { FinancialPeriodSchema } from "@/modules/ticker/validation";

export const metadata: Metadata = {
  title: "Investalytix",
};

async function getData(ticker: string, period: FinancialPeriod = "quarterly") {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [outlook, incomeStatement] = await Promise.all([
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getIncomeStatement(ticker, { period }),
    ]);

    metadata.title = `${outlook.profile.companyName} (${ticker}) Financials - ${period.toUpperCase()} Income Statement | Investalytix`;

    return {
      outlook,
      incomeStatement,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface IncomeStatementPageProps extends SearchTickerPageProps {
  searchParams: {
    period?: FinancialPeriod;
  };
}

export default async function IncomeStatementPage(
  props: IncomeStatementPageProps
) {
  const {
    params: { ticker },
    searchParams: { period },
  } = props;

  const { success, data } = FinancialPeriodSchema.safeParse(period);
  const { incomeStatement, outlook } = await getData(
    ticker,
    success ? data : undefined
  );

  return (
    <IncomeStatementScreen
      ticker={ticker}
      incomeStatement={incomeStatement}
      period={data || "quarterly"}
    />
  );
}

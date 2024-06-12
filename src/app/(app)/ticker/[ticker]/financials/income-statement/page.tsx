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

export async function generateMetadata(props: {
  params: { ticker: string };
}): Promise<Metadata> {
  try {
    const {
      params: { ticker },
    } = props;

    const tickerRepo = new TickerRepository(serverAPI);
    const profile = await tickerRepo.getCompanyProfile(ticker);

    return {
      title: `${profile.companyName} (${profile.symbol}) Financials - Income Statement | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

async function getData(ticker: string, period: FinancialPeriod = "quarter") {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [outlook, incomeStatement] = await Promise.all([
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getIncomeStatement(ticker, { period }),
    ]);

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
      period={data}
      currency={outlook.profile.currency}
    />
  );
}

import { Metadata } from "next";
import React from "react";
import BalanceSheetScreen from "./screen";
import { SearchTickerPageProps } from "../../page";
import { FinancialPeriod } from "@/modules/ticker/types";
import { TickerRepository } from "@/modules/ticker/repository";
import { serverAPI } from "@/config/server/api";
import { errorUtils } from "@/utils/error.utils";
import { notFound } from "next/navigation";
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
      title: `${profile.companyName} (${profile.symbol}) Financials - Balance Sheet | Investalytix`,
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
    const [outlook, balanceSheet] = await Promise.all([
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getBalanceSheetStatement(ticker, { period }),
    ]);

    return {
      outlook,
      balanceSheet,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface BalanceSheetPageProps extends SearchTickerPageProps {
  searchParams: {
    period?: FinancialPeriod;
  };
}

export default async function BalanceSheetPage(props: BalanceSheetPageProps) {
  const {
    params: { ticker },
    searchParams: { period },
  } = props;

  const { success, data } = FinancialPeriodSchema.safeParse(period);
  const { balanceSheet, outlook } = await getData(ticker, data);

  return (
    <BalanceSheetScreen
      ticker={ticker}
      period={data}
      balanceSheet={balanceSheet}
      currency={outlook.profile.currency}
    />
  );
}

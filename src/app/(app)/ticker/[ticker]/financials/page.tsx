import { Metadata } from "next";
import React from "react";
import KeyStatsScreen from "./screen";
import { SearchTickerPageProps } from "../page";
import { TickerRepository } from "@/modules/ticker/repository";
import { serverAPI } from "@/config/server/api";
import { errorUtils } from "@/utils/error.utils";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Investalytix",
};

async function getData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [outlook] = await Promise.all([tickerRepo.getCompanyOutLook(ticker)]);

    return {
      outlook,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface KeyStatsPageProps extends SearchTickerPageProps {
  searchParams: {
    period?: "annual" | "quarterly";
  };
}

export default async function KeyStatsPage(props: KeyStatsPageProps) {
  const {
    params: { ticker },
    searchParams: { period },
  } = props;

  const { outlook } = await getData(ticker);
  metadata.title = `${outlook.profile.companyName} (${ticker}) Financials - Key Stats | Investalytix`;

  let financials = outlook.financialsQuarter;
  if (period === "annual") {
    financials = outlook.financialsAnnual;
  }

  return <KeyStatsScreen ticker={ticker} financials={financials} />;
}

import { Metadata } from "next";
import React from "react";
import RevenueAndEPSScreen from "./screen";
import { SearchTickerPageProps } from "../../page";
import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { timeStamp } from "console";

async function getData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    let [quote, earnings] = await Promise.all([
      tickerRepo.getQuote(ticker),
      tickerRepo.getEarningsHistory(ticker),
    ]);

    let isAuthenticated = cookies().has("auth");
    let currentYr = new Date().getFullYear();
    
    if (!isAuthenticated) {
      earnings = earnings.filter(
        (earning) => currentYr - earning.date.getFullYear() <= 10
      );
    }

    return { quote, earnings, timeStamp: new Date() };
  } catch (error: any) {
    if (
      error instanceof Error &&
      error.message.toLowerCase().includes("not found")
    ) {
      metadata.title = "Ticker not found";
      return notFound();
    }

    throw error;
  }
}

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface RevenueAndEPSPageProps extends SearchTickerPageProps {}

export default async function RevenueAndEPSPage(props: RevenueAndEPSPageProps) {
  const {
    params: { ticker },
  } = props;

  const { quote, earnings } = await getData(ticker);

  metadata.title = `${quote.name} (${ticker}) Stock Description - Revenue and EPS | Investalytix`;

  return (
    <RevenueAndEPSScreen ticker={ticker} quote={quote} earnings={earnings} />
  );
}

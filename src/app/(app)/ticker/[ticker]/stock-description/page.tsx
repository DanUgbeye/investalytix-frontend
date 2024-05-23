import { Metadata } from "next";
import React from "react";
import { TickerRepository } from "@/modules/ticker/repository";
import { serverAPI } from "@/config/server/api";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../page";
import SummaryScreen from "./screen";
import { errorUtils } from "@/utils/error.utils";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

async function getTickerData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    const [quote, outlook] = await Promise.all([
      tickerRepo.getQuote(ticker),
      tickerRepo.getCompanyOutLook(ticker),
    ]);

    return {
      timeStamp: new Date(),
      quote,
      outlook,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw error;
  }
}

interface SummaryPageProps extends SearchTickerPageProps {}

async function SummaryPage(props: SummaryPageProps) {
  const {
    params: { ticker },
  } = props;

  const { quote, outlook } = await getTickerData(ticker);

  metadata.title = `${quote.name} (${ticker}) Stock Description - Summary | Investalytix`;

  return <SummaryScreen ticker={ticker} quote={quote} outlook={outlook} />;
}

export default SummaryPage;

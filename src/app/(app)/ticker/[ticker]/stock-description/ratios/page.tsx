import { Metadata } from "next";
import React from "react";
import RatiosScreen from "./screen";
import { SearchTickerPageProps } from "../../page";
import { TickerRepository } from "@/modules/ticker/repository";
import { serverAPI } from "@/config/server/api";
import { errorUtils } from "@/utils/error.utils";
import { notFound } from "next/navigation";

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
      title: `${profile.companyName} (${profile.symbol}) Stock Description - Ratios | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

async function getData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    const [quote, outlook, ratio] = await Promise.all([
      tickerRepo.getQuote(ticker),
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getRatios(ticker, { period: "annual", limit: 1 }),
    ]);

    return {
      quote,
      outlook,
      ratio: ratio.length > 0 ? ratio[0] : undefined,
    }; 
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw error;
  }
}

interface RatiosPageProps extends SearchTickerPageProps {}

export default async function RatiosPage(props: RatiosPageProps) {
  const {
    params: { ticker },
  } = props;

  const { outlook, quote, ratio } = await getData(ticker);

  return (
    <RatiosScreen
      ticker={ticker}
      outlook={outlook}
      quote={quote}
      ratio={ratio}
    />
  );
}

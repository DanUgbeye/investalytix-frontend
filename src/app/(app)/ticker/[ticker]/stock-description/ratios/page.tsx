import { Metadata } from "next";
import React from "react";
import RatiosScreen from "./screen";
import { SearchTickerPageProps } from "../../page";
import { TickerRepository } from "@/modules/ticker/repository";
import { serverAPI } from "@/config/server/api";
import { errorUtils } from "@/utils/error.utils";
import { notFound } from "next/navigation";
import { Quote, Result } from "@/types";
import { CompanyOutlook, Ratio } from "@/modules/ticker/types";
import ErrorScreen from "../../error-screen";

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

export type RatiosPageData = {
  quote: Quote;
  ratio?: Ratio;
  outlook: CompanyOutlook;
};

async function getData(ticker: string): Promise<Result<RatiosPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    const [quote, outlook, ratio] = await Promise.all([
      tickerRepo.getQuote(ticker),
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getRatios(ticker, { period: "annual", limit: 1 }),
    ]);

    return {
      data: { quote, outlook, ratio: ratio.length > 0 ? ratio[0] : undefined },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface RatiosPageProps extends SearchTickerPageProps {}

export default async function RatiosPage(props: RatiosPageProps) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <RatiosScreen ticker={ticker} {...data} />;
}

import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../page";
import KeyStatsScreen from "./screen";
import { Financials } from "@/modules/ticker/types";
import { Result } from "@/types";
import ErrorScreen from "../error-screen";

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
      title: `${profile.companyName} (${profile.symbol}) Financials - Key Stats | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type FinancialsPageData = {
  financials: {
    annual: Financials;
    quarter: Financials;
  };
  currency?: string;
};

async function getData(ticker: string): Promise<Result<FinancialsPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [outlook] = await Promise.all([tickerRepo.getCompanyOutLook(ticker)]);

    return {
      data: {
        currency: outlook.profile.currency || undefined,
        financials: {
          annual: outlook.financialsAnnual,
          quarter: outlook.financialsQuarter,
        },
      },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface KeyStatsPageProps extends SearchTickerPageProps {}

export default async function KeyStatsPage(props: KeyStatsPageProps) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <KeyStatsScreen ticker={ticker} {...data} />;
}

import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../../page";
import SECFilingsScreen from "./screen";
import { SecFiling } from "@/modules/ticker/types";
import { Result } from "@/types";
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
      title: `${profile.companyName} (${profile.symbol}) Financials - SEC Filings | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type SECFilingPageData = {
  SECFilings: SecFiling[];
};

async function getData(ticker: string): Promise<Result<SECFilingPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [SECFilings] = await Promise.all([
      tickerRepo.getSECFilings(ticker, {
        limit: 100,
      }),
    ]);

    return {
      data: { SECFilings },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface SECFilingsPageProps extends SearchTickerPageProps {}

export default async function SECFilingsPage(props: SECFilingsPageProps) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <SECFilingsScreen ticker={ticker} {...data} />;
}

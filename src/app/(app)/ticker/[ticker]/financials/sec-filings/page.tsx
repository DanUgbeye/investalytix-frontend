import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../../page";
import SECFilingsScreen from "./screen";

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

async function getData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [outlook, SECFilings] = await Promise.all([
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getSECFilings(ticker, {
        limit: 100,
      }),
    ]);

    return {
      outlook,
      SECFilings,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface SECFilingsPageProps extends SearchTickerPageProps {
  searchParams: {
    type?: string;
    page?: number;
    limit?: number;
  };
}

export default async function SECFilingsPage(props: SECFilingsPageProps) {
  const {
    params: { ticker },
  } = props;

  const { SECFilings } = await getData(ticker);

  return <SECFilingsScreen ticker={ticker} SECFilings={SECFilings} />;
}

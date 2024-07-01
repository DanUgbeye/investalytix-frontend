import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { Earning } from "@/modules/ticker/types";
import { Result } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ErrorScreen from "../../error-screen";
import { SearchTickerPageProps } from "../../page";
import RevenueAndEPSScreen from "./screen";

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
      title: `${profile.companyName} (${profile.symbol}) Stock Description - Revenue and EPS | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type RevenueEPSPageData = {
  earnings: Earning[];
  currency: string;
};

async function getData(ticker: string): Promise<Result<RevenueEPSPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    let [profile, earnings] = await Promise.all([
      tickerRepo.getCompanyProfile(ticker),
      tickerRepo.getEarningsHistory(ticker),
    ]);

    return { data: { earnings, currency: profile.currency } };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface RevenueAndEPSPageProps extends SearchTickerPageProps {}

export default async function RevenueAndEPSPage(props: RevenueAndEPSPageProps) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <RevenueAndEPSScreen ticker={ticker} {...data} />;
}

import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
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

async function getData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    let [profile, earnings] = await Promise.all([
      tickerRepo.getCompanyProfile(ticker),
      tickerRepo.getEarningsHistory(ticker),
    ]);

    return { earnings, profile, timeStamp: new Date() };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface RevenueAndEPSPageProps extends SearchTickerPageProps {}

export default async function RevenueAndEPSPage(props: RevenueAndEPSPageProps) {
  const {
    params: { ticker },
  } = props;

  const { earnings, profile } = await getData(ticker);

  return (
    <RevenueAndEPSScreen
      ticker={ticker}
      earnings={earnings}
      currency={profile.currency}
    />
  );
}

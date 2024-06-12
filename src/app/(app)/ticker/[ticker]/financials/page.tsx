import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../page";
import KeyStatsScreen from "./screen";

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

interface KeyStatsPageProps extends SearchTickerPageProps {}

export default async function KeyStatsPage(props: KeyStatsPageProps) {
  const {
    params: { ticker },
  } = props;

  const { outlook } = await getData(ticker);

  return (
    <KeyStatsScreen
      ticker={ticker}
      currency={outlook.profile.currency}
      financials={{
        annual: outlook.financialsAnnual,
        quarter: outlook.financialsQuarter,
      }}
    />
  );
}

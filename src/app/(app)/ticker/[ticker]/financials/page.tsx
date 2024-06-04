import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { FinancialPeriod } from "@/modules/ticker/types";
import { FinancialPeriodSchema } from "@/modules/ticker/validation";
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
    const outlook = await tickerRepo.getCompanyOutLook(ticker);

    return {
      title: `${outlook.profile.companyName} (${outlook.profile.symbol}) Financials - Key Stats | Investalytix`,
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

interface KeyStatsPageProps extends SearchTickerPageProps {
  searchParams: {
    period?: FinancialPeriod;
  };
}

export default async function KeyStatsPage(props: KeyStatsPageProps) {
  const {
    params: { ticker },
    searchParams: { period },
  } = props;

  const { outlook } = await getData(ticker);
  const { success, data } = FinancialPeriodSchema.safeParse(period);

  let financials = outlook.financialsQuarter;
  if (data === "annual") {
    financials = outlook.financialsAnnual;
  }

  return (
    <KeyStatsScreen ticker={ticker} financials={financials} period={data} />
  );
}

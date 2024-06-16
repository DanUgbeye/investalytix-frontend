import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../../page";
import RatioScreen from "./screen";
import { FinancialPeriod } from "@/modules/ticker/types";
import { FinancialPeriodSchema } from "@/modules/ticker/validation";

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
      title: `${profile.companyName} (${profile.symbol}) Financials - Ratios | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

async function getData(ticker: string, period: FinancialPeriod = "quarter") {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [outlook, ratios] = await Promise.all([
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getRatios(ticker, { period }),
    ]);

    return {
      outlook,
      ratios,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface RatioPageProps extends SearchTickerPageProps {
  searchParams: {
    period?: FinancialPeriod;
  };
}

export default async function RatioPage(props: RatioPageProps) {
  const {
    params: { ticker },
    searchParams: { period },
  } = props;

  const { data } = FinancialPeriodSchema.safeParse(period);
  const { outlook, ratios } = await getData(ticker, data);

  return (
    <RatioScreen
      ticker={ticker}
      ratios={ratios}
      currency={outlook.profile.currency}
      period={data}
    />
  );
}

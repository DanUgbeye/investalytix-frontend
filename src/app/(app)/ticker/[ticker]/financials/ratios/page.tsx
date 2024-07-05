import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../../page";
import RatioScreen from "./screen";
import { FinancialPeriod, Ratio } from "@/modules/ticker/types";
import { FinancialPeriodSchema } from "@/modules/ticker/validation";
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
      title: `${profile.companyName} (${profile.symbol}) Financials - Ratios | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type FinancialRatiosPageData = {
  ratios: Ratio[];
  period?: FinancialPeriod;
  currency?: string;
};

async function getData(
  ticker: string,
  period: FinancialPeriod = "quarter"
): Promise<Result<FinancialRatiosPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [outlook, ratios] = await Promise.all([
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getRatios(ticker, { period }),
    ]);

    return {
      data: { period, currency: outlook.profile.currency || undefined, ratios },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
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

  const { data: verifiedPeriod } = FinancialPeriodSchema.safeParse(period);
  const { data, error } = await getData(ticker, verifiedPeriod);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <RatioScreen ticker={ticker} {...data} />;
}

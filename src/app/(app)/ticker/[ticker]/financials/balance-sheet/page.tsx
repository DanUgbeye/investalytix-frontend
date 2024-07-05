import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { BalanceSheetStatement, FinancialPeriod } from "@/modules/ticker/types";
import { FinancialPeriodSchema } from "@/modules/ticker/validation";
import { Result } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ErrorScreen from "../../error-screen";
import { SearchTickerPageProps } from "../../page";
import BalanceSheetScreen from "./screen";

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
      title: `${profile.companyName} (${profile.symbol}) Financials - Balance Sheet | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type BalanceSheetPageData = {
  balanceSheet: BalanceSheetStatement[];
  period?: FinancialPeriod;
  currency: string;
};

async function getData(
  ticker: string,
  period: FinancialPeriod = "quarter"
): Promise<Result<BalanceSheetPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [outlook, balanceSheet] = await Promise.all([
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getBalanceSheetStatement(ticker, { period }),
    ]);

    return {
      data: { period, currency: outlook.profile.currency, balanceSheet },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface BalanceSheetPageProps extends SearchTickerPageProps {
  searchParams: {
    period?: FinancialPeriod;
  };
}

export default async function BalanceSheetPage(props: BalanceSheetPageProps) {
  const {
    params: { ticker },
    searchParams: { period },
  } = props;

  const { success, data: verifiedPeriod } =
    FinancialPeriodSchema.safeParse(period);
  const { data, error } = await getData(ticker, verifiedPeriod);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <BalanceSheetScreen ticker={ticker} {...data} />;
}

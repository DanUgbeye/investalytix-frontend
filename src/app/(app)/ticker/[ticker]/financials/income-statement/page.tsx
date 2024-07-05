import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { FinancialPeriod, IncomeStatement } from "@/modules/ticker/types";
import { FinancialPeriodSchema } from "@/modules/ticker/validation";
import { Result } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ErrorScreen from "../../error-screen";
import { SearchTickerPageProps } from "../../page";
import IncomeStatementScreen from "./screen";

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
      title: `${profile.companyName} (${profile.symbol}) Financials - Income Statement | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type IncomeStatementPageData = {
  incomeStatement: IncomeStatement[];
  period?: FinancialPeriod;
  currency?: string;
};

async function getData(
  ticker: string,
  period: FinancialPeriod = "quarter"
): Promise<Result<IncomeStatementPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [outlook, incomeStatement] = await Promise.all([
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getIncomeStatement(ticker, { period }),
    ]);

    return {
      data: {
        currency: outlook.profile.currency || undefined,
        period,
        incomeStatement,
      },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface IncomeStatementPageProps extends SearchTickerPageProps {
  searchParams: {
    period?: FinancialPeriod;
  };
}

export default async function IncomeStatementPage(
  props: IncomeStatementPageProps
) {
  const {
    params: { ticker },
    searchParams: { period },
  } = props;

  const { data: verifiedPeriod } = FinancialPeriodSchema.safeParse(period);
  const { data, error } = await getData(ticker, verifiedPeriod);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <IncomeStatementScreen ticker={ticker} {...data} />;
}

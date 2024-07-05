import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { CashFlowStatement, FinancialPeriod } from "@/modules/ticker/types";
import { FinancialPeriodSchema } from "@/modules/ticker/validation";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../../page";
import CashFlowStatementScreen from "./screen";
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
      title: `${profile.companyName} (${profile.symbol}) Financials - Cash Flow Statement | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type CashFlowStatementPageData = {
  cashFlowStatement: CashFlowStatement[];
  period?: FinancialPeriod;
  currency: string;
};

async function getData(
  ticker: string,
  period: FinancialPeriod = "quarter"
): Promise<Result<CashFlowStatementPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [outlook, cashFlowStatement] = await Promise.all([
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getCashFlowStatement(ticker, { period }),
    ]);

    return {
      data: { currency: outlook.profile.currency, period, cashFlowStatement },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface CashFlowStatementPageProps extends SearchTickerPageProps {
  searchParams: {
    period?: FinancialPeriod;
  };
}

async function CashFlowStatementPage(props: CashFlowStatementPageProps) {
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

  return <CashFlowStatementScreen ticker={ticker} {...data} />;
}

export default CashFlowStatementPage;

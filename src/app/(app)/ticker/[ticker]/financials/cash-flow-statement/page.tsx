import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { FinancialPeriod } from "@/modules/ticker/types";
import { FinancialPeriodSchema } from "@/modules/ticker/validation";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../../page";
import CashFlowStatementScreen from "./screen";

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

async function getData(ticker: string, period: FinancialPeriod = "quarter") {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [outlook, cashFlowStatement] = await Promise.all([
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getCashFlowStatement(ticker, { period }),
    ]);

    return {
      outlook,
      cashFlowStatement,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
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

  const { success, data } = FinancialPeriodSchema.safeParse(period);
  const { cashFlowStatement, outlook } = await getData(
    ticker,
    success ? data : undefined
  );

  return (
    <CashFlowStatementScreen
      ticker={ticker}
      currency={outlook.profile.currency}
      cashFlowStatement={cashFlowStatement}
      period={data}
    />
  );
}

export default CashFlowStatementPage;

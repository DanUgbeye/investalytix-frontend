import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import {
  BalanceSheetStatementGrowth,
  CashFlowStatementGrowth,
  CompanyOutlook,
  FinancialGrowth,
  IncomeStatementGrowth,
  Ratio,
} from "@/modules/ticker/types";
import { Quote, Result } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ErrorScreen from "../../error-screen";
import { SearchTickerPageProps } from "../../page";
import RatiosScreen from "./screen";

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
      title: `${profile.companyName} (${profile.symbol}) Stock Description - Ratios | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type RatiosPageData = {
  quote: Quote;
  ratio?: Ratio;
  outlook: CompanyOutlook;
  financialGrowth?: FinancialGrowth;
  incomeGrowth?: IncomeStatementGrowth;
  cashFlowGrowth?: CashFlowStatementGrowth;
  balanceSheetGrowth?: BalanceSheetStatementGrowth;
};

async function getData(ticker: string): Promise<Result<RatiosPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    const [
      quote,
      outlook,
      ratio,
      financialGrowth,
      incomeGrowth,
      cashFlowGrowth,
      balanceSheetGrowth,
    ] = await Promise.all([
      tickerRepo.getQuote(ticker),
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getRatios(ticker, { period: "annual", limit: 1 }),
      tickerRepo.getFinancialGrowth(ticker, { period: "annual", limit: 1 }),
      tickerRepo.getIncomeStatementGrowth(ticker, {
        period: "annual",
        limit: 1,
      }),
      tickerRepo.getCashFlowStatementGrowth(ticker, {
        period: "annual",
        limit: 1,
      }),
      tickerRepo.getBalanceSheetStatementGrowth(ticker, {
        period: "annual",
        limit: 1,
      }),
    ]);

    return {
      data: {
        quote,
        outlook,
        ratio: ratio.length > 0 ? ratio[0] : undefined,
        financialGrowth: financialGrowth[0],
        incomeGrowth: incomeGrowth[0],
        cashFlowGrowth: cashFlowGrowth[0],
        balanceSheetGrowth: balanceSheetGrowth[0],
      },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface RatiosPageProps extends SearchTickerPageProps {}

export default async function RatiosPage(props: RatiosPageProps) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <RatiosScreen ticker={ticker} {...data} />;
}

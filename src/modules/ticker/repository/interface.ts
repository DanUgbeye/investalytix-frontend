import { RequestOptions } from "@/types/api.types";
import {
  BalanceSheetStatement,
  CashFlowStatement,
  CompanyOutlook,
  Financials,
  IncomeStatement,
  TickerData,
} from "../types";
import { Quote } from "@/types";

export interface ITickerRepository {
  search(query: string, options?: RequestOptions): Promise<Quote[]>;

  getCompanyOutLook(
    ticker: string,
    options?: RequestOptions
  ): Promise<CompanyOutlook>;

  // FINANCIALS
  getKeyStats(ticker: string, options?: RequestOptions): Promise<Financials>;

  getIncomeStatement(
    ticker: string,
    options?: RequestOptions
  ): Promise<IncomeStatement[]>;

  getBalanceSheetStatement(
    ticker: string,
    options?: RequestOptions
  ): Promise<BalanceSheetStatement[]>;

  getCashFlowStatement(
    ticker: string,
    options?: RequestOptions
  ): Promise<CashFlowStatement[]>;
}

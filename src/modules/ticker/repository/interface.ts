import { RequestOptions } from "@/types/api.types";
import {
  BalanceSheetStatement,
  CashFlowStatement,
  CompanyOutlook,
  Financials,
  IncomeStatement,
} from "../types";

export interface ITickerRepository {
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

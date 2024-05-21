import { Quote, SearchResult, ShortQuote } from "@/types";
import { RequestOptions } from "@/types/api.types";
import {
  BalanceSheetStatement,
  CashFlowStatement,
  CompanyOutlook,
  Financials,
  IncomeStatement,
} from "../types";

export interface ITickerRepository {
  search(query: string, options?: RequestOptions): Promise<SearchResult[]>;

  getQuote(ticker: string, options?: RequestOptions): Promise<Quote>;

  getShortQuote(ticker: string, options?: RequestOptions): Promise<ShortQuote>;

  getCompanyOutLook(
    ticker: string,
    options?: RequestOptions
  ): Promise<CompanyOutlook>;

  // FINANCIALS
  getFinancials(ticker: string, options?: RequestOptions): Promise<Financials>;

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

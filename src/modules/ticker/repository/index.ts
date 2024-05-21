import { RequestOptions } from "@/types/api.types";
import { handleAPIError } from "@/utils/api-utils";
import { AxiosInstance } from "axios";
import { z } from "zod";
import {
  BalanceSheetStatement,
  CashFlowStatement,
  CompanyOutlook,
  Earning,
  Financials,
  IncomeStatement,
} from "../types";
import {
  BalanceSheetStatementSchema,
  CashFlowStatementSchema,
  CompanyOutlookSchema,
  EarningSchema,
  FinancialsSchema,
  IncomeStatementSchema,
} from "../validation";
import { ITickerRepository } from "./interface";
import { Quote, SearchResult, ShortQuote } from "@/types";
import {
  QuoteSchema,
  SearchResultSchema,
  ShortQuoteSchema,
} from "@/validation";

export class TickerRepository implements ITickerRepository {
  constructor(private readonly axios: AxiosInstance) {}

  async search(
    query: string,
    options?: RequestOptions | undefined
  ): Promise<SearchResult[]> {
    try {
      const searchParams = new URLSearchParams();
      searchParams.append("query", query);

      const path = `/tickers?${searchParams.toString()}`;
      let res = await this.axios.get<{ data: SearchResult[] }>(path, options);

      let validation = z.array(SearchResultSchema).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getQuote(ticker: string, options?: RequestOptions): Promise<Quote> {
    try {
      const path = `/tickers/${ticker}/quote`;
      let res = await this.axios.get<{ data: Quote }>(path, options);

      let validation = QuoteSchema.safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getShortQuote(
    ticker: string,
    options?: RequestOptions
  ): Promise<ShortQuote> {
    try {
      const path = `/tickers/${ticker}/quote-short`;
      let res = await this.axios.get<{ data: ShortQuote }>(path, options);

      let validation = ShortQuoteSchema.safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getCompanyOutLook(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<CompanyOutlook> {
    try {
      const path = `/tickers/${ticker}`;
      let res = await this.axios.get<{ data: CompanyOutlook }>(path, options);

      let validation = CompanyOutlookSchema.safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getEarningsHistory(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<Earning[]> {
    try {
      const path = `/tickers/${ticker}/earnings`;
      let res = await this.axios.get<{ data: CompanyOutlook }>(path, options);

      let validation = z.array(EarningSchema).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  // FINANCIALS
  async getFinancials(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<Financials> {
    try {
      const path = `/ticker/${ticker}/financials`;
      let res = await this.axios.get<{ data: Financials }>(path, options);

      let validation = FinancialsSchema.safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getIncomeStatement(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<IncomeStatement[]> {
    try {
      const path = `/ticker/${ticker}/financials/income-statement`;
      let res = await this.axios.get<{ data: IncomeStatement[] }>(
        path,
        options
      );

      let validation = z.array(IncomeStatementSchema).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getBalanceSheetStatement(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<BalanceSheetStatement[]> {
    try {
      const path = `/ticker/${ticker}/financials/balance-sheet-statement`;
      let res = await this.axios.get<{ data: BalanceSheetStatement[] }>(
        path,
        options
      );

      let validation = z
        .array(BalanceSheetStatementSchema)
        .safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getCashFlowStatement(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<CashFlowStatement[]> {
    try {
      const path = `/ticker/${ticker}/financials/cash-flow-statement`;
      let res = await this.axios.get<{ data: CashFlowStatement[] }>(
        path,
        options
      );

      let validation = z
        .array(CashFlowStatementSchema)
        .safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }
}

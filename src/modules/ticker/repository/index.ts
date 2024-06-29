import { NewsSchema } from "@/modules/news/validation";
import {
  Quote,
  QuoteHistory,
  QuoteTimeframe,
  SearchResult,
  ShortQuote,
} from "@/types";
import { RequestOptions } from "@/types/api.types";
import { handleAPIError } from "@/utils/api-utils";
import {
  QuoteHistorySchema,
  QuoteSchema,
  SearchResultSchema,
  ShortQuoteSchema,
} from "@/validation";
import { AxiosInstance } from "axios";
import { z } from "zod";
import {
  BalanceSheetStatement,
  CashFlowStatement,
  CompanyOutlook,
  CompanyProfile,
  Dividend,
  Earning,
  FinancialPeriod,
  Financials,
  IncomeStatement,
  InstitutionalHolder,
  MutualFundHolder,
  News,
  Ratio,
  SecFiling,
  TickerAnalystRecommendation,
  TickerUpgradeDowngradeConsensus,
  TickerUpgradesDowngrades,
} from "../types";
import {
  BalanceSheetStatementSchema,
  CashFlowStatementSchema,
  CompanyOutlookSchema,
  CompanyProfileSchema,
  DividendSchema,
  EarningSchema,
  FinancialsSchema,
  IncomeStatementSchema,
  InstitutionalHolderSchema,
  MutualFundHolderSchema,
  RatioSchema,
  SecFilingSchema,
  TickerAnalystRecommendationSchema,
  TickerUpgradeDowngradeConsensusSchema,
  TickerUpgradesDowngradesSchema,
} from "../validation";

export class TickerRepository {
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

  async getCompanyProfile(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<CompanyProfile> {
    try {
      const path = `/tickers/${ticker}/profile`;
      let res = await this.axios.get<{ data: CompanyProfile }>(path, options);
      let validation = CompanyProfileSchema.safeParse(res.data.data);

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

  async getQuoteHistory(
    ticker: string,
    timeframe: QuoteTimeframe,
    filter?: { from?: Date; to?: Date },
    options?: RequestOptions
  ): Promise<QuoteHistory[]> {
    try {
      const searchParams = new URLSearchParams();
      if (filter?.from) {
        searchParams.append("from", filter.from.toDateString());
      }
      if (filter?.to) {
        searchParams.append("to", filter.to.toDateString());
      }

      const path = `/tickers/${ticker}/historical-price/${timeframe}?${searchParams.toString()}`;
      let res = await this.axios.get<{ data: QuoteHistory }>(path, options);

      let validation = z.array(QuoteHistorySchema).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getDividendHistory(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<Dividend[]> {
    try {
      const path = `/tickers/${ticker}/dividend`;
      let res = await this.axios.get<{ data: Dividend[] }>(path, options);

      let validation = z
        .object({ symbol: z.string(), historical: z.array(DividendSchema) })
        .safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data.historical;
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
      let res = await this.axios.get<{ data: Earning[] }>(path, options);

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

  async getNews(
    ticker: string,
    filter?: { limit?: number; page?: number },
    options?: RequestOptions
  ): Promise<News[]> {
    try {
      const searchParams = new URLSearchParams();

      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }
      if (filter?.page) {
        searchParams.append("page", String(filter.page));
      }
      const path = `/tickers/${ticker}/news?${searchParams.toString()}`;

      let res = await this.axios.get<{ data: News }>(path.toString(), options);

      let validation = z.array(NewsSchema).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  // HOLDERS
  async getMutualFundHolders(
    ticker: string,
    options?: RequestOptions
  ): Promise<MutualFundHolder[]> {
    try {
      const path = `/tickers/${ticker}/mutual-fund-holders`;
      let res = await this.axios.get<{ data: MutualFundHolder[] }>(
        path,
        options
      );

      let validation = z.array(MutualFundHolderSchema).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getInstitutionalHolders(
    ticker: string,
    options?: RequestOptions
  ): Promise<InstitutionalHolder[]> {
    try {
      const path = `/tickers/${ticker}/institutional-holders`;
      let res = await this.axios.get<{ data: InstitutionalHolder[] }>(
        path,
        options
      );

      let validation = z
        .array(InstitutionalHolderSchema)
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

  // FINANCIALS
  async getFinancials(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<Financials> {
    try {
      const path = `/tickers/${ticker}/financials`;
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
    filter?: { period?: FinancialPeriod; page?: number; limit?: number },
    options?: RequestOptions | undefined
  ): Promise<IncomeStatement[]> {
    try {
      let searchParams = new URLSearchParams();

      if (filter?.period) {
        searchParams.append("period", filter.period);
      }
      if (filter?.page) {
        searchParams.append("page", String(filter.page));
      }
      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }

      const path = `/tickers/${ticker}/income-statement?${searchParams.toString()}`;
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
    filter?: { period?: FinancialPeriod; page?: number; limit?: number },
    options?: RequestOptions | undefined
  ): Promise<BalanceSheetStatement[]> {
    try {
      let searchParams = new URLSearchParams();

      if (filter?.period) {
        searchParams.append("period", filter.period);
      }
      if (filter?.page) {
        searchParams.append("page", String(filter.page));
      }
      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }

      const path = `/tickers/${ticker}/balance-sheet-statement?${searchParams.toString()}`;
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
    filter?: { period?: FinancialPeriod; page?: number; limit?: number },
    options?: RequestOptions | undefined
  ): Promise<CashFlowStatement[]> {
    try {
      let searchParams = new URLSearchParams();

      if (filter?.period) {
        searchParams.append("period", filter.period);
      }
      if (filter?.page) {
        searchParams.append("page", String(filter.page));
      }
      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }

      const path = `/tickers/${ticker}/cash-flow-statement?${searchParams.toString()}`;
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

  async getRatios(
    ticker: string,
    filter?: { period?: FinancialPeriod; page?: number; limit?: number },
    options?: RequestOptions | undefined
  ): Promise<Ratio[]> {
    try {
      let searchParams = new URLSearchParams();

      if (filter?.period) {
        searchParams.append("period", filter.period);
      }
      if (filter?.page) {
        searchParams.append("page", String(filter.page));
      }
      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }

      const path = `/tickers/${ticker}/ratios?${searchParams.toString()}`;
      let res = await this.axios.get<{ data: Ratio[] }>(path, options);

      let validation = z.array(RatioSchema).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getSECFilings(
    ticker: string,
    filter?: { type?: string; page?: number; limit?: number },
    options?: RequestOptions | undefined
  ): Promise<SecFiling[]> {
    try {
      let searchParams = new URLSearchParams();

      if (filter?.type) {
        searchParams.append("type", filter.type);
      }
      if (filter?.page) {
        searchParams.append("page", String(filter.page));
      }
      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }

      const path = `/tickers/${ticker}/sec-filings?${searchParams.toString()}`;
      let res = await this.axios.get<{ data: SecFiling[] }>(path, options);

      let validation = z.array(SecFilingSchema).safeParse(res.data.data);

      if (validation.error) {
        console.log(JSON.stringify(validation.error, null, 2));
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  // ANALYSIS
  async getTickerAnalystRecommendations(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<TickerAnalystRecommendation[]> {
    try {
      const path = `/tickers/${ticker}/analyst-recommendation`;
      let res = await this.axios.get<{ data: TickerAnalystRecommendation[] }>(
        path,
        options
      );

      let validation = z
        .array(TickerAnalystRecommendationSchema)
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

  async getTickerUpgradesDowngrades(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<TickerUpgradesDowngrades[]> {
    try {
      const path = `/tickers/${ticker}/upgrades-downgrades`;
      let res = await this.axios.get<{ data: TickerUpgradesDowngrades[] }>(
        path,
        options
      );

      let validation = z
        .array(TickerUpgradesDowngradesSchema)
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

  async getTickerUpgradesDowngradesConsensus(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<TickerUpgradeDowngradeConsensus | undefined> {
    try {
      const path = `/tickers/${ticker}/upgrades-downgrades-consensus`;
      let res = await this.axios.get<{
        data: TickerUpgradeDowngradeConsensus;
      }>(path, options);

      let validation = z
        .union([z.undefined(), TickerUpgradeDowngradeConsensusSchema])
        .safeParse(res.data.data);

      if (validation.error) {
        console.log(validation.error.issues);
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getTickerSimilarStocks(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<Quote[]> {
    try {
      const path = `/tickers/${ticker}/similar-stocks`;
      let res = await this.axios.get<{
        data: Quote[];
      }>(path, options);

      let validation = z.array(QuoteSchema).safeParse(res.data.data);

      if (validation.error) {
        console.log(validation.error.issues);
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }
}

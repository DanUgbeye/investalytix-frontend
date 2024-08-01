import { News } from "@/modules/news/types";
import { NewsSchema } from "@/modules/news/validation";
import {
  AfterMarketQuote,
  Quote,
  QuoteHistory,
  QuoteTimeframe,
  SearchResult,
  ShortQuote,
} from "@/types";
import { RequestOptions } from "@/types/api.types";
import { handleAPIError } from "@/utils/api-utils";
import {
  AfterMarketQuoteSchema,
  QuoteHistorySchema,
  QuoteSchema,
  SearchResultSchema,
  ShortQuoteSchema,
} from "@/validation";
import { AxiosInstance } from "axios";
import { z } from "zod";
import {
  BalanceSheetStatement,
  BalanceSheetStatementGrowth,
  CashFlowStatement,
  CashFlowStatementGrowth,
  CompanyOutlook,
  CompanyProfile,
  Dividend,
  Earning,
  FinancialGrowth,
  FinancialPeriod,
  Financials,
  IncomeStatement,
  IncomeStatementGrowth,
  InstitutionalHolder,
  MutualFundHolder,
  Ratio,
  SecFiling,
  TickerAnalystRecommendation,
  TickerPriceChangeSummary,
  TickerPriceTarget,
  TickerPriceTargetConsensus,
  TickerPriceTargetSummary,
  TickerUpgradeDowngradeConsensus,
  TickerUpgradesDowngrades,
} from "../types";
import {
  BalanceSheetStatementGrowthSchema,
  BalanceSheetStatementSchema,
  CashFlowStatementGrowthSchema,
  CashFlowStatementSchema,
  CompanyOutlookSchema,
  CompanyProfileSchema,
  DividendSchema,
  EarningSchema,
  FinancialGrowthSchema,
  FinancialsSchema,
  IncomeStatementGrowthSchema,
  IncomeStatementSchema,
  InstitutionalHolderSchema,
  MutualFundHolderSchema,
  RatioSchema,
  SecFilingSchema,
  TickerAnalystRecommendationSchema,
  TickerPriceChangeSummarySchema,
  TickerPriceTargetConsensusSchema,
  TickerPriceTargetSchema,
  TickerPriceTargetSummarySchema,
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
        // console.log(JSON.stringify(validation.error, null, 2));
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

  async getQuotes(
    tickers: string[],
    options?: RequestOptions
  ): Promise<Quote[]> {
    try {
      const path = `/tickers/${tickers.join(",")}/quotes`;
      let res = await this.axios.get<{ data: Quote[] }>(path, options);

      let validation = z.array(QuoteSchema).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getAfterMarketQuote(
    ticker: string,
    options?: RequestOptions
  ): Promise<AfterMarketQuote> {
    try {
      const path = `/tickers/${ticker}/after-market-quote`;
      let res = await this.axios.get<{ data: AfterMarketQuote }>(path, options);

      let validation = AfterMarketQuoteSchema.safeParse(res.data.data);

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

  async getPriceChangeSummary(
    ticker: string,
    options?: RequestOptions
  ): Promise<TickerPriceChangeSummary> {
    try {
      const searchParams = new URLSearchParams();

      const path = `/tickers/${ticker}/price-change-summary`;
      let res = await this.axios.get<{ data: TickerPriceChangeSummary }>(
        path,
        options
      );

      let validation = TickerPriceChangeSummarySchema.safeParse(res.data.data);

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
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  // GROWTH
  async getFinancialGrowth(
    ticker: string,
    filter?: { period?: FinancialPeriod; limit?: number },
    options?: RequestOptions | undefined
  ): Promise<FinancialGrowth[]> {
    try {
      let searchParams = new URLSearchParams();

      if (filter?.period) {
        searchParams.append("period", String(filter.period));
      }
      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }

      const path = `/tickers/${ticker}/financial-growth?${searchParams.toString()}`;
      let res = await this.axios.get<{ data: FinancialGrowth[] }>(
        path,
        options
      );

      let validation = z.array(FinancialGrowthSchema).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getIncomeStatementGrowth(
    ticker: string,
    filter?: { period?: FinancialPeriod; limit?: number },
    options?: RequestOptions | undefined
  ): Promise<IncomeStatementGrowth[]> {
    try {
      let searchParams = new URLSearchParams();

      if (filter?.period) {
        searchParams.append("period", String(filter.period));
      }
      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }

      const path = `/tickers/${ticker}/income-statement-growth?${searchParams.toString()}`;
      let res = await this.axios.get<{ data: IncomeStatementGrowth[] }>(
        path,
        options
      );

      let validation = z
        .array(IncomeStatementGrowthSchema)
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

  async getBalanceSheetStatementGrowth(
    ticker: string,
    filter?: { period?: FinancialPeriod; limit?: number },
    options?: RequestOptions | undefined
  ): Promise<BalanceSheetStatementGrowth[]> {
    try {
      let searchParams = new URLSearchParams();

      if (filter?.period) {
        searchParams.append("period", String(filter.period));
      }
      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }

      const path = `/tickers/${ticker}/balance-sheet-statement-growth?${searchParams.toString()}`;
      let res = await this.axios.get<{ data: BalanceSheetStatementGrowth[] }>(
        path,
        options
      );

      let validation = z
        .array(BalanceSheetStatementGrowthSchema)
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

  async getCashFlowStatementGrowth(
    ticker: string,
    filter?: { period?: FinancialPeriod; limit?: number },
    options?: RequestOptions | undefined
  ): Promise<CashFlowStatementGrowth[]> {
    try {
      let searchParams = new URLSearchParams();

      if (filter?.period) {
        searchParams.append("period", String(filter.period));
      }
      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }

      const path = `/tickers/${ticker}/cash-flow-statement-growth?${searchParams.toString()}`;
      let res = await this.axios.get<{ data: CashFlowStatementGrowth[] }>(
        path,
        options
      );

      let validation = z
        .array(CashFlowStatementGrowthSchema)
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

  async getTickerPriceTargetConsensus(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<TickerPriceTargetConsensus> {
    try {
      const path = `/tickers/${ticker}/price-target-consensus`;
      let res = await this.axios.get<{
        data: TickerPriceTargetConsensus;
      }>(path, options);

      let validation = TickerPriceTargetConsensusSchema.safeParse(
        res.data.data
      );

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

  async getTickerPriceTarget(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<TickerPriceTarget[]> {
    try {
      const path = `/tickers/${ticker}/price-target`;
      let res = await this.axios.get<{
        data: TickerPriceTarget;
      }>(path, options);

      let validation = z
        .array(TickerPriceTargetSchema)
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

  async getTickerPriceTargetSummary(
    ticker: string,
    options?: RequestOptions | undefined
  ): Promise<TickerPriceTargetSummary> {
    try {
      const path = `/tickers/${ticker}/price-target-summary`;
      let res = await this.axios.get<{
        data: TickerPriceTargetSummary;
      }>(path, options);

      let validation = TickerPriceTargetSummarySchema.safeParse(res.data.data);

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

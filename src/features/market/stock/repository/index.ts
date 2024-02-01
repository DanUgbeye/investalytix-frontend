import { Quote } from "../../market.types";

export interface IStockMarketRepository {
  getStockIndexes(): Promise<Quote[]>;
  getFearGreedIndex(): Promise<any>;
  getInvestorSentiment(): Promise<any>;
  getHotPicks(): Promise<Quote[]>;
  getGainers(): Promise<Quote[]>;
  getLosers(): Promise<Quote[]>;
}

export class StockMarketRepository implements IStockMarketRepository {
  constructor(private BASE_URL: string) {}

  async getStockIndexes() {
    return [];
  }

  async getFearGreedIndex() {
    return [];
  }

  async getInvestorSentiment() {
    return [];
  }

  async getHotPicks() {
    return [];
  }

  async getGainers() {
    return [];
  }

  async getLosers() {
    return [];
  }
}

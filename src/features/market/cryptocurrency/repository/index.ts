import { Quote } from "../../market.types";

export interface ICryptoMarketRepository {
  getCryptoPairs(): Promise<Quote[]>;
  getGainers(): Promise<Quote[]>;
  getLosers(): Promise<Quote[]>;
}

export class CryptoMarketRepository implements ICryptoMarketRepository {
  constructor(private BASE_URL: string) {}

  async getCryptoPairs() {
    let data: Quote[] = [];

    try {
    } catch (error) {}

    return data;
  }

  async getGainers() {
    return [];
  }

  async getLosers() {
    return [];
  }
}

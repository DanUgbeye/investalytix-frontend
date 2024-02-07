import { Quote } from "../../market.types";
import { CurrencyMarket } from "../currency.types";

export interface ICurrencyMarketRepository {
  getMajorPairs(): Promise<Quote[]>;
  getCurrenciesByMarket(market: CurrencyMarket): Promise<Quote[]>;
}

export class CurrencyMarketRepository implements ICurrencyMarketRepository {
  constructor(private BASE_URL: string) {}

  async getMajorPairs() {
    return [];
  }

  async getCurrenciesByMarket(market: CurrencyMarket) {
    return [];
  }
}

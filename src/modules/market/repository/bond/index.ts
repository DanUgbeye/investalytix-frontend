import { BondCountry, Quote } from "../../types";

export interface IBondMarketRepository {
  getBondsByCountry(country: BondCountry): Promise<Quote[]>;
}

export class BondMarketRepository implements IBondMarketRepository {
  constructor(private BASE_URL: string) {}

  async getBondsByCountry(country: BondCountry) {
    return [];
  }
}

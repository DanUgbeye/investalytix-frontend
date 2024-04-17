import { CommoditySector, Quote } from "../../types";

export interface ICommodityMarketRepository {
  getCommodityPairs(): Promise<Quote[]>;
  getCommiditiesBySector(sector: CommoditySector): Promise<Quote[]>;
}

export class CommodityMarketRepository implements ICommodityMarketRepository {
  constructor(private BASE_URL: string) {}

  async getCommodityPairs() {
    let data: Quote[] = [];

    try {
    } catch (error) {}

    return data;
  }

  async getCommiditiesBySector(sector: CommoditySector) {
    return [];
  }
}

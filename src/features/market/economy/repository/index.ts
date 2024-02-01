import {
  BaseRateChange,
  GDPGrowthRate,
  EconomyContinent,
  InflationRate,
  InterestRate,
  UnemploymentRate,
  DebtToGDPRate,
  CreditRating,
} from "../economy.types";

export interface IEconomyMarketRepository {
  getGDPGrowthRate(continent?: EconomyContinent): Promise<GDPGrowthRate[]>;
  getInflationRate(): Promise<InflationRate[]>;
  getInterestRate(): Promise<InterestRate[]>;
  getUnemploymentRate(
    continent?: EconomyContinent
  ): Promise<UnemploymentRate[]>;
  getDebtToGDPRate(continent?: EconomyContinent): Promise<DebtToGDPRate[]>;
  getCreditRating(continent?: EconomyContinent): Promise<CreditRating[]>;
}

export class EconomyMarketRepository implements IEconomyMarketRepository {
  constructor(private BASE_URL: string) {}

  async getGDPGrowthRate(continent?: EconomyContinent) {
    return [];
  }

  async getInflationRate() {
    return [];
  }

  async getInterestRate(): Promise<BaseRateChange[]> {
    return [];
  }

  async getUnemploymentRate(continent?: EconomyContinent | undefined) {
    return [];
  }

  async getDebtToGDPRate(continent?: EconomyContinent | undefined) {
    return [];
  }

  async getCreditRating(continent?: EconomyContinent | undefined) {
    return [];
  }
}

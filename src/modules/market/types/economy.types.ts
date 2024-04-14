export const ECONOMY_CONTINENTS = {
  WORLD: "WORLD",
  AMERICA: "AMERICA",
  ASIA: "ASIA",
  AFRICA: "AFRICA",
  AUSTRALIA: "AUSTRALIA",
  EUROPE: "EUROPE",
  G20: "G20",
} as const;

export type EconomyContinent =
  (typeof ECONOMY_CONTINENTS)[keyof typeof ECONOMY_CONTINENTS];

export type BaseRateChange = { previous: number };

export type GDPGrowthRate = BaseRateChange;
export type InflationRate = BaseRateChange;
export type InterestRate = BaseRateChange;
export type UnemploymentRate = BaseRateChange;
export type DebtToGDPRate = BaseRateChange;

export type CreditRating = {};

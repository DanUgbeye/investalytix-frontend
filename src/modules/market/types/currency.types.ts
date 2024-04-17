export const CURRENCY_MARKETS = {
  AMERICAN: "AMERICAN",
  ASIAN: "ASIAN",
  EUROPE: "EUROPE",
} as const;

export type CurrencyMarket =
  (typeof CURRENCY_MARKETS)[keyof typeof CURRENCY_MARKETS];

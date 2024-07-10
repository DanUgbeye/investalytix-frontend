import { StockSocketData } from "@/types";

export * from "./event.types";

export const SUBSCRIPTION_TYPE = {
  STOCK: "stock",
  FX: "fx",
  CRYPTO: "crypto",
} as const;
export type SubscriptionType =
  (typeof SUBSCRIPTION_TYPE)[keyof typeof SUBSCRIPTION_TYPE];

export type TickerSubscriber = (data: StockSocketData) => void;
export type TickerSubscriptions = Map<string, TickerSubscriber[]>;

export type ServiceSubscriptions = {
  [key in SubscriptionType]: TickerSubscriptions;
};

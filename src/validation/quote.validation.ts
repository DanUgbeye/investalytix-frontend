import {
  Quote,
  QuoteHistory,
  SearchResult,
  ShortQuote,
  StockSocketData,
} from "@/types";
import { ZodType, z } from "zod";
import { NullableNumberSchema, NullableStringSchema } from ".";

export const QuoteSchema = z.object({
  symbol: z.string(),
  name: NullableStringSchema,
  price: NullableNumberSchema,
  changesPercentage: NullableNumberSchema,
  change: NullableNumberSchema,
  dayLow: NullableNumberSchema,
  dayHigh: NullableNumberSchema,
  yearHigh: NullableNumberSchema,
  yearLow: NullableNumberSchema,
  marketCap: NullableNumberSchema,
  priceAvg50: NullableNumberSchema,
  priceAvg200: NullableNumberSchema,
  exchange: NullableStringSchema,
  volume: NullableNumberSchema,
  avgVolume: NullableNumberSchema,
  open: NullableNumberSchema,
  previousClose: NullableNumberSchema,
  eps: NullableNumberSchema,
  pe: NullableNumberSchema,
  earningsAnnouncement: NullableStringSchema,
  sharesOutstanding: NullableNumberSchema,
  timestamp: NullableNumberSchema,
}) satisfies ZodType<Quote>;

export const QuoteHistorySchema = z.object({
  date: z.coerce.date(),
  open: z.number(),
  low: z.number(),
  high: z.number(),
  close: z.number(),
  volume: z.number(),
}) satisfies ZodType<QuoteHistory>;

export const QuoteTimeframeSchema = z.enum([
  "1min",
  "5min",
  "15min",
  "30min",
  "1hour",
  "4hour",
  "1day",
  "1week",
  "1month",
  "1year",
]);

export const AfterMarketQuoteSchema = z.object({
  symbol: z.string(),
  ask: z.number(),
  bid: z.number(),
  asize: z.number(),
  bsize: z.number(),
  timestamp: z.number(),
});

export const ShortQuoteSchema = z.object({
  symbol: z.string(),
  price: z.number(),
  volume: z.number(),
}) satisfies ZodType<ShortQuote>;

export const SearchResultSchema = z.object({
  symbol: z.string(),
  name: z.string(),
  currency: NullableStringSchema,
  stockExchange: NullableStringSchema,
  exchangeShortName: NullableStringSchema,
}) satisfies ZodType<SearchResult>;

export const StockSocketDataSchema = z.object({
  s: z.string(),
  t: z.number(),
  type: z.string(),
  ap: NullableNumberSchema,
  as: NullableNumberSchema,
  bp: NullableNumberSchema,
  bs: NullableNumberSchema,
  lp: NullableNumberSchema,
  ls: NullableNumberSchema,
}) satisfies ZodType<StockSocketData>;

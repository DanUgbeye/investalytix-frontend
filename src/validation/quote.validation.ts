import { Quote, QuoteHistory, SearchResult, ShortQuote } from "@/types";
import { ZodType, z } from "zod";

export const QuoteSchema = z.object({
  symbol: z.string(),
  name: z.string().nullable(),
  price: z.number().nullable(),
  changesPercentage: z.number().nullable(),
  change: z.number().nullable(),
  dayLow: z.number().nullable(),
  dayHigh: z.number().nullable(),
  yearHigh: z.number().nullable(),
  yearLow: z.number().nullable(),
  marketCap: z.number().nullable(),
  priceAvg50: z.number().nullable(),
  priceAvg200: z.number().nullable(),
  exchange: z.string().nullable(),
  volume: z.number().nullable(),
  avgVolume: z.number().nullable(),
  open: z.number().nullable(),
  previousClose: z.number().nullable(),
  eps: z.number().nullable(),
  pe: z.number().nullable(),
  earningsAnnouncement: z.string().nullable(),
  sharesOutstanding: z.number().nullable(),
  timestamp: z.number().nullable(),
}) satisfies ZodType<Quote>;

export const QuoteHistorySchema = z.object({
  date: z.coerce.date(),
  open: z.number(),
  low: z.number(),
  high: z.number(),
  close: z.number(),
  volume: z.number(),
}) satisfies ZodType<QuoteHistory>;

export const QuoteHistoryTimeframeSchema = z.enum([
  "1min",
  "5min",
  "15min",
  "30min",
  "1hour",
  "4hour",
  "1day",
  "1week",
  "1year",
]);

export const ShortQuoteSchema = z.object({
  symbol: z.string(),
  price: z.number(),
  volume: z.number(),
}) satisfies ZodType<ShortQuote>;

export const SearchResultSchema = z.object({
  symbol: z.string(),
  name: z.string(),
  currency: z.string().nullable(),
  stockExchange: z.string().nullable(),
  exchangeShortName: z.string().nullable(),
}) satisfies ZodType<SearchResult>;

import { Quote, SearchResult } from "@/types";
import { ZodType, z } from "zod";

export const QuoteSchema = z.object({
  symbol: z.string(),
  name: z.string(),
  price: z.number(),
  changesPercentage: z.number(),
  change: z.number(),
  dayLow: z.number(),
  dayHigh: z.number(),
  yearHigh: z.number(),
  yearLow: z.number(),
  marketCap: z.number().nullable(),
  priceAvg50: z.number(),
  priceAvg200: z.number(),
  volume: z.number(),
  avgVolume: z.number(),
  exchange: z.string(),
  open: z.number(),
  previousClose: z.number(),
  eps: z.number().nullable(),
  pe: z.number().nullable(),
  earningsAnnouncement: z.number().nullable(),
  sharesOutstanding: z.number().nullable(),
  timestamp: z.number(),
}) satisfies ZodType<Quote>;

export const SearchResultSchema = z.object({
  symbol: z.string(),
  name: z.string(),
  currency: z.string().nullable(),
  stockExchange: z.string().nullable(),
  exchangeShortName: z.string().nullable(),
}) satisfies ZodType<SearchResult>;

import { Quote, QuoteHistory, SearchResult, ShortQuote } from "@/types";
import { StockSocketData } from "@/types/quote";
import { ZodType, z } from "zod";

export const QuoteSchema = z.object({
  symbol: z.string(),
  name: z
    .union([z.string().nullable(), z.undefined()])
    .transform((data) => (typeof data === "string" ? data : null)) as ZodType<
    string | null
  >,
  price: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  changesPercentage: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  change: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  dayLow: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  dayHigh: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  yearHigh: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  yearLow: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  marketCap: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceAvg50: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceAvg200: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  exchange: z
    .union([z.string().nullable(), z.undefined()])
    .transform((data) => (typeof data === "string" ? data : null)) as ZodType<
    string | null
  >,
  volume: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  avgVolume: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  open: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  previousClose: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  eps: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  pe: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  earningsAnnouncement: z
    .union([z.string().nullable(), z.undefined()])
    .transform((data) => (typeof data === "string" ? data : null)) as ZodType<
    string | null
  >,
  sharesOutstanding: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  timestamp: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
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
  currency: z
    .union([z.string().nullable(), z.undefined()])
    .transform((data) => (typeof data === "string" ? data : null)) as ZodType<
    string | null
  >,
  stockExchange: z
    .union([z.string().nullable(), z.undefined()])
    .transform((data) => (typeof data === "string" ? data : null)) as ZodType<
    string | null
  >,
  exchangeShortName: z
    .union([z.string().nullable(), z.undefined()])
    .transform((data) => (typeof data === "string" ? data : null)) as ZodType<
    string | null
  >,
}) satisfies ZodType<SearchResult>;

export const StockSocketDataSchema = z.object({
  s: z.string(),
  t: z.number(),
  type: z.string(),
  ap: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  as: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  bp: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  bs: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  lp: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  ls: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
}) satisfies ZodType<StockSocketData>;

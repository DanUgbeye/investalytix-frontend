import { z, ZodType } from "zod";
import { TickerChange, TickerPriceChangeSummary } from "../types";

export * from "./analysis.validation";
export * from "./company.validation";
export * from "./dividend.validation";
export * from "./earnings.validation";
export * from "./financials.validation";

export const TickerChangeSchema = z.object({
  symbol: z.string(),
  name: z
    .union([z.string().nullable(), z.undefined()])
    .transform((data) => (typeof data === "string" ? data : null)) as ZodType<
    string | null
  >,
  change: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
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
}) satisfies ZodType<TickerChange>;

export const TickerPriceChangeSummarySchema = z.object({
  symbol: z.string(),
  "1D": z.number(),
  "5D": z.number(),
  "1M": z.number(),
  "3M": z.number(),
  "6M": z.number(),
  ytd: z.number(),
  "1Y": z.number(),
  "3Y": z.number(),
  "5Y": z.number(),
  "10Y": z.number(),
  max: z.number(),
}) satisfies ZodType<TickerPriceChangeSummary>;

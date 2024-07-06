import { z, ZodType } from "zod";
import { TickerChange } from "../types";

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
  change: z.number(),
  price: z.number(),
  changesPercentage: z.number(),
}) satisfies ZodType<TickerChange>;

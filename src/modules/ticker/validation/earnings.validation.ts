import { ZodType, z } from "zod";
import { Earning } from "../types";

export const EarningSchema = z.object({
  date: z.coerce.date(),
  symbol: z.string(),
  eps: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  epsEstimated: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  time: z.string(),
  revenue: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  revenueEstimated: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  updatedFromDate: z.coerce.date(),
  fiscalDateEnding: z.coerce.date(),
}) satisfies ZodType<Earning>;

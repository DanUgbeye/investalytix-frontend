import { ZodType, z } from "zod";
import { Earning } from "../types";

export const EarningSchema = z.object({
  date: z.coerce.date(),
  symbol: z.string(),
  eps: z.number().nullable(),
  epsEstimated: z.number().nullable(),
  time: z.string(),
  revenue: z.number().nullable(),
  revenueEstimated: z.number().nullable(),
  updatedFromDate: z.coerce.date(),
  fiscalDateEnding: z.coerce.date(),
}) satisfies ZodType<Earning>;

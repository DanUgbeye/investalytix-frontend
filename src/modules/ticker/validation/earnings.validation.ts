import { ZodType, z } from "zod";
import { Earning } from "../types";
import { NullableNumberSchema } from "@/validation";

export const EarningSchema = z.object({
  date: z.coerce.date(),
  symbol: z.string(),
  eps: NullableNumberSchema,
  epsEstimated: NullableNumberSchema,
  time: z.string(),
  revenue: NullableNumberSchema,
  revenueEstimated: NullableNumberSchema,
  updatedFromDate: z.coerce.date(),
  fiscalDateEnding: z.coerce.date(),
}) satisfies ZodType<Earning>;

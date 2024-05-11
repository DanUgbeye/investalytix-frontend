import { ZodType, z } from "zod";
import { Dividend } from "../types";

export const DividendSchema = z.object({
  date: z.coerce.date(),
  label: z.string(),
  adjDividend: z.number(),
  dividend: z.number(),
  recordDate: z.coerce.date(),
  paymentDate: z.coerce.date(),
  declarationDate: z.coerce.date(),
}) satisfies ZodType<Dividend>;

import { ZodType, z } from "zod";
import { Dividend } from "../types";
import { isValid } from "date-fns";

export const DividendSchema = z.object({
  date: z.coerce.date(),
  label: z.string(),
  adjDividend: z.number(),
  dividend: z.number(),
  recordDate: z.string().transform((date) => {
    if (isValid(new Date(date))) return new Date(date);
    return null;
  }) as unknown as ZodType<Date | null>,
  paymentDate: z.string().transform((date) => {
    if (isValid(new Date(date))) return new Date(date);
    return null;
  }) as unknown as ZodType<Date | null>,
  declarationDate: z.string().transform((date) => {
    if (isValid(new Date(date))) return new Date(date);
    return null;
  }) as unknown as ZodType<Date | null>,
}) satisfies ZodType<Dividend>;

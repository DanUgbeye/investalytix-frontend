import { NullableDateSchema, NullableNumberSchema } from "@/validation";
import { ZodType, z } from "zod";
import { Dividend } from "../types";

export const DividendSchema = z.object({
  date: z.coerce.date(),
  label: z.string(),
  adjDividend: NullableNumberSchema,
  dividend: NullableNumberSchema,
  recordDate: NullableDateSchema,
  paymentDate: NullableDateSchema,
  declarationDate: NullableDateSchema,
}) satisfies ZodType<Dividend>;

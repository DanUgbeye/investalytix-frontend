import { isValid } from "date-fns";
import { z, ZodType } from "zod";

export const NullableNumberSchema = z
  .union([z.number().nullable(), z.undefined()])
  .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
  number | null
>;

export const NullableStringSchema = z
  .union([z.string().nullable(), z.undefined()])
  .transform((data) => (typeof data === "string" ? data : null)) as ZodType<
  string | null
>;

export const NullableDateSchema = z
  .union([z.string({ coerce: true }).nullable(), z.undefined()])
  .transform((value) => {
    if (!value) return null;
    let valueAsDate = new Date(value);
    if (isValid(valueAsDate)) return valueAsDate;
    return null;
  }) as unknown as ZodType<Date | null>;

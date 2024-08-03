import z, { ZodType } from "zod";
import { FMPNews, News } from "../types";
import { NullableStringSchema } from "@/validation";

export const NewsSchema = z.object({
  publishedDate: z.coerce.date(),
  title: z.string(),
  image: NullableStringSchema,
  site: z.string(),
  text: z.string(),
  url: z.string(),
  symbols: z.array(z.string()),
}) satisfies ZodType<News>;

export const FMPNewsSchema = z.object({
  publishedDate: z.coerce.date(),
  title: z.string(),
  image: NullableStringSchema,
  site: z.string(),
  text: z.string(),
  url: z.string(),
  symbols: z.array(z.string()),
  provider: z.literal("FMP"),
}) satisfies ZodType<FMPNews>;

import z, { ZodType } from "zod";
import { FMPNews, News } from "../types";

export const NewsSchema = z.object({
  publishedDate: z.coerce.date(),
  title: z.string(),
  image: z
    .union([z.string().nullable(), z.undefined()])
    .transform((data) => (typeof data === "string" ? data : null)) as ZodType<
    string | null
  >,
  site: z.string(),
  text: z.string(),
  url: z.string(),
  symbols: z.array(z.string()),
}) satisfies ZodType<News>;

export const FMPNewsSchema = z.object({
  publishedDate: z.coerce.date(),
  title: z.string(),
  image: z
    .union([z.string().nullable(), z.undefined()])
    .transform((data) => (typeof data === "string" ? data : null)) as ZodType<
    string | null
  >,
  site: z.string(),
  text: z.string(),
  url: z.string(),
  symbols: z.array(z.string()),
  provider: z.literal("FMP"),
}) satisfies ZodType<FMPNews>;

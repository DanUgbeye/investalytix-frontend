import z, { ZodType } from "zod";
import { GeneralNews, News } from "../types";

export const GeneralNewsSchema = z.object({
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
}) satisfies ZodType<GeneralNews>;

export const NewsSchema = GeneralNewsSchema.merge(
  z.object({
    symbol: z.string(),
  })
) satisfies ZodType<News>;

import { NewsSchema } from "@/modules/news/validation";
import { ZodType, z } from "zod";
import { CompanyOutlook } from "../types";
import {
  CompanyKeyExecutiveSchema,
  CompanyProfileSchema,
} from "./company.validation";
import { DividendSchema } from "./dividend.validation";
import { FinancialsSchema, RatioTTMSchema } from "./financials.validation";

export * from "./company.validation";
export * from "./dividend.validation";
export * from "./financials.validation";

export const CompanyOutlookSchema = z.object({
  profile: CompanyProfileSchema,
  ratios: z.array(RatioTTMSchema),
  keyExecutives: z.array(CompanyKeyExecutiveSchema),
  stockDividend: z.array(DividendSchema),
  stockNews: z.array(NewsSchema),
  financialsAnnual: FinancialsSchema,
  financialsQuarter: FinancialsSchema,
}) satisfies ZodType<CompanyOutlook>;

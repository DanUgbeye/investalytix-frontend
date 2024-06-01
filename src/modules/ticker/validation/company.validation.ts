import { NewsSchema } from "@/modules/news/validation";
import { ZodType, z } from "zod";
import {
  CompanyKeyExecutive,
  CompanyOutlook,
  CompanyProfile,
  CompanyMetrics,
  SplitsHistory,
} from "../types";
import { DividendSchema } from "./dividend.validation";
import { FinancialsSchema, RatioTTMSchema } from "./financials.validation";

export const CompanyProfileSchema = z.object({
  symbol: z.string(),
  price: z.number(),
  beta: z.number(),
  volAvg: z.number(),
  mktCap: z.number(),
  lastDiv: z.number(),
  range: z.string(),
  changes: z.number(),
  companyName: z.string(),
  currency: z.string(),
  cik: z.string(),
  isin: z.string(),
  cusip: z.string(),
  exchange: z.string(),
  exchangeShortName: z.string(),
  industry: z.string(),
  website: z.string(),
  description: z.string(),
  ceo: z.string(),
  sector: z.string(),
  country: z.string(),
  fullTimeEmployees: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  dcfDiff: z.number(),
  dcf: z.number(),
  image: z.string(),
  ipoDate: z.coerce.date(),
  defaultImage: z.boolean(),
  isEtf: z.boolean(),
  isActivelyTrading: z.boolean(),
  isAdr: z.boolean(),
  isFund: z.boolean(),
}) satisfies ZodType<CompanyProfile>;

export const CompanyKeyExecutiveSchema = z.object({
  title: z.string(),
  name: z.string(),
  pay: z.union([z.number(), z.null()]),
  currencyPay: z.string(),
  gender: z.string(),
  yearBorn: z.union([z.number(), z.null()]),
  titleSince: z.union([z.null(), z.coerce.date()]),
}) satisfies ZodType<CompanyKeyExecutive>;

export const CompanyMetricsSchema = z.object({
  dividendYielTTM: z.number().nullable(),
  volume: z.number().nullable(),
  yearHigh: z.number().nullable(),
  yearLow: z.number().nullable(),
}) satisfies ZodType<CompanyMetrics>;

export const SplitsHistorySchema = z.object({
  date: z.coerce.date(),
  label: z.string(),
  numerator: z.number(),
  denominator: z.number(),
}) satisfies ZodType<SplitsHistory>;

export const CompanyOutlookSchema = z.object({
  profile: CompanyProfileSchema,
  ratios: z.array(RatioTTMSchema),
  keyExecutives: z.array(CompanyKeyExecutiveSchema),
  stockDividend: z.array(DividendSchema),
  stockNews: z.array(NewsSchema),
  financialsAnnual: FinancialsSchema,
  financialsQuarter: FinancialsSchema,
  metrics: CompanyMetricsSchema,
  splitsHistory: z.array(SplitsHistorySchema),
}) satisfies ZodType<CompanyOutlook>;

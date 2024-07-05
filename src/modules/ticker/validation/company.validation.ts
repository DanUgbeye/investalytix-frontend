import { NewsSchema } from "@/modules/news/validation";
import { ZodType, z } from "zod";
import {
  CompanyKeyExecutive,
  CompanyOutlook,
  CompanyProfile,
  CompanyMetrics,
  SplitsHistory,
  MutualFundHolder,
  InstitutionalHolder,
} from "../types";
import { DividendSchema } from "./dividend.validation";
import { FinancialsSchema, RatioTTMSchema } from "./financials.validation";

export const CompanyProfileSchema = z.object({
  symbol: z.string(),
  price: z.number().nullable(),
  beta: z.number().nullable(),
  volAvg: z.number().nullable(),
  mktCap: z.number().nullable(),
  lastDiv: z.number().nullable(),
  range: z.string().nullable(),
  changes: z.number().nullable(),
  companyName: z.string().nullable(),
  currency: z.string().nullable(),
  cik: z.string().nullable(),
  isin: z.string().nullable(),
  cusip: z.string().nullable(),
  exchange: z.string(),
  exchangeShortName: z.string().nullable(),
  industry: z.string().nullable(),
  website: z.string().nullable(),
  description: z.string().nullable(),
  ceo: z.string().nullable(),
  sector: z.string().nullable(),
  country: z.string().nullable(),
  fullTimeEmployees: z.string().nullable(),
  phone: z.string().nullable(),
  address: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  zip: z.string().nullable(),
  dcfDiff: z.number().nullable(),
  dcf: z.number().nullable(),
  image: z.string().nullable(),
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
  pay: z.number().nullable(),
  currencyPay: z.string(),
  gender: z.string(),
  yearBorn: z.number().nullable(),
  titleSince: z.coerce.date().nullable(),
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

export const MutualFundHolderSchema = z.object({
  holder: z.string(),
  shares: z.number(),
  dateReported: z.coerce.date(),
  change: z.number(),
  weightPercent: z.number().nullable(),
}) satisfies ZodType<MutualFundHolder>;

export const InstitutionalHolderSchema = z.object({
  holder: z.string(),
  shares: z.number(),
  dateReported: z.coerce.date(),
  change: z.number(),
}) satisfies ZodType<InstitutionalHolder>;

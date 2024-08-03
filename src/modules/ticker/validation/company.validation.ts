import { FMPNewsSchema } from "@/modules/news/validation";
import { ZodType, z } from "zod";
import {
  CompanyKeyExecutive,
  CompanyMetrics,
  CompanyOutlook,
  CompanyProfile,
  InstitutionalHolder,
  MutualFundHolder,
  SplitsHistory,
} from "../types";
import { DividendSchema } from "./dividend.validation";
import { FinancialsSchema, RatioTTMSchema } from "./financials.validation";
import { NullableNumberSchema, NullableStringSchema } from "@/validation";

export const CompanyProfileSchema = z.object({
  symbol: z.string(),
  price: NullableNumberSchema,
  beta: NullableNumberSchema,
  volAvg: NullableNumberSchema,
  mktCap: NullableNumberSchema,
  lastDiv: NullableNumberSchema,
  range: NullableStringSchema,
  changes: NullableNumberSchema,
  companyName: NullableStringSchema,
  currency: NullableStringSchema,
  cik: NullableStringSchema,
  isin: NullableStringSchema,
  cusip: NullableStringSchema,
  exchange: z.string(),
  exchangeShortName: NullableStringSchema,
  industry: NullableStringSchema,
  website: NullableStringSchema,
  description: NullableStringSchema,
  ceo: NullableStringSchema,
  sector: NullableStringSchema,
  country: NullableStringSchema,
  fullTimeEmployees: NullableStringSchema,
  phone: NullableStringSchema,
  address: NullableStringSchema,
  city: NullableStringSchema,
  state: NullableStringSchema,
  zip: NullableStringSchema,
  dcfDiff: NullableNumberSchema,
  dcf: NullableNumberSchema,
  image: NullableStringSchema,
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
  pay: NullableNumberSchema,
  currencyPay: z.string(),
  gender: z.string(),
  yearBorn: NullableNumberSchema,
  titleSince: z.coerce.date().nullable(),
}) satisfies ZodType<CompanyKeyExecutive>;

export const CompanyMetricsSchema = z.object({
  dividendYielTTM: NullableNumberSchema,
  volume: NullableNumberSchema,
  yearHigh: NullableNumberSchema,
  yearLow: NullableNumberSchema,
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
  stockNews: z.array(FMPNewsSchema),
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
  weightPercent: NullableNumberSchema,
}) satisfies ZodType<MutualFundHolder>;

export const InstitutionalHolderSchema = z.object({
  holder: z.string(),
  shares: z.number(),
  dateReported: z.coerce.date(),
  change: z.number(),
}) satisfies ZodType<InstitutionalHolder>;

import { ZodType, z } from "zod";
import {
  TickerAnalystRecommendation,
  TickerPriceTarget,
  TickerPriceTargetConsensus,
  TickerPriceTargetSummary,
  TickerUpgradeDowngradeConsensus,
  TickerUpgradesDowngrades,
} from "../types";

export const TickerAnalystRecommendationSchema = z.object({
  symbol: z.string(),
  date: z.coerce.date(),
  analystRatingsbuy: z.number(),
  analystRatingsHold: z.number(),
  analystRatingsSell: z.number(),
  analystRatingsStrongSell: z.number(),
  analystRatingsStrongBuy: z.number(),
}) satisfies ZodType<TickerAnalystRecommendation>;

export const TickerUpgradesDowngradesSchema = z.object({
  symbol: z.string(),
  publishedDate: z.coerce.date(),
  newsURL: z.string(),
  newsTitle: z.string(),
  newsBaseURL: z.string(),
  newsPublisher: z.string(),
  newGrade: z.string(),
  previousGrade: z
    .union([z.string().nullable(), z.undefined()])
    .transform((data) => (typeof data === "string" ? data : null)) as ZodType<
    string | null
  >,
  gradingCompany: z.string(),
  action: z.string(),
  priceWhenPosted: z.number(),
}) satisfies ZodType<TickerUpgradesDowngrades>;

export const TickerUpgradeDowngradeConsensusSchema = z.object({
  symbol: z.string(),
  strongBuy: z.number(),
  buy: z.number(),
  hold: z.number(),
  sell: z.number(),
  strongSell: z.number(),
  consensus: z.string(),
}) satisfies ZodType<TickerUpgradeDowngradeConsensus>;

export const TickerPriceTargetConsensusSchema = z.object({
  symbol: z.string(),
  targetHigh: z.number(),
  targetLow: z.number(),
  targetConsensus: z.number(),
  targetMedian: z.number(),
}) satisfies ZodType<TickerPriceTargetConsensus>;

export const TickerPriceTargetSummarySchema = z.object({
  symbol: z.string(),
  lastMonth: z.number(),
  lastMonthAvgPriceTarget: z.number(),
  lastQuarter: z.number(),
  lastQuarterAvgPriceTarget: z.number(),
  lastYear: z.number(),
  lastYearAvgPriceTarget: z.number(),
  allTime: z.number(),
  allTimeAvgPriceTarget: z.number(),
  publishers: z.string(),
}) satisfies ZodType<TickerPriceTargetSummary>;

export const TickerPriceTargetSchema = z.object({
  symbol: z.string(),
  publishedDate: z.coerce.date(),
  newsURL: z.string(),
  newsTitle: z
    .union([z.string().nullable(), z.undefined()])
    .transform((data) => (typeof data === "string" ? data : null)) as ZodType<
    string | null
  >,
  analystName: z
    .union([z.string().nullable(), z.undefined()])
    .transform((data) => (typeof data === "string" ? data : null)) as ZodType<
    string | null
  >,
  priceTarget: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  adjPriceTarget: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceWhenPosted: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  newsPublisher: z.string(),
  newsBaseURL: z.string(),
  analystCompany: z.string(),
}) satisfies ZodType<TickerPriceTarget>;

import { ZodType, z } from "zod";
import {
  TickerAnalystRecommendation,
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
  previousGrade: z.string().nullable(),
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

import { NullableNumberSchema } from "@/validation";
import { ZodType, z } from "zod";
import {
  MarketOpen,
  SectorPerformance,
  SectorPerformanceHistory,
  StockMarketHoliday,
  StockMarketHours,
} from "../types";

export const SectorPerformanceSchema = z.object({
  sector: z.string(),
  changesPercentage: z.string(),
}) satisfies ZodType<SectorPerformance>;

export const SectorPerformanceHistorySchema = z.object({
  date: z.coerce.date(),
  basicMaterialsChangesPercentage: NullableNumberSchema,
  communicationServicesChangesPercentage: NullableNumberSchema,
  consumerCyclicalChangesPercentage: NullableNumberSchema,
  consumerDefensiveChangesPercentage: NullableNumberSchema,
  energyChangesPercentage: NullableNumberSchema,
  financialServicesChangesPercentage: NullableNumberSchema,
  healthcareChangesPercentage: NullableNumberSchema,
  industrialsChangesPercentage: NullableNumberSchema,
  realEstateChangesPercentage: NullableNumberSchema,
  technologyChangesPercentage: NullableNumberSchema,
  utilitiesChangesPercentage: NullableNumberSchema,
}) satisfies ZodType<SectorPerformanceHistory>;

export const StockMarketHolidaySchema = z.object({
  year: z.number(),
  "Assumption Day": z.coerce.date().optional(),
  "Easter Monday": z.coerce.date().optional(),
  "Good Friday": z.coerce.date().optional(),
  "Labour Day": z.coerce.date().optional(),
  "New Year's Eve": z.coerce.date().optional(),
  "Boxing Day": z.coerce.date().optional(),
  "New Year's Day": z.coerce.date().optional(),
  "Christmas (Dec 24th)": z.coerce.date().optional(),
  "Labor Day": z.coerce.date().optional(),
  "New Year's Day (Jan 1st)": z.coerce.date().optional(),
  "Christmas (Dec 25th)": z.coerce.date().optional(),
  "Christmas (Dec 28th)": z.coerce.date().optional(),
  "Labor Day (May 3rd)": z.coerce.date().optional(),
  Easter: z.coerce.date().optional(),
  "Christmas (Dec 27th)": z.coerce.date().optional(),
  "Bank Holiday": z.coerce.date().optional(),
  Christmas: z.coerce.date().optional(),
}) satisfies ZodType<StockMarketHoliday>;

export const StockMarketHoursSchema = z.object({
  openingHour: z.string(),
  closingHour: z.string(),
}) satisfies ZodType<StockMarketHours>;

export const MarketOpenSchema = z.object({
  stockExchangeName: z.string(),
  stockMarketHours: StockMarketHoursSchema,
  stockMarketHolidays: z.array(StockMarketHolidaySchema),
  isTheStockMarketOpen: z.boolean(),
  isTheEuronextMarketOpen: z.boolean(),
  isTheForexMarketOpen: z.boolean(),
  isTheCryptoMarketOpen: z.boolean(),
}) satisfies ZodType<MarketOpen>;

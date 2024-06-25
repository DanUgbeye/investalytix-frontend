import { ZodType, z } from "zod";
import { SectorPerformance, SectorPerformanceHistory } from "../types";

export const SectorPerformanceSchema = z.object({
  sector: z.string(),
  changesPercentage: z.string(),
}) satisfies ZodType<SectorPerformance>;

export const SectorPerformanceHistorySchema = z.object({
  date: z.coerce.date(),
  basicMaterialsChangesPercentage: z.number().nullable(),
  communicationServicesChangesPercentage: z.number().nullable(),
  consumerCyclicalChangesPercentage: z.number().nullable(),
  consumerDefensiveChangesPercentage: z.number().nullable(),
  energyChangesPercentage: z.number().nullable(),
  financialServicesChangesPercentage: z.number().nullable(),
  healthcareChangesPercentage: z.number().nullable(),
  industrialsChangesPercentage: z.number().nullable(),
  realEstateChangesPercentage: z.number().nullable(),
  technologyChangesPercentage: z.number().nullable(),
  utilitiesChangesPercentage: z.number().nullable(),
}) satisfies ZodType<SectorPerformanceHistory>;

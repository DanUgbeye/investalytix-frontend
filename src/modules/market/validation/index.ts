import { ZodType, z } from "zod";
import { SectorPerformance, SectorPerformanceHistory } from "../types";

export const SectorPerformanceSchema = z.object({
  sector: z.string(),
  changesPercentage: z.string(),
}) satisfies ZodType<SectorPerformance>;

export const SectorPerformanceHistorySchema = z.object({
  date: z.coerce.date(),
  basicMaterialsChangesPercentage: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  communicationServicesChangesPercentage: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  consumerCyclicalChangesPercentage: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  consumerDefensiveChangesPercentage: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  energyChangesPercentage: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  financialServicesChangesPercentage: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  healthcareChangesPercentage: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  industrialsChangesPercentage: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  realEstateChangesPercentage: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  technologyChangesPercentage: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  utilitiesChangesPercentage: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
}) satisfies ZodType<SectorPerformanceHistory>;

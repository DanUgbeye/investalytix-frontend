import {
  SUBSCRIPTION_PLAN_NAMES,
  SubscriptionPlanName,
} from "@/modules/subscription/types";
import { ZodType, z } from "zod";
import { ServerUserData, UserData } from "../types";

export const ServerUserSchema = z.object({
  _id: z.string(),
  googleId: z.string().optional(),
  email: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  emailVerified: z.coerce.boolean(),
  enabled2FA: z.boolean().optional().default(false) as ZodType<boolean>,
  plan: z.enum([
    SUBSCRIPTION_PLAN_NAMES.FREE,
    SUBSCRIPTION_PLAN_NAMES.PREMIUM,
  ]) satisfies ZodType<SubscriptionPlanName>,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
}) satisfies ZodType<ServerUserData>;

export const UserSchema = z.object({
  id: z.string(),
  googleId: z.string().optional(),
  email: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  emailVerified: z.boolean(),
  enabled2FA: z.boolean().optional().default(false) as ZodType<boolean>,
  plan: z.enum([
    SUBSCRIPTION_PLAN_NAMES.FREE,
    SUBSCRIPTION_PLAN_NAMES.PREMIUM,
  ]) satisfies ZodType<SubscriptionPlanName>,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
}) satisfies ZodType<UserData>;

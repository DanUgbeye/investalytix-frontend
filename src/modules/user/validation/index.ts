import { ZodType, z } from "zod";
import { ServerUserData, UserData } from "../types";

export const ServerUserSchema = z.object({
  _id: z.string(),
  googleId: z.string().optional(),
  email: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  emailVerified: z.boolean(),
  enabled2FA: z.boolean().optional().default(false) as ZodType<boolean>,
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
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
}) satisfies ZodType<UserData>;

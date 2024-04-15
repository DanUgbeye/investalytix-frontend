import { ZodType, z } from "zod";
import { ServerUserData, UserData } from "../user.types";

export const ServerUserSchema = z.object({
  _id: z.string(),
  email: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  googleId: z.string().optional(),
}) satisfies ZodType<ServerUserData>;

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  googleId: z.string().optional(),
}) satisfies ZodType<UserData>;

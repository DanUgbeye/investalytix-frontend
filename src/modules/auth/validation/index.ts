import { ZodType, z } from "zod";
import { AuthData } from "../auth.types";

export const AuthSchema = z.object({
  token: z.string(),
  expiresIn: z.number(),
}) satisfies ZodType<AuthData>;

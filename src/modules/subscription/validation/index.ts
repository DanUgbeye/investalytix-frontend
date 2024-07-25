import { z, ZodType } from "zod";
import {
  ServerSubscriptionData,
  ServerTransactionData,
  SubscriptionData,
  TransactionData,
} from "../types";

export const ServerSubscriptionSchema = z.object({
  _id: z.string(),
  status: z.string(),
  userId: z.string(),
  price: z.string(),
}) satisfies ZodType<ServerSubscriptionData>;

export const SubscriptionSchema = z.object({
  id: z.string(),
  status: z.string(),
  userId: z.string(),
  price: z.string(),
}) satisfies ZodType<SubscriptionData>;

export const ServerTransactionSchema = z.object({
  _id: z.string(),
  status: z.string(),
  userId: z.string(),
  price: z.number(),
  currency: z.string(),
  paymentReference: z.string(),
  type: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
}) satisfies ZodType<ServerTransactionData>;

export const TransactionSchema = z.object({
  id: z.string(),
  status: z.string(),
  userId: z.string(),
  price: z.number(),
  currency: z.string(),
  paymentReference: z.string(),
  type: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
}) satisfies ZodType<TransactionData>;

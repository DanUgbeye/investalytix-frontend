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
  paymentReference: z.string(),
  type: z.string(),
}) satisfies ZodType<ServerTransactionData>;

export const TransactionSchema = z.object({
  id: z.string(),
  status: z.string(),
  userId: z.string(),
  price: z.number(),
  paymentReference: z.string(),
  type: z.string(),
}) satisfies ZodType<TransactionData>;

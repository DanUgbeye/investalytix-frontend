import { ZodType, z } from "zod";
import { ServerWatchlist, Watchlist } from "../types";

export const ServerWatchlistSchema = z.object({
  _id: z.string(),
  symbol: z.string(),
  name: z.string(),
  stockExchange: z.string(),
  exchangeShortName: z.string(),
  currency: z.string(),
  sector: z.string(),
  industry: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
}) satisfies ZodType<ServerWatchlist>;

export const WatchlistSchema = z.object({
  id: z.string(),
  symbol: z.string(),
  name: z.string(),
  stockExchange: z.string(),
  exchangeShortName: z.string(),
  currency: z.string(),
  sector: z.string(),
  industry: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
}) satisfies ZodType<Watchlist>;

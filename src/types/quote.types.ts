import { QuoteTimeframeSchema } from "@/validation";
import { z } from "zod";

export type Quote = {
  symbol: string;
  name: string | null;
  price: number | null;
  changesPercentage: number | null;
  change: number | null;
  dayLow: number | null;
  dayHigh: number | null;
  yearHigh: number | null;
  yearLow: number | null;
  marketCap: number | null;
  priceAvg50: number | null;
  priceAvg200: number | null;
  exchange: string | null;
  exchangeShortName?: string | null;
  volume: number | null;
  avgVolume: number | null;
  open: number | null;
  previousClose: number | null;
  eps: number | null;
  pe: number | null;
  earningsAnnouncement: string | null;
  sharesOutstanding: number | null;
  timestamp: number | null;
};

export type StockSocketData = {
  s: string;
  t: number;
  type: string;
  ap: number | null;
  as: number | null;
  bp: number | null;
  bs: number | null;
  lp: number | null;
  ls: number | null;
};

export type AfterMarketQuote = {
  symbol: string;
  ask: number;
  bid: number;
  asize: number;
  bsize: number;
  timestamp: number;
};

export type QuoteHistory = {
  date: Date;
  open: number;
  low: number;
  high: number;
  close: number;
  volume: number;
};

export type QuoteTimeframe = z.infer<typeof QuoteTimeframeSchema>;

export type ShortQuote = {
  symbol: string;
  price: number | null;
  volume: number | null;
};

export type SearchResult = {
  symbol: string;
  name: string;
  currency: string | null;
  stockExchange: string | null;
  exchangeShortName: string | null;
};

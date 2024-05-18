export type Quote = {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number | null;
  priceAvg50: number;
  priceAvg200: number;
  volume: number;
  avgVolume: number;
  exchange: string;
  open: number;
  previousClose: number;
  eps: number | null;
  pe: number | null;
  earningsAnnouncement: number | null;
  sharesOutstanding: number | null;
  timestamp: number;
};

export type SearchResult = {
  symbol: string;
  name: string;
  currency: string | null;
  stockExchange: string | null;
  exchangeShortName: string | null;
};

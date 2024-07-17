export type ServerWatchlist = {
  _id: string;
  symbol: string;
  name: string;
  stockExchange: string;
  exchangeShortName: string;
  currency: string;
  industry: string;
  sector: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Watchlist = {
  id: string;
  symbol: string;
  name: string;
  stockExchange: string;
  exchangeShortName: string;
  currency: string;
  industry: string;
  sector: string;
  createdAt: Date;
  updatedAt: Date;
};

export type NewWatchlist = Omit<Watchlist, "id" | "createdAt" | "updatedAt">;

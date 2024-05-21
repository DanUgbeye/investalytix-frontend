export type Earning = {
  date: Date;
  symbol: string;
  eps: number | null;
  epsEstimated: number | null;
  time: string;
  revenue: number | null;
  revenueEstimated: number | null;
  updatedFromDate: Date;
  fiscalDateEnding: Date;
};

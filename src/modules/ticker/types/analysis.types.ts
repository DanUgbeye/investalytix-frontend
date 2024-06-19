export type TickerAnalystRecommendation = {
  symbol: string;
  date: Date;
  analystRatingsbuy: number;
  analystRatingsHold: number;
  analystRatingsSell: number;
  analystRatingsStrongSell: number;
  analystRatingsStrongBuy: number;
};

export type TickerUpgradesDowngrades = {
  symbol: string;
  publishedDate: Date;
  newsURL: string;
  newsTitle: string;
  newsBaseURL: string;
  newsPublisher: string;
  newGrade: string;
  previousGrade: string | null;
  gradingCompany: string;
  action: string;
  priceWhenPosted: number;
};

export type TickerUpgradeDowngradeConsensus = {
  symbol: string;
  strongBuy: number;
  buy: number;
  hold: number;
  sell: number;
  strongSell: number;
  consensus: string;
};

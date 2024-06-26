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

export type TickerPriceTargetConsensus = {
  symbol: string;
  targetHigh: number;
  targetLow: number;
  targetConsensus: number;
  targetMedian: number;
};

export type TickerPriceTargetSummary = {
  symbol: string;
  lastMonth: number;
  lastMonthAvgPriceTarget: number;
  lastQuarter: number;
  lastQuarterAvgPriceTarget: number;
  lastYear: number;
  lastYearAvgPriceTarget: number;
  allTime: number;
  allTimeAvgPriceTarget: number;
  publishers: string;
};

export type TickerPriceTarget = {
  symbol: string;
  publishedDate: Date;
  newsURL: string;
  newsTitle: string | null;
  analystName: string | null;
  priceTarget: number | null;
  adjPriceTarget: number | null;
  priceWhenPosted: number | null;
  newsPublisher: string;
  newsBaseURL: string;
  analystCompany: string;
};

export type TickerUpgradesDowngradesWithPriceTarget = TickerUpgradesDowngrades &
  TickerPriceTarget;

import { Quote } from "@/modules/market/types";
import { CompanyKeyExecutive, CompanyProfile } from "./company.types";
import { Dividend } from "./dividend.types";
import { Financials, RatioTTM } from "./financials.types";
import { News } from "@/modules/news/types";

export * from "./analysis.types";
export * from "./company.types";
export * from "./dividend.types";
export * from "./earnings.types";
export * from "./financials.types";

export type TickerData = {
  outlook: CompanyOutlook;
  quote: Quote;
};

export type CompanyOutlook = {
  profile: CompanyProfile;
  ratios: RatioTTM[];
  keyExecutives: CompanyKeyExecutive[];
  stockDividend: Dividend[];
  stockNews: News[];
  financialsAnnual: Financials;
  financialsQuarter: Financials;
  metrics: CompanyMetrics;
  splitsHistory: SplitsHistory[];
  // insideTrades: InsideTrade[];
  // rating: Rating[];
};

export type InsideTrade = {
  symbol: string;
  filingDate: Date;
  transactionDate: Date;
  reportingCik: string;
  transactionType: string;
  securitiesOwned: number;
  companyCik: string;
  reportingName: string;
  typeOfOwner: string;
  acquistionOrDisposition: string;
  formType: string;
  securitiesTransacted: number;
  price: number;
  securityName: string;
  link: string;
};

export type CompanyMetrics = {
  dividendYielTTM: number | null;
  volume: number | null;
  yearHigh: number | null;
  yearLow: number | null;
};

export type Rating = {
  symbol: string;
  date: Date;
  rating: string;
  ratingScore: number;
  ratingRecommendation: string;
  ratingDetailsDCFScore: number;
  ratingDetailsDCFRecommendation: string;
  ratingDetailsROEScore: number;
  ratingDetailsROERecommendation: string;
  ratingDetailsROAScore: number;
  ratingDetailsROARecommendation: string;
  ratingDetailsDEScore: number;
  ratingDetailsDERecommendation: string;
  ratingDetailsPEScore: number;
  ratingDetailsPERecommendation: string;
  ratingDetailsPBScore: number;
  ratingDetailsPBRecommendation: string;
};

export type SplitsHistory = {
  date: Date;
  label: string;
  numerator: number;
  denominator: number;
};
import { Quote } from "@/modules/market/types";
import { CompanyKeyExecutive, CompanyProfile } from "./company.types";
import { Dividend } from "./dividend.types";
import { Financials, RatioTTM } from "./financials.types";

export * from "./company.types";
export * from "./dividend.types";
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
  // insideTrades: InsideTrade[];
  // splitsHistory: SplitsHistory[];
  // metrics: Metrics;
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

export type Metrics = {
  dividendYielTTM: number;
  volume: number;
  yearHigh: number;
  yearLow: number;
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

export type News = {
  symbol: string;
  publishedDate: Date;
  title: string;
  image: string;
  site: string;
  text: string;
  url: string;
};

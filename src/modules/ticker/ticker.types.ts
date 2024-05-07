import { Quote } from "@/modules/market/types";

export type TickerData = {
  outlook: CompanyOutlook;
  quote: Quote;
};

export type CompanyOutlook = {
  profile: Profile;
  metrics: Metrics;
  ratios: { [key: string]: number }[];
  insideTrades: InsideTrade[];
  keyExecutives: KeyExecutive[];
  splitsHistory: SplitsHistory[];
  Dividend: Dividend[];
  stockNews: StockNews[];
  rating: Rating[];
  financialsAnnual: Financials;
  financialsQuarter: Financials;
};

export type Financials = {
  income: Income[];
};

export type Income = {
  date: Date;
  symbol: Symbol;
  reportedCurrency: CurrencyEnum;
  cik: string;
  fillingDate: Date;
  acceptedDate: Date;
  calendarYear: string;
  period: string;
  revenue: number;
  costOfRevenue: number;
  grossProfit: number;
  grossProfitRatio: number;
  researchAndDevelopmentExpenses: number;
  generalAndAdministrativeExpenses: number;
  sellingAndMarketingExpenses: number;
  sellingGeneralAndAdministrativeExpenses: number;
  otherExpenses: number;
  operatingExpenses: number;
  costAndExpenses: number;
  interestIncome: number;
  interestExpense: number;
  depreciationAndAmortization: number;
  ebitda: number;
  ebitdaratio: number;
  operatingIncome: number;
  operatingIncomeRatio: number;
  totalOtherIncomeExpensesNet: number;
  incomeBeforeTax: number;
  incomeBeforeTaxRatio: number;
  incomeTaxExpense: number;
  netIncome: number;
  netIncomeRatio: number;
  eps: number;
  epsdiluted: number;
  weightedAverageShsOut: number;
  weightedAverageShsOutDil: number;
  link: string;
  finalLink: string;
};

export type CurrencyEnum = "USD";

export type Symbol = "AAPL";

export type InsideTrade = {
  symbol: Symbol;
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

export type KeyExecutive = {
  title: string;
  name: string;
  pay: number;
  currencyPay: CurrencyEnum;
  gender: string;
  yearBorn: number;
  titleSince: number;
};

export type Metrics = {
  dividendYielTTM: number;
  volume: number;
  yearHigh: number;
  yearLow: number;
};

export type Profile = {
  symbol: Symbol;
  price: number;
  beta: number;
  volAvg: number;
  mktCap: number;
  lastDiv: number;
  range: string;
  changes: number;
  companyName: string;
  currency: CurrencyEnum;
  cik: string;
  isin: string;
  cusip: string;
  exchange: string;
  exchangeShortName: string;
  industry: string;
  website: string;
  description: string;
  ceo: string;
  sector: string;
  country: string;
  fullTimeEmployees: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  dcfDiff: number;
  dcf: number;
  image: string;
  ipoDate: Date | string;
  defaultImage: boolean;
  isEtf: boolean;
  isActivelyTrading: boolean;
  isAdr: boolean;
  isFund: boolean;
};

export type Rating = {
  symbol: Symbol;
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

export type Dividend = {
  date: string;
  label: string;
  adjDividend: number;
  dividend: number;
  recordDate: string;
  paymentDate: string;
  declarationDate: string;
};

export type StockNews = {
  symbol: Symbol;
  publishedDate: Date;
  title: string;
  image: string;
  site: string;
  text: string;
  url: string;
};

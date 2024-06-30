export type CompanyProfile = {
  symbol: string;
  price: number | null;
  beta: number | null;
  volAvg: number | null;
  mktCap: number | null;
  lastDiv: number | null;
  range: string;
  changes: number | null;
  companyName: string;
  currency: string;
  cik: string | null;
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
  state: string | null;
  zip: string;
  dcfDiff: number | null;
  dcf: number | null;
  image: string;
  ipoDate: Date;
  defaultImage: boolean;
  isEtf: boolean;
  isActivelyTrading: boolean;
  isAdr: boolean;
  isFund: boolean;
};

export type CompanyKeyExecutive = {
  title: string;
  name: string;
  pay: number | null;
  currencyPay: string;
  gender: string;
  yearBorn: number | null;
  titleSince: Date | null;
};

export type MutualFundHolder = {
  holder: string;
  shares: number;
  dateReported: Date;
  change: number;
  weightPercent: number | null;
};

export type InstitutionalHolder = {
  holder: string;
  shares: number;
  dateReported: Date;
  change: number;
};

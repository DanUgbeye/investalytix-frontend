export type CompanyProfile = {
  symbol: string;
  price: number | null;
  beta: number | null;
  volAvg: number | null;
  mktCap: number | null;
  lastDiv: number | null;
  range: string | null;
  changes: number | null;
  companyName: string | null;
  currency: string | null;
  cik: string | null;
  isin: string | null;
  cusip: string | null;
  exchange: string;
  exchangeShortName: string | null;
  industry: string | null;
  website: string | null;
  description: string | null;
  ceo: string | null;
  sector: string | null;
  country: string | null;
  fullTimeEmployees: string | null;
  phone: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  dcfDiff: number | null;
  dcf: number | null;
  image: string | null;
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

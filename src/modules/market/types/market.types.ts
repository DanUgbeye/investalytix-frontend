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
  marketCap: null;
  priceAvg50: number;
  priceAvg200: number;
  volume: number;
  avgVolume: number;
  exchange: string;
  open: number;
  previousClose: number;
  eps: null;
  pe: null;
  earningsAnnouncement: null;
  sharesOutstanding: null;
  timestamp: number;
};

export type SectorPerformance = {
  sector: string;
  changesPercentage: string;
};

export type SectorPerformanceHistory = {
  date: Date;
  basicMaterialsChangesPercentage: number | null;
  communicationServicesChangesPercentage: number | null;
  consumerCyclicalChangesPercentage: number | null;
  consumerDefensiveChangesPercentage: number | null;
  energyChangesPercentage: number | null;
  financialServicesChangesPercentage: number | null;
  healthcareChangesPercentage: number | null;
  industrialsChangesPercentage: number | null;
  realEstateChangesPercentage: number | null;
  technologyChangesPercentage: number | null;
  utilitiesChangesPercentage: number | null;
};

export type MarketOpen = {
  stockExchangeName: string;
  stockMarketHours: StockMarketHours;
  stockMarketHolidays: StockMarketHoliday[];
  isTheStockMarketOpen: boolean;
  isTheEuronextMarketOpen: boolean;
  isTheForexMarketOpen: boolean;
  isTheCryptoMarketOpen: boolean;
};

export type StockMarketHoliday = {
  year: number;
  "Assumption Day"?: Date;
  "Easter Monday"?: Date;
  "Good Friday"?: Date;
  "Labour Day"?: Date;
  "New Year's Eve"?: Date;
  "Boxing Day"?: Date;
  "New Year's Day"?: Date;
  "Christmas (Dec 24th)"?: Date;
  "Labor Day"?: Date;
  "New Year's Day (Jan 1st)"?: Date;
  "Christmas (Dec 25th)"?: Date;
  "Christmas (Dec 28th)"?: Date;
  "Labor Day (May 3rd)"?: Date;
  Easter?: Date;
  "Christmas (Dec 27th)"?: Date;
  "Bank Holiday"?: Date;
  Christmas?: Date;
};

export type StockMarketHours = {
  openingHour: string;
  closingHour: string;
};

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

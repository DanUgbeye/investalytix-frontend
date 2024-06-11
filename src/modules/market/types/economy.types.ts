export type EconomicCalendar = {
  date: string;
  country: string;
  event: string;
  currency: string;
  previous: number | null;
  estimate: number | null;
  actual: number | null;
  change: number | null;
  impact: EconomicCalendarImpact;
  changePercentage: number;
  unit: string;
};

export type EconomicCalendarImpact = "Low" | "Medium" | "High" | "None";

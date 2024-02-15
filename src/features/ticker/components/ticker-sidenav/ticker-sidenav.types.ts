export const TICKER_NAV_TABS = {
  STOCK_DESCRIPTION: "stock-description",
  ANALYST_RECOMMENDATIONS: "analyst-recommendations",
  CHARTS: "charts",
  FINANCIALS: "financials",
  NEWS: "news",
  DIVIDENDS: "dividends",
  INDUSTRY_SECTOR_COMPARISON: "industry-sector-comparison",
} as const;

export type TickerNavTab =
  (typeof TICKER_NAV_TABS)[keyof typeof TICKER_NAV_TABS];

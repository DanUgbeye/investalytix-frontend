export const TICKER_NAV_TABS = {
  STOCK_DESCRIPTION: {
    label: "Stock Description",
    path: "stock-description",
  },
  ANALYST_RECOMMENDATIONS: {
    label: "Analyst Recommendation",
    path: "analyst-recommendations",
  },
  CHARTS: {
    label: "Charts",
    path: "charts",
  },
  FINANCIALS: {
    label: "Financials",
    path: "financials",
  },
  NEWS: {
    label: "Individual Company News",
    path: "news",
  },
  DIVIDENDS: {
    label: "Dividends",
    path: "dividends",
  },
  INDUSTRY_SECTOR_COMPARISON: {
    label: "Industry & Sector Comparison",
    path: "industry-sector-comparison",
  },
} as const;

export type TickerNavTab =
  (typeof TICKER_NAV_TABS)[keyof typeof TICKER_NAV_TABS]["path"];

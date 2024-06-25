import PAGES from "@/data/page-map";
import { TICKER_NAV_TABS } from "@/modules/ticker/components/ticker-nav/ticker-sidenav.types";

export function getTickerStockDescriptionRoute(ticker: string) {
  return `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.STOCK_DESCRIPTION.path}` as const;
}

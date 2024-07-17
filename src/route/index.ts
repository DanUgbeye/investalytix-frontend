import { PROFILE_TABS } from "@/app/(app)/(authenticated-routes)/profile/profile.types";
import PAGES from "@/data/page-map";
import { TICKER_NAV_TABS } from "@/modules/ticker/components/ticker-nav/ticker-sidenav.types";

export function getTickerStockDescriptionRoute(ticker: string) {
  return `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.STOCK_DESCRIPTION.path}` as const;
}

export function getPersonalInfoRoute() {
  return `${PAGES.PROFILE}?tab=${PROFILE_TABS.PERSONAL_INFO.path}` as const;
}

export function getSettingsRoute() {
  return `${PAGES.PROFILE}?tab=${PROFILE_TABS.PRIVACY.path}` as const;
}

export function getSubsriptionRoute() {
  return `${PAGES.PROFILE}?tab=${PROFILE_TABS.SUBCRIPTIONS.path}` as const;
}

export function getWatchlistRoute() {
  return `${PAGES.PROFILE}?tab=${PROFILE_TABS.WATCHLIST.path}` as const;
}

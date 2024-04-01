import PAGES from "@/data/page-map";
import { TICKER_NAV_TABS } from "@/features/ticker/components/ticker-nav/ticker-sidenav.types";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

export interface SearchTickerPageProps {
  params: {
    ticker: string;
  };
}

function SearchTickerPage(props: SearchTickerPageProps) {
  const {
    params: { ticker },
  } = props;

  return redirect(
    `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.STOCK_DESCRIPTION.path}`
  );
}

export default SearchTickerPage;

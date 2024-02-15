import PAGES from "@/data/page-map";
import { TICKER_NAV_TABS } from "@/features/ticker/components/ticker-sidenav/ticker-sidenav.types";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { SearchTickerPageProps } from "../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface StockDescriptionPageProps extends SearchTickerPageProps {}

function StockDescriptionPage(props: StockDescriptionPageProps) {
  const {
    params: { ticker },
  } = props;

  return redirect(
    `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.STOCK_DESCRIPTION}/${"summary"}`
  );
}

export default StockDescriptionPage;

import PAGES from "@/data/page-map";
import { TICKER_NAV_TABS } from "@/modules/ticker/components/ticker-nav/ticker-sidenav.types";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { SearchTickerPageProps } from "../page";
import { STOCK_DESCRIPTION_MENU } from "./stock-description.types";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface StockDescriptionPageProps extends SearchTickerPageProps {}

function StockDescriptionPage(props: StockDescriptionPageProps) {
  const {
    params: { ticker },
  } = props;

  return redirect(
    `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.STOCK_DESCRIPTION.path}/${STOCK_DESCRIPTION_MENU.SUMMARY.path}`
  );
}

export default StockDescriptionPage;

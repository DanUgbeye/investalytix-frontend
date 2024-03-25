import PAGES from "@/data/page-map";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { SearchTickerPageProps } from "../page";
import { FINANCIALS_MENU } from "./financials.types";
import { TICKER_NAV_TABS } from "@/features/ticker/components/ticker-nav/ticker-sidenav.types";

export const metadata: Metadata = {
  title: "Financials | Investalytix",
};

interface FinancalsPageProps extends SearchTickerPageProps {}

function FinancalsPage(props: FinancalsPageProps) {
  const {
    params: { ticker },
  } = props;

  return redirect(
    `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.FINANCIALS.path}/${FINANCIALS_MENU.KEY_STATS.path}`
  );
}

export default FinancalsPage;

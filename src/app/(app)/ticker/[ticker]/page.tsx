import PAGES from "@/data/page-map";
import { TICKER_NAV_TABS } from "@/modules/ticker/components/ticker-nav/ticker-sidenav.types";
import { redirect } from "next/navigation";

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

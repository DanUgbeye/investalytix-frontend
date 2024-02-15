import PAGES from "@/data/page-map";
import StockDescriptionMenuBar from "@/features/ticker/components/stock-description-menu-bar";
import { TICKER_NAV_TABS } from "@/features/ticker/components/ticker-sidenav/ticker-sidenav.types";
import { PropsWithChildren, useMemo } from "react";

export interface StockDescriptionLayoutProps extends PropsWithChildren {
  params: {
    ticker: string;
  };
}

function StockDescriptionLayout(props: StockDescriptionLayoutProps) {
  const {
    children,
    params: { ticker },
  } = props;

  return (
    <div>
      {/* MENU NAVIGATION */}
      <StockDescriptionMenuBar ticker={ticker} />

      {children}
    </div>
  );
}

export default StockDescriptionLayout;

"use client";

import PAGES from "@/data/page-map";
import { TICKER_NAV_TABS } from "@/features/ticker/components/ticker-nav/ticker-sidenav.types";
import TickerSubMenuBar from "@/features/ticker/components/ticker-sub-menu-bar";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { STOCK_DESCRIPTION_MENU } from "./stock-description.types";

export interface StockDescriptionSubMenuBarProps {
  ticker: string;
}

function StockDescriptionSubMenuBar(props: StockDescriptionSubMenuBarProps) {
  const { ticker } = props;
  const pathname = usePathname();

  const menuTabs = useMemo(() => {
    return Object.values(STOCK_DESCRIPTION_MENU).map(({ path, label }) => {
      return {
        label,
        path: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.STOCK_DESCRIPTION.path}/${path}` as const,
      };
    });
  }, [ticker]);

  const activeTab = useMemo(() => {
    let activePath: string = "";

    const pathnames = Object.values(menuTabs);

    for (let i = 0; i < pathnames.length; i++) {
      const path = pathnames[i].path;

      if (pathname === path) {
        activePath = path;
        break;
      }
    }

    return activePath;
  }, [pathname, menuTabs]);

  return <TickerSubMenuBar subMenu={[...menuTabs]} active={activeTab} />;
}

export default StockDescriptionSubMenuBar;

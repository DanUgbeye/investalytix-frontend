"use client";

import { FINANCIALS_MENU } from "./financials.types";
import PAGES from "@/data/page-map";
import { TICKER_NAV_TABS } from "@/modules/ticker/components/ticker-nav/ticker-sidenav.types";
import TickerSubMenuBar from "@/modules/ticker/components/ticker-sub-menu-bar";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface FinancialsMenuBarProps {
  ticker: string;
}

export default function FinancialsMenuBar(props: FinancialsMenuBarProps) {
  const { ticker } = props;
  const pathname = usePathname();

  const menuTabs = useMemo(() => {
    return Object.values(FINANCIALS_MENU).map(({ path, label }) => {
      return {
        label,
        path: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.FINANCIALS.path}/${path}` as const,
      };
    });
  }, [ticker]);

  const activeTab = useMemo(() => {
    let activePath = "";

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

"use client";

import PAGES from "@/data/page-map";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { TickerNavProps } from ".";
import TickerNavLink from "../ticker-nav-link";
import { TICKER_NAV_TABS } from "./ticker-sidenav.types";

export function MobileTickerNav(props: TickerNavProps) {
  const { ticker, className, ...rest } = props;
  const pathname = usePathname();

  const navTabs = useMemo(() => {
    return Object.values(TICKER_NAV_TABS).map(({ label, path }) => ({
      label,
      path: `${PAGES.TICKER}/${ticker}/${path}` as const,
    }));
  }, [ticker]);

  const activeTab = useMemo(() => {
    let activePath = "";

    const pathnames = Object.values(navTabs);

    for (let i = 0; i < pathnames.length; i++) {
      const path = pathnames[i].path;

      if (pathname.includes(path)) {
        activePath = path;
        break;
      }
    }

    return activePath;
  }, [pathname, navTabs]);

  return (
    <aside
      {...rest}
      className={cn(
        " flex divide-x divide-gray-300 overflow-x-auto bg-gray-100 dark:bg-transparent ",
        className
      )}
    >
      {navTabs.map(({ label, path }, index) => {
        return (
          <TickerNavLink
            key={`ticker-nav-link-${label}-${index}`}
            href={path}
            active={path === activeTab}
            variant="mobile"
          >
            {label}
          </TickerNavLink>
        );
      })}
    </aside>
  );
}

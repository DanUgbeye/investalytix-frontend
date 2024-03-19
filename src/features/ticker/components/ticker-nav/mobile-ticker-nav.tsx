import Mapper from "@/components/mapper";
import Spinner from "@/components/spinner";
import { usePathname } from "next/navigation";
import { HTMLAttributes, useMemo } from "react";
import { MdOutlineInsertChart } from "react-icons/md";
import { TICKER_NAV_TABS, TickerNavTab } from "./ticker-sidenav.types";
import PAGES from "@/data/page-map";
import TickerNavLink from "../ticker-nav-link";
import { cn } from "@/lib/utils";
import { TickerNavProps } from ".";

export function MobileTickerNav(props: TickerNavProps) {
  const { ticker, className, ...rest } = props;
  const pathname = usePathname();
  const activeTab = useMemo<TickerNavTab>(() => {
    if (pathname.includes(TICKER_NAV_TABS.STOCK_DESCRIPTION)) {
      return TICKER_NAV_TABS.STOCK_DESCRIPTION;
    }
    if (pathname.includes(TICKER_NAV_TABS.ANALYST_RECOMMENDATIONS)) {
      return TICKER_NAV_TABS.ANALYST_RECOMMENDATIONS;
    }
    if (pathname.includes(TICKER_NAV_TABS.CHARTS)) {
      return TICKER_NAV_TABS.CHARTS;
    }
    if (pathname.includes(TICKER_NAV_TABS.DIVIDENDS)) {
      return TICKER_NAV_TABS.DIVIDENDS;
    }
    if (pathname.includes(TICKER_NAV_TABS.FINANCIALS)) {
      return TICKER_NAV_TABS.FINANCIALS;
    }
    if (pathname.includes(TICKER_NAV_TABS.NEWS)) {
      return TICKER_NAV_TABS.NEWS;
    }
    if (pathname.includes(TICKER_NAV_TABS.INDUSTRY_SECTOR_COMPARISON)) {
      return TICKER_NAV_TABS.INDUSTRY_SECTOR_COMPARISON;
    }

    return TICKER_NAV_TABS.STOCK_DESCRIPTION;
  }, [pathname]);

  return (
    <aside
      {...rest}
      className={cn(
        " flex divide-x divide-gray-300 overflow-x-auto bg-gray-100 dark:bg-transparent ",
        className
      )}
    >
      <Mapper
        id="ticker-nav-links"
        list={[
          {
            name: "Stock Description",
            active:
              activeTab === TICKER_NAV_TABS.STOCK_DESCRIPTION || !activeTab,
            href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.STOCK_DESCRIPTION}`,
          },
          {
            name: "Analyst Recommendation",
            active: activeTab === TICKER_NAV_TABS.ANALYST_RECOMMENDATIONS,
            href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.ANALYST_RECOMMENDATIONS}`,
          },
          {
            name: "Charts",
            active: activeTab === TICKER_NAV_TABS.CHARTS,
            href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.CHARTS}`,
          },
          {
            name: "Financials",
            active: activeTab === TICKER_NAV_TABS.FINANCIALS,
            href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.FINANCIALS}`,
          },
          {
            name: "Individual Company News",
            active: activeTab === TICKER_NAV_TABS.NEWS,
            href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.NEWS}`,
          },
          {
            name: "Dividends",
            active: activeTab === TICKER_NAV_TABS.DIVIDENDS,
            href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.DIVIDENDS}`,
          },
          {
            name: "Industry & Sector Comparison",
            active: activeTab === TICKER_NAV_TABS.INDUSTRY_SECTOR_COMPARISON,
            href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.INDUSTRY_SECTOR_COMPARISON}`,
          },
        ]}
        component={(props) => {
          const {
            item: { name, active, href },
          } = props;

          return (
            <TickerNavLink href={href} active={active} variant="mobile">
              {name}
            </TickerNavLink>
          );
        }}
      />
    </aside>
  );
}

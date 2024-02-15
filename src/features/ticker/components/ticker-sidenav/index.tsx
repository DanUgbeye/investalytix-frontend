import Spinner from "@/components/spinner";
import { Quote } from "@/features/market/market.types";
import React, { HTMLAttributes, useMemo } from "react";
import { MdOutlineInsertChart } from "react-icons/md";
import { TICKER_NAV_TABS, TickerNavTab } from "./ticker-sidenav.types";
import Mapper from "@/components/mapper";
import { usePathname, useSearchParams } from "next/navigation";
import PAGES from "@/data/page-map";
import TickerNavLink from "../ticker-nav-link";
import { cn } from "@/lib/utils";

export interface TickerSideNavProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  ticker: string;
  loading?: boolean;
  quote?: Quote;
}

export default function TickerSideNav(props: TickerSideNavProps) {
  const { loading, ticker, quote, className, ...rest } = props;
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
    <aside className={cn(className)}>
      <div className=" py-4 ">
        {loading && (
          <div className=" grid w-full place-items-center py-8 ">
            <Spinner className=" size-8 text-primary-base " />
          </div>
        )}

        {!loading && quote && (
          <div className="  ">
            <div className=" flex flex-col ">
              <div className=" px-4 ">
                <div className=" font-bold text-primary-base ">AAPL</div>
                <div className=" text-2xl font-bold ">Apple INC</div>
              </div>

              <div className=" space-y-1 px-4 py-2 ">
                <div className=" flex items-center space-x-1.5 ">
                  <span className=" font-bold ">$19.88</span>
                  <span className=" text-xs font-bold text-[#079516] ">
                    +1.59 (+8.69%)
                  </span>
                </div>

                <div className=" text-xs text-gray-400 ">
                  At close: December 18 04:00 PM EST
                </div>
              </div>

              <div className=" space-y-1 bg-gray-100 px-4 py-2 ">
                <div className=" flex items-center space-x-1.5 ">
                  <span className=" font-bold ">$20.56</span>
                  <span className=" text-xs font-bold text-red-500 ">
                    -0.68 (-0.42%)
                  </span>
                </div>

                <div className=" text-xs text-gray-400 ">
                  After hours: January 12 07:59 PM EST
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TICKER NAV LINKS */}
        <div className=" divide-y border-y border-r ">
          <Mapper
            id="ticker-nav-links"
            list={[
              {
                name: "Stock Description",
                tabName: TICKER_NAV_TABS.STOCK_DESCRIPTION,
                icon: MdOutlineInsertChart,
                active:
                  activeTab === TICKER_NAV_TABS.STOCK_DESCRIPTION || !activeTab,
                href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.STOCK_DESCRIPTION}`,
              },
              {
                name: "Analyst Recommendation",
                tabName: TICKER_NAV_TABS.ANALYST_RECOMMENDATIONS,
                icon: MdOutlineInsertChart,
                active: activeTab === TICKER_NAV_TABS.ANALYST_RECOMMENDATIONS,
                href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.ANALYST_RECOMMENDATIONS}`,
              },
              {
                name: "Charts",
                tabName: TICKER_NAV_TABS.CHARTS,
                icon: MdOutlineInsertChart,
                active: activeTab === TICKER_NAV_TABS.CHARTS,
                href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.CHARTS}`,
              },
              {
                name: "Financials",
                tabName: TICKER_NAV_TABS.FINANCIALS,
                icon: MdOutlineInsertChart,
                active: activeTab === TICKER_NAV_TABS.FINANCIALS,
                href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.FINANCIALS}`,
              },
              {
                name: "Individual Company News",
                tabName: TICKER_NAV_TABS.NEWS,
                icon: MdOutlineInsertChart,
                active: activeTab === TICKER_NAV_TABS.NEWS,
                href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.NEWS}`,
              },
              {
                name: "Dividends",
                tabName: TICKER_NAV_TABS.DIVIDENDS,
                icon: MdOutlineInsertChart,
                active: activeTab === TICKER_NAV_TABS.DIVIDENDS,
                href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.DIVIDENDS}`,
              },
              {
                name: "Industry & Sector Comparison",
                tabName: TICKER_NAV_TABS.INDUSTRY_SECTOR_COMPARISON,
                icon: MdOutlineInsertChart,
                active:
                  activeTab === TICKER_NAV_TABS.INDUSTRY_SECTOR_COMPARISON,
                href: `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.INDUSTRY_SECTOR_COMPARISON}`,
              },
            ]}
            component={(props) => {
              const {
                item: { name, tabName, icon, active, href },
              } = props;

              return (
                <TickerNavLink href={href} icon={icon} active={active}>
                  {name}
                </TickerNavLink>
              );
            }}
          />
        </div>
      </div>
    </aside>
  );
}

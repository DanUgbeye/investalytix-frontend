"use client";

import ColoredText from "@/components/colored-text";
import PAGES from "@/data/page-map";
import { cn } from "@/lib/utils";
import { Quote } from "@/types";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { TickerNavProps } from ".";
import TickerNavLink from "../ticker-nav-link";
import { TICKER_NAV_TABS } from "./ticker-sidenav.types";

type QuoteSummary = {
  price: number;
  change: number;
  changesPercentage: number;
  timestamp: number;
};

interface Props extends TickerNavProps {
  statsVisible: boolean;
  quote: Quote;
  afterMarketQuote?: QuoteSummary;
}

export function MobileTickerNav(props: Props) {
  const {
    ticker,
    className,
    quote: tickerQuote,
    afterMarketQuote,
    statsVisible,
    ...rest
  } = props;
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
      className={cn("flex flex-col bg-white dark:bg-black", className)}
    >
      <div
        className={cn(
          "hidden w-full border-y duration-300 dark:border-main-gray-700",
          { flex: !statsVisible }
        )}
      >
        {tickerQuote && (
          <div className="flex w-full gap-x-5">
            <div className="flex w-full flex-wrap justify-between gap-4 py-3">
              <div className="space-y-1 px-4">
                <div className="text-2xl font-bold">{tickerQuote.name}</div>

                <div className="flex w-fit flex-wrap items-center gap-1 text-xs font-medium text-main-gray-400">
                  <span className=" ">{tickerQuote.symbol}</span>
                  <span className="size-1 rounded-full bg-primary-base" />
                  <span className=" ">{tickerQuote.exchange}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-end gap-3">
                <div
                  className={cn("space-y-1 px-4", {
                    "max-sm:hidden": afterMarketQuote !== undefined,
                  })}
                >
                  <div className="flex flex-wrap items-end gap-1.5">
                    <span className="text-2xl font-bold">
                      {appUtils.formatNumber(tickerQuote.price || undefined)}
                    </span>

                    <span className="flex gap-1 text-sm font-bold">
                      {tickerQuote.change && (
                        <ColoredText
                          isPositive={() => {
                            if (!tickerQuote.change) return undefined;
                            if (tickerQuote.change > 0) return true;
                            if (tickerQuote.change < 0) return false;
                            return undefined;
                          }}
                        >
                          {tickerQuote.change > 0 && "+"}
                          {appUtils.formatNumber(tickerQuote.change, {
                            style: "decimal",
                          })}
                        </ColoredText>
                      )}{" "}
                      {tickerQuote.changesPercentage && (
                        <ColoredText
                          isPositive={() => {
                            if (!tickerQuote.changesPercentage)
                              return undefined;
                            if (tickerQuote.changesPercentage > 0) return true;
                            if (tickerQuote.changesPercentage < 0) return false;
                            return undefined;
                          }}
                        >
                          {tickerQuote.changesPercentage > 0 && "+"}
                          {appUtils.formatNumber(
                            tickerQuote.changesPercentage,
                            {
                              style: "decimal",
                            }
                          )}
                          %
                        </ColoredText>
                      )}
                    </span>
                  </div>

                  {tickerQuote.timestamp && (
                    <div className="text-xs text-main-gray-400">
                      At close:{" "}
                      {format(
                        new Date(tickerQuote.timestamp * 1000),
                        "MMMM dd hh:mm a"
                      )}
                    </div>
                  )}
                </div>

                {afterMarketQuote && (
                  <div className="space-y-1 px-4">
                    <div className="flex flex-wrap items-end gap-1.5">
                      <span className="text-xl font-bold">
                        {appUtils.formatNumber(
                          afterMarketQuote.price || undefined
                        )}
                      </span>

                      <span className="flex gap-1 text-xs font-bold">
                        {afterMarketQuote.change && (
                          <ColoredText
                            isPositive={() => {
                              if (!afterMarketQuote.change) return undefined;
                              if (afterMarketQuote.change > 0) return true;
                              if (afterMarketQuote.change < 0) return false;
                              return undefined;
                            }}
                          >
                            {afterMarketQuote.change > 0 && "+"}
                            {appUtils.formatNumber(afterMarketQuote.change, {
                              style: "decimal",
                            })}
                          </ColoredText>
                        )}{" "}
                        {afterMarketQuote.changesPercentage && (
                          <ColoredText
                            isPositive={() => {
                              if (!afterMarketQuote.changesPercentage)
                                return undefined;
                              if (afterMarketQuote.changesPercentage > 0)
                                return true;
                              if (afterMarketQuote.changesPercentage < 0)
                                return false;
                              return undefined;
                            }}
                          >
                            {afterMarketQuote.changesPercentage > 0 && "+"}
                            {appUtils.formatNumber(
                              afterMarketQuote.changesPercentage,
                              { style: "decimal" }
                            )}
                            %
                          </ColoredText>
                        )}
                      </span>
                    </div>

                    {afterMarketQuote.timestamp && (
                      <div className="text-xs text-main-gray-400">
                        After Market:{" "}
                        {format(
                          new Date(afterMarketQuote.timestamp),
                          "MMM dd hh:mm a"
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex divide-x overflow-x-auto bg-gray-100 dark:divide-main-gray-700 dark:bg-black">
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
      </div>
    </aside>
  );
}

"use client";

import PAGES from "@/data/page-map";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { TickerNavProps } from ".";
import TickerNavLink from "../ticker-nav-link";
import { TICKER_NAV_TABS } from "./ticker-sidenav.types";
import { Quote } from "@/types";
import appUtils from "@/utils/app-util";
import ColoredNumber from "@/components/ui/ColoredNumber";
import { format } from "date-fns";

interface Props extends TickerNavProps {
  statsVisible: boolean;
  quote: Quote;
}

export function MobileTickerNav(props: Props) {
  const { ticker, className, quote, statsVisible, ...rest } = props;
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

  console.log(statsVisible);

  return (
    <aside
      {...rest}
      className={cn(" flex flex-col bg-white dark:bg-black ", className)}
    >
      <div
        className={cn(" hidden w-full duration-300 border-y dark:border-main-gray-700", {
          " flex ": !statsVisible,
        })}
      >
        {quote && (
          <div className=" flex w-full  gap-x-5 ">
            <div className=" flex flex-wrap justify-between w-full py-3 ">
              <div className=" space-y-1 px-4 ">
                <div className=" text-2xl font-bold ">{quote.name}</div>

                <div className=" flex w-fit flex-wrap items-center gap-1 text-xs font-medium text-main-gray-400 ">
                  <span className="  ">{quote.symbol}</span>
                  <span className=" size-1 rounded-full bg-primary-base " />
                  <span className="  ">{quote.exchange}</span>
                </div>
              </div>

              <div className=" space-y-1 px-4 ">
                <div className=" flex flex-wrap items-end gap-1.5 ">
                  <span className=" text-2xl font-bold ">
                    {appUtils.formatNumber(quote.price || undefined)}
                  </span>

                  <span className=" text-sm font-bold ">
                    {quote.change && (
                      <>
                        {quote.change > 0 && "+"}
                        <ColoredNumber
                          number={Number(quote.change.toFixed(2))}
                        />
                      </>
                    )}{" "}
                    {quote.changesPercentage && (
                      <>
                        {quote.changesPercentage > 0 && "+"}
                        <ColoredNumber
                          percent
                          number={Number(quote.changesPercentage.toFixed(2))}
                        />
                      </>
                    )}
                  </span>
                </div>

                {quote.timestamp && (
                  <div className=" text-xs text-main-gray-400 ">
                    At close:{" "}
                    {format(
                      new Date(quote.timestamp * 1000),
                      "MMMM dd hh:mm a"
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* <div className=" w-full space-y-1 bg-main-gray-100 px-4 py-3 dark:bg-main-gray-900 ">
                <div className=" flex items-center space-x-1.5 ">
                  <span className=" font-bold ">$20.56</span>
                  <span className=" text-xs font-bold text-red-500 ">
                    -0.68 (-0.42%)
                  </span>
                </div>

                <div className=" text-xs text-main-gray-400 ">
                  After hours: January 12 07:59 PM EST
                </div>
              </div> */}
          </div>
        )}
      </div>

      <div className=" flex overflow-x-auto bg-gray-100 dark:bg-black ">
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

import Spinner from "@/components/spinner";
import PAGES from "@/data/page-map";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { MdOutlineInsertChart } from "react-icons/md";
import { TickerNavProps } from ".";
import TickerNavLink from "../ticker-nav-link";
import { TICKER_NAV_TABS } from "./ticker-sidenav.types";

function getNavTabIcon(
  tab: (typeof TICKER_NAV_TABS)[keyof typeof TICKER_NAV_TABS]["label"]
) {
  switch (tab) {
    default:
      return MdOutlineInsertChart;
  }
}

export function DesktopTickerNav(props: TickerNavProps) {
  const { ticker, className, ...rest } = props;
  const loading = false;
  const quote = {};
  const pathname = usePathname();

  const navTabs = useMemo(() => {
    return Object.values(TICKER_NAV_TABS).map(({ label, path }) => ({
      label,
      path: `${PAGES.TICKER}/${ticker}/${path}` as const,
      icon: getNavTabIcon(label),
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
    <aside {...rest} className={cn(" pb-4 ", className)}>
      <div className=" h-fit border-r ">
        {loading && (
          <div className=" grid w-full place-items-center py-8 ">
            <Spinner className=" size-8 text-primary-base " />
          </div>
        )}

        {!loading && quote && (
          <div className=" py-4 ">
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

              <div className=" space-y-1 bg-gray-100 px-4 py-2 dark:bg-transparent ">
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
        <div className=" divide-y border-y ">
          {navTabs.map(({ label, path, icon }, index) => {
            return (
              <TickerNavLink
                key={`ticker-nav-link-${label}-${index}`}
                href={path}
                icon={icon}
                active={path === activeTab}
              >
                {label}
              </TickerNavLink>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

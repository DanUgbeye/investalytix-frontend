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
    case TICKER_NAV_TABS.STOCK_DESCRIPTION["label"]: {
      return function SummaryIcon(props: React.SVGAttributes<SVGElement>) {
        return (
          <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.40385 18.0178H3.60257C3.17754 18.0178 2.76992 17.8489 2.46938 17.5484C2.16884 17.2478 2 16.8402 2 16.4152V6.79979C2 6.37476 2.16884 5.96714 2.46938 5.6666C2.76992 5.36606 3.17754 5.19722 3.60257 5.19722H18.0257C18.4507 5.19722 18.8583 5.36606 19.1589 5.6666C19.4594 5.96714 19.6282 6.37476 19.6282 6.79979V8.40236H18.0257V6.79979H3.60257V16.4152H4.40385V18.0178Z"
              fill="currentColor"
            />
            <path
              d="M13.9872 5.99029H12.3846V4.38772H9.17946V5.99029H7.5769V2.78516H13.9872V5.99029Z"
              fill="currentColor"
            />
            <path
              d="M5.97433 4.38772H4.37177V5.99029H5.97433V4.38772Z"
              fill="currentColor"
            />
            <path
              d="M17.1923 4.38772H15.5897V5.99029H17.1923V4.38772Z"
              fill="currentColor"
            />
            <path
              d="M22 19.6121H4.37177V21.2147H22V19.6121Z"
              fill="currentColor"
            />
            <path
              d="M10.782 20.4134H9.17946V18.0095H7.5769V20.4134H5.97433V16.407H10.782V20.4134Z"
              fill="currentColor"
            />
            <path
              d="M16.391 20.4134H14.7885V14.8044H13.1859V20.4134H11.5833V13.2018H16.391V20.4134Z"
              fill="currentColor"
            />
            <path
              d="M22 20.4134H20.3974V11.5993H18.7949V20.4134H17.1923V9.99671H22V20.4134Z"
              fill="currentColor"
            />
          </svg>
        );
      };
    }

    case TICKER_NAV_TABS.ANALYST_RECOMMENDATIONS["label"]: {
      return function AnalystRecIcon(props: React.SVGAttributes<SVGElement>) {
        return (
          <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 6.54545H7.45455V2H22V6.54545ZM9.27273 4.72727H20.1818V3.81818H9.27273V4.72727Z"
              fill="currentColor"
            />
            <path
              d="M21.1 17.4545H8.37274V12.9091H10.1909V15.6364H19.2818V6.54545H10.1909V11.0909H8.37274V4.72727H21.1V17.4545Z"
              fill="currentColor"
            />
            <path
              d="M15.6455 16.5455H13.8273V22H15.6455V16.5455Z"
              fill="currentColor"
            />
            <path
              d="M4.73637 9.27273C5.74053 9.27273 6.55455 8.4587 6.55455 7.45455C6.55455 6.45039 5.74053 5.63636 4.73637 5.63636C3.73222 5.63636 2.91819 6.45039 2.91819 7.45455C2.91819 8.4587 3.73222 9.27273 4.73637 9.27273Z"
              fill="currentColor"
            />
            <path
              d="M3.81818 16.5455H2V12C2 11.5178 2.19156 11.0553 2.53253 10.7143C2.87351 10.3734 3.33597 10.1818 3.81818 10.1818H12V12H3.81818V16.5455Z"
              fill="currentColor"
            />
            <path
              d="M7.46365 22H5.64546V16.5455H4.73637V22H2.91819V14.7273H7.46365V22Z"
              fill="currentColor"
            />
            <path
              d="M7.46365 11.0909H2.91819V16.5455H7.46365V11.0909Z"
              fill="currentColor"
            />
          </svg>
        );
      };
    }

    case TICKER_NAV_TABS.CHARTS["label"]: {
      return function ChartIcon(props: React.SVGAttributes<SVGElement>) {
        return (
          <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 7H13V17H11V7ZM15 11H17V17H15V11ZM7 13H9V17H7V13ZM15 4H5V20H19V8H15V4ZM3 2.992C3 2.444 3.447 2 3.999 2H16L21 7V20.993C21.0009 21.1243 20.976 21.2545 20.9266 21.3762C20.8772 21.4979 20.8043 21.6087 20.7121 21.7022C20.6199 21.7957 20.5101 21.8701 20.3892 21.9212C20.2682 21.9723 20.1383 21.9991 20.007 22H3.993C3.73038 21.9982 3.47902 21.8931 3.29322 21.7075C3.10742 21.5219 3.00209 21.2706 3 21.008V2.992Z"
              fill="currentColor"
            />
          </svg>
        );
      };
    }

    case TICKER_NAV_TABS.FINANCIALS["label"]: {
      return function FinancialsIcon(props: React.SVGAttributes<SVGElement>) {
        return (
          <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18H4V10H9V18ZM7 16V12H6V16H7ZM13 16V8H12V16H13ZM15 18H10V6H15V18ZM19 16V4H18V16H19ZM21 18H16V2H21V18ZM22 22H3V20H22V22Z"
              fill="currentColor"
            />
          </svg>
        );
      };
    }

    case TICKER_NAV_TABS.NEWS["label"]: {
      return function NewsIcon(props: React.SVGAttributes<SVGElement>) {
        return (
          <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 20V4H4V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H16ZM19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V10H22V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22ZM18 12V19C18 19.2652 18.1054 19.5196 18.2929 19.7071C18.4804 19.8946 18.7348 20 19 20C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V12H18ZM6 6H12V12H6V6ZM8 8V10H10V8H8ZM6 13H14V15H6V13ZM6 16H14V18H6V16Z"
              fill="currentColor"
            />
          </svg>
        );
      };
    }

    case TICKER_NAV_TABS.DIVIDENDS["label"]: {
      return function DividendsIcon(props: React.SVGAttributes<SVGElement>) {
        return (
          <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3741 15.1045C20.0229 13.5628 20.1723 11.8565 19.8011 10.2255C19.43 8.5945 18.557 7.12084 17.305 6.0117C16.0529 4.90256 14.4847 4.21372 12.8209 4.04201C11.1571 3.87031 9.48124 4.22438 8.02906 5.05445L7.03706 3.31745C8.5547 2.45007 10.2733 1.99582 12.0213 2.00003C13.7693 2.00424 15.4856 2.46676 16.9991 3.34145C21.4891 5.93345 23.2091 11.4835 21.1161 16.1115L22.4581 16.8855L18.2931 19.0995L18.1281 14.3855L19.3741 15.1045ZM4.62406 8.89845C3.97521 10.4402 3.82585 12.1464 4.19698 13.7774C4.56811 15.4084 5.44108 16.8821 6.69314 17.9912C7.9452 19.1003 9.51338 19.7892 11.1772 19.9609C12.8411 20.1326 14.5169 19.7785 15.9691 18.9485L16.9611 20.6855C15.4434 21.5528 13.7249 22.0071 11.9769 22.0029C10.2288 21.9987 8.5125 21.5361 6.99906 20.6615C2.50906 18.0695 0.789062 12.5195 2.88206 7.89145L1.53906 7.11845L5.70406 4.90445L5.86906 9.61845L4.62306 8.89945L4.62406 8.89845ZM13.4141 14.8295L10.5831 12.0015L7.75506 14.8295L6.34106 13.4155L10.5841 9.17345L13.4131 12.0015L16.2421 9.17345L17.6561 10.5875L13.4131 14.8295H13.4141Z"
              fill="currentColor"
            />
          </svg>
        );
      };
    }

    case TICKER_NAV_TABS.INDUSTRY_SECTOR_COMPARISON["label"]: {
      return function IndustrySectorComparisonIcon(
        props: React.SVGAttributes<SVGElement>
      ) {
        return (
          <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0009 2V3.278L18.0009 4.946L21.6329 3.736L22.2659 5.632L19.2339 6.643L22.3299 15.155C21.2379 16.292 19.7009 17 18.0009 17C16.2999 17 14.7639 16.292 13.6719 15.155L16.7659 6.643L13.0009 5.387V19H17.0009V21H7.00087V19H11.0009V5.387L7.23287 6.643L10.3289 15.155C9.23787 16.292 7.70088 17 6.00087 17C4.29988 17 2.76388 16.292 1.67188 15.155L4.76587 6.643L1.73588 5.633L2.36888 3.735L6.00087 4.945L11.0009 3.278V2H13.0009ZM18.0009 9.103L16.5829 13H19.4179L18.0009 9.103ZM6.00087 9.103L4.58287 13H7.41787L6.00087 9.103Z"
              fill="currentColor"
            />
          </svg>
        );
      };
    }

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
    <aside {...rest} className={cn(" ", className)}>
      <div className=" h-fit border-r dark:border-main-gray-600 ">
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
        <div className=" divide-y border-y dark:divide-inherit dark:border-main-gray-600 ">
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

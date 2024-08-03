import EconomicEvent from "@/modules/market/components/EconomicEvent";
import SidePanel from "./SidePanel";
import SectorPerformance from "./SectorPerformance";
import { Suspense } from "react";

export enum SIDE_SECTIONS {
  ALL = "ALL",
  HOT_PICKS = "HOT_PICKS",
  GAINERS = "GAINERS",
  LOSERS = "LOSERS",
  CURRENCIES = "CURRENCIES",
  CRYPTOCURRENCY = "CRYPTOCURRENCY",
  SECTOR_PERFORMANCE = "SECTOR_PERFORMANCE",
  INSIDER_TRADING = "INSIDER_TRADING",
  WATCHLIST = "WATCHLIST",
  TOP_ECONOMIC_EVENT = "TOP_ECONOMIC_EVENT",
  TRENDING_NOW = "TRENDING_NOW",
}

export default function WithSidePanel({
  sections = SIDE_SECTIONS["ALL"],
}: Readonly<{
  sections?: SIDE_SECTIONS[] | SIDE_SECTIONS;
}>) {
  return (
    <>
      <div className="mt-20 grid gap-14 border-[#DCDCDC] pb-10 md:grid-cols-2 dark:border-white/10">
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["HOT_PICKS"])) && (
          <Suspense fallback={<Loader />}>
            <SidePanel
              moreUrl="/picks?q=hot picks"
              title="hot picks"
              url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/stocks?quotes=aig,crwd,wrb,appl,tsla,aapl`}
            />
          </Suspense>
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["GAINERS"])) && (
          <Suspense fallback={<Loader />}>
            <SidePanel
              moreUrl="/picks?q=gainers"
              title="gainers"
              url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/market/gainers`}
            />
          </Suspense>
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["LOSERS"])) && (
          <Suspense fallback={<Loader />}>
            <SidePanel
              title="losers"
              moreUrl="/picks?q=losers"
              url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/market/losers`}
            />
          </Suspense>
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["CURRENCIES"])) && (
          <Suspense fallback={<Loader />}>
            <SidePanel
              title="currencies"
              moreUrl="/markets/fx"
              url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/market/forex/america`}
            />
          </Suspense>
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["CRYPTOCURRENCY"])) && (
          <Suspense fallback={<Loader />}>
            <SidePanel
              moreUrl="/markets/cryptocurrency"
              title="cryptocurrency"
              url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/market/crypto?page=10`}
            />
          </Suspense>
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["SECTOR_PERFORMANCE"])) && (
          <Suspense fallback={<Loader />}>
            <SectorPerformance
              moreUrl="/picks?q=sector performance"
              title="sector performance"
              url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/market/sector-performance`}
            />
          </Suspense>
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["TOP_ECONOMIC_EVENT"])) && (
          <div className="md:col-span-2">
            <EconomicEvent />
          </div>
        )}

        <div className="md:col-span-2">
          {sections.includes(SIDE_SECTIONS["TRENDING_NOW"]) && (
            <EconomicEvent />
          )}
        </div>
      </div>
    </>
  );
}

export function Loader() {
  const Row = (
    <div className="flex items-center justify-between border-b py-2 dark:dark:border-gray-100/10">
      <div className="flex w-[40%] items-center gap-2">
        <div className="h-6 w-6 shrink-0 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></div>
        <div className="h-4 w-full animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></div>
      </div>
      <div className="h-4 w-16 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></div>
      <div className="h-4 w-16 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></div>
    </div>
  );
  return (
    <div className="">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-36 rounded-full bg-gray-200 dark:bg-gray-100/10"></div>
          <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-100/10"></div>
        </div>
        <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-gray-100/10"></div>
      </div>
      {Row}
      {Row}
      {Row}
      {Row}
      {Row}
      {Row}
    </div>
  );
}

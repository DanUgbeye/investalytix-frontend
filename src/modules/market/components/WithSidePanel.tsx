import EconomicEvent from "@/modules/market/components/EconomicEvent";
import SidePanel from "./SidePanel";
import Watchlist from "./Watchlist";

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
  children,
  sections = SIDE_SECTIONS["ALL"],
}: Readonly<{
  children: React.ReactNode;
  sections?: SIDE_SECTIONS[] | SIDE_SECTIONS;
}>) {
  return (
    <>
      <div>{children}</div>

      <div className="grid gap-14 border-[#DCDCDC] py-10 md:grid-cols-2 xl:grid-cols-3 dark:border-white/10">
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["HOT_PICKS"])) && (
          <SidePanel
            title="hot picks"
            url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/market/losers`}
          />
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["GAINERS"])) && (
          <SidePanel
            title="gainers"
            url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/market/gainers`}
          />
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["LOSERS"])) && (
          <SidePanel
            title="losers"
            url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/market/losers`}
          />
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["CURRENCIES"])) && (
          <SidePanel
            title="currencies"
            url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/market/losers`}
          />
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["CRYPTOCURRENCY"])) && (
          <SidePanel
            title="cryptocurrency"
            url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/market/losers`}
          />
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["SECTOR_PERFORMANCE"])) && (
          <SidePanel
            title="sector performance"
            url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/market/losers`}
          />
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["INSIDER_TRADING"])) && (
          <SidePanel
            title="insinder trading"
            url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/market/losers`}
          />
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["WATCHLIST"])) && <Watchlist />}
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

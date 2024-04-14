import Overview from "@/app/Overview";
import EconomicEvent from "@/app/EconomicEvent";

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
    <div className="grid md:grid-cols-[1fr,350px]">
      <div>{children}</div>

      <div className="flex flex-col gap-14 border-[#DCDCDC] py-10 md:ml-5 md:border-l md:pl-5 dark:border-[#D9D9D9]">
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["HOT_PICKS"])) && <Overview />}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["GAINERS"])) && <Overview />}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["LOSERS"])) && <Overview />}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["CURRENCIES"])) && <Overview />}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["CRYPTOCURRENCY"])) && <Overview />}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["SECTOR_PERFORMANCE"])) && (
          <Overview />
        )}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["INSIDER_TRADING"])) && <Overview />}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["WATCHLIST"])) && <Overview />}
        {(sections == SIDE_SECTIONS["ALL"] ||
          sections.includes(SIDE_SECTIONS["TOP_ECONOMIC_EVENT"])) && (
          <EconomicEvent />
        )}
        {sections.includes(SIDE_SECTIONS["TRENDING_NOW"]) && <EconomicEvent />}
      </div>
    </div>
  );
}

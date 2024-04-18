"use client";
import MarketHeader from "@/modules/market/components/MarketHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GovernmentDebtToGDPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const markets = [
    {
      label: "SUMMARY",
      href: "/markets/economy/government/government-debt-to-gdp/summary",
    },
    {
      label: "STATS",
      href: "/markets/economy/government/government-debt-to-gdp/stats",
    },
    {
      label: "FORECAST",
      href: "/markets/economy/government/government-debt-to-gdp/forecast",
    },
  ];
  const pathname = usePathname();

  // TODO: change the name based on the route being rendered
  return (
    <>
      <MarketHeader
        name="UNITED States - gross federal debt to gdp"
        active="ECONOMY"
      />

      <div className="mx-auto mb-14 flex w-full justify-between gap-4 overflow-auto px-14 py-5 md:w-fit">
        {markets.map((market, index) => (
          <Link
            key={market.href}
            href={market.href}
            className={`whitespace-nowrap rounded px-5 py-3 text-center hover:bg-primary-base hover:text-white focus:bg-primary-base focus:text-white ${
              market.href === pathname
                ? "bg-primary-base text-white"
                : "bg-transparent text-[#636363] white-text"
            }`}
          >
            {market.label}
          </Link>
        ))}
      </div>
      {children}
    </>
  );
}

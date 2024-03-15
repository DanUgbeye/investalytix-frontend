"use client";
import MarketHeader from "@/modules/markets/MarketHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CommoditiesTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const markets = [
    { label: "ENERGY", href: "/markets/commodities/energy" },
    { label: "METALS", href: "/markets/commodities/metals" },
    { label: "AGRICULTURE", href: "/markets/commodities/agriculture" },
    { label: "LIVESTOCK", href: "/markets/commodities/livestock" },
    { label: "INDEX FUTURES", href: "/markets/commodities/index-futures" },
    {
      label: "INTEREST RATE FURTURES",
      href: "/markets/commodities/interest-rate-futures",
    },
    {
      label: "CURRENCY FUTURES",
      href: "/markets/commodities/currency-futures",
    },
  ];
  const pathname = usePathname();
  return (
    <>
      <div>
        <MarketHeader name="FUTURES & COMMODITIES" active="COMMODITIES" />

        <div className="mb-14 flex justify-between gap-4 overflow-auto px-14 py-5">
          {markets.map((market, index) => (
            <Link
              key={market.href}
              href={market.href}
              className={`whitespace-nowrap rounded px-5 py-3 text-center hover:bg-primary-base hover:text-white focus:bg-primary-base focus:text-white ${
                market.href === pathname
                  ? "bg-primary-base text-white"
                  : "bg-transparent dark:text-white text-[#636363]"
              }`}
            >
              {market.label}
            </Link>
          ))}
        </div>
      </div>

      {children}
    </>
  );
}

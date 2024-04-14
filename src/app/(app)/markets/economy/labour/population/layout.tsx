"use client";
import MarketHeader from "@/modules/market/components/MarketHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UnemploymentRateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const markets = [
    {
      label: "WORLD",
      href: "/markets/economy/labour/population/world",
    },
    {
      label: "EUROPE",
      href: "/markets/economy/labour/population/europe",
    },
    {
      label: "AMERICA",
      href: "/markets/economy/labour/population/america",
    },
    {
      label: "ASIA",
      href: "/markets/economy/labour/population/asia",
    },
    {
      label: "AFRICA",
      href: "/markets/economy/labour/population/africa",
    },
    {
      label: "AUSTRALIA",
      href: "/markets/economy/labour/population/australia",
    },
    {
      label: "G20",
      href: "/markets/economy/labour/population/g20",
    },
  ];
  const pathname = usePathname();

  // TODO: change the name based on the route being rendered
  return (
    <>
      <MarketHeader name="UNITED STATES POPULATION" active="ECONOMY" />

      <div className="mx-auto mb-14 flex w-full justify-between gap-4 overflow-auto px-14 py-5 md:w-fit">
        {markets.map((market, index) => (
          <Link
            key={market.href}
            href={market.href}
            className={`whitespace-nowrap rounded px-5 py-3 text-center hover:bg-primary-base hover:text-white focus:bg-primary-base focus:text-white ${
              market.href === pathname
                ? "bg-primary-base text-white"
                : "bg-transparent text-[#636363] dark:text-white"
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

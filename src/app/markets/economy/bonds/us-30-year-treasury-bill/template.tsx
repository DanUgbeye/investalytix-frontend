"use client";
import MarketHeader from "@/modules/markets/MarketHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function US30Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const markets = [
    {
      label: "SUMMARY",
      href: "/markets/economy/bonds/us-30-year-treasury-bill/summary",
    },
    {
      label: "STATS",
      href: "/markets/economy/bonds/us-30-year-treasury-bill/stats",
    },
    {
      label: "FORECAST",
      href: "/markets/economy/bonds/us-30-year-treasury-bill/forecast",
    },
    {
      label: "ALERTS",
      href: "/markets/economy/bonds/us-30-year-treasury-bill/alerts",
    },
  ];
  const pathname = usePathname();

  // TODO: change the name based on the route being rendered
  return (
    <>
      <MarketHeader name="U.S 30 YEAR TREASURY BILL" active="ECONOMY" />

      <div className="mb-14 w-full md:w-fit mx-auto flex justify-between gap-4 overflow-auto px-14 py-5">
        {markets.map((market, index) => (
          <Link
            key={market.href}
            href={market.href}
            className={`whitespace-nowrap rounded px-5 py-3 text-center hover:bg-primary-base hover:text-white focus:bg-primary-base focus:text-white ${
              market.href === pathname
                ? "bg-primary-base text-white"
                : "bg-transparent text-[#636363]"
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

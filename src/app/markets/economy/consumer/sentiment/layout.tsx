"use client";
import MarketHeader from "@/modules/markets/MarketHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SentimentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const markets = [
    {
      label: "SUMMARY",
      href: "/markets/economy/consumer/sentiment/summary",
    },
    {
      label: "STATS",
      href: "/markets/economy/consumer/sentiment/stats",
    },
    {
      label: "FORECAST",
      href: "/markets/economy/consumer/sentiment/forecast",
    },
  ];
  const pathname = usePathname();

  // TODO: change the name based on the route being rendered
  return (
    <>
      <MarketHeader
        name="United States Michigan Consumer Sentiment"
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

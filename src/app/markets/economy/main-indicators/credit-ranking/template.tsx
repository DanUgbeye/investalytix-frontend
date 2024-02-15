"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GDPGrowthRateByCountryTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const markets = [
    { label: "WORLD", href: "/markets/economy/main-indicators/credit-ranking" },
    { label: "EUROPE", href: "/markets/economy/main-indicators/credit-ranking/europe" },
    { label: "AMERICA", href: "/markets/economy/main-indicators/credit-ranking/america" },
    { label: "ASIA", href: "/markets/economy/main-indicators/credit-ranking/asia" },
    { label: "AFRICA", href: "/markets/economy/main-indicators/credit-ranking/africa" },
    {
      label: "AUSTRALIA",
      href: "/markets/economy/main-indicators/credit-ranking/australia",
    },
    { label: "G20", href: "/markets/economy/main-indicators/credit-ranking/g20" },
  ];
  const pathname = usePathname();
  return (
    <>
      <div className="mb-14 flex justify-between gap-4 overflow-auto px-14 py-5">
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

"use client";
import MarketHeader from "@/modules/markets/MarketHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EconomyTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
//   const markets = [];
//   const pathname = usePathname();
  return (
    <>
      <MarketHeader name="ECONOMY" active="ECONOMY" />

      {/* <div className="mb-14 flex justify-between gap-4 overflow-auto px-14 py-5">
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
        </div> */}

      {children}
    </>
  );
}

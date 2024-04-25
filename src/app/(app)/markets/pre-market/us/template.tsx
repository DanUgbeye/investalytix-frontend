"use client";
import MarketSelector from "@/modules/market/components/PreMarket/MarketSelector";
import MarketHeader from "@/modules/market/components/MarketHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function USMarketTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const markets = [
    { label: "MARKET MOVERS", href: "/markets/pre-market/us/market-movers" },
    { label: "DOW 30", href: "/markets/pre-market/us/dow-30" },
    { label: "NASDAQ 100", href: "/markets/pre-market/us/nasdaq-100" },
    { label: "SECTORS", href: "/markets/pre-market/us/sectors" },
  ];

  const pathname = usePathname();
  return (
    <>
      <div>
        <MarketHeader name="US MARKET" active="PRE-MKT" />

        <MarketSelector active="U.S" />

        <div className="mx-auto mb-14 flex justify-center items-center gap-5 p-3 overflow-auto">
          {markets.map((market, index) => (
            <>
              <Link
                key={market.href}
                href={market.href}
                className={`text-sm font-bold whitespace-nowrap ${market.href === pathname ? "text-primary-base" : ""}`}
              >
                {market.label}
              </Link>
              {index !== markets.length - 1 && (
                <p className="text-sm font-bold">|</p>
              )}
            </>
          ))}
        </div>
      </div>

      {children}
    </>
  );
}

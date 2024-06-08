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
    { label: "MARKET MOVERS", href: "#market-movers" },
    { label: "DOW 30", href: "#dow-30" },
    { label: "NASDAQ 100", href: "#nasdaq-100" },
    { label: "SECTORS", href: "#sectors" },
  ];

  const pathname = usePathname();
  return (
    <>
      <div>
        <MarketHeader name="US MARKET" active="PRE-MKT" />

        <MarketSelector active="U.S" />

        <div className="mx-auto mb-14 flex items-center justify-center gap-5 overflow-auto p-3">
          {markets.map((market, index) => (
            <>
              <Link
                key={market.href}
                href={market.href}
                className={`text-hover-focus whitespace-nowrap text-sm font-bold ${market.href === pathname ? "text-primary-base" : ""}`}
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

"use client";
import MarketHeader from "@/modules/markets/MarketHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FXTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const markets = [
    { label: "AMERICAS FX", href: "/markets/fx/america" },
    { label: "ASIA FX", href: "/markets/fx/asia" },
    { label: "EUR FX", href: "/markets/fx/europe" },
  ];

  const pathname = usePathname();
  return (
    <>
      <div>
        <MarketHeader name="CURRENCIES" active="FX" />

        <div className="mx-auto mb-14 flex w-fit items-center gap-5  p-3">
          {markets.map((market, index) => (
            <>
              <Link
                key={market.href}
                href={market.href}
                // className={`text-sm font-bold`}
                className={`text-sm font-bold ${market.href === pathname ? "text-primary-base" : ""}`}
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

"use client";
import MarketHeader from "@/modules/markets/MarketHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BondsTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const markets = [
    { label: "TREASURY", href: "/markets/bonds/treasury" },
    { label: "U.K", href: "/markets/bonds/uk" },
    { label: "GERMANY", href: "/markets/bonds/germany" },
    { label: "ITALY", href: "/markets/bonds/italy" },
    { label: "FRANCE", href: "/markets/bonds/france" },
    {
      label: "JAPAN",
      href: "/markets/bonds/japan",
    },
    {
      label: "AUSTRALIA",
      href: "/markets/bonds/australia",
    },
    {
      label: "CANADA",
      href: "/markets/bonds/canada",
    },
    {
      label: "BRAZIL",
      href: "/markets/bonds/brazil",
    },
  ];
  const pathname = usePathname();
  return (
    <>
      <div>
        <MarketHeader name="BONDS" active="BONDS" />

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
      </div>

      {children}
    </>
  );
}

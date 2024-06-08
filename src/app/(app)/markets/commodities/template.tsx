"use client";
import MarketHeader from "@/modules/market/components/MarketHeader";
import MarketSelector from "@/modules/market/components/MarketSelector";
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
      <MarketHeader name="FUTURES & COMMODITIES" active="COMMODITIES" />

      <MarketSelector selectors={markets} className="mb-14" active={pathname}/>

      {children}
    </>
  );
}

"use client";
import MarketHeader from "@/modules/market/components/MarketHeader";
import MarketSelector from "@/modules/market/components/MarketSelector";
import MarketSubLinks from "@/modules/market/components/MarketSubLinks";
import { usePathname } from "next/navigation";
import data from "./data";
export default function CommoditiesTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <>
      <MarketHeader name="FUTURES & COMMODITIES" active="COMMODITIES" />

      {children}
    </>
  );
}

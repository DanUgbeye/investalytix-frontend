"use client";
import MarketHeader from "@/modules/markets/MarketHeader";
import { usePathname } from "next/navigation";

export default function EconomyTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // TODO: change the name based on the route being rendered
  return (
    <>
      <MarketHeader name="ECONOMY" active="ECONOMY" />

      {children}
    </>
  );
}

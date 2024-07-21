"use client";
import MarketHeader from "@/modules/market/components/MarketHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function JoblessClaimsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MarketHeader name="Initial Jobless Claims" active="ECONOMY" />

      {children}
    </>
  );
}

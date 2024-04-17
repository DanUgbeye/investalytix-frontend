"use client";
import MarketHeader from "@/modules/market/components/MarketHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // TODO: change the name based on the route being rendered
  return (
    <>
      <MarketHeader name="CALENDAR" active="ECONOMY" />

      {children}
    </>
  );
}

"use client";
import MarketHeader from "@/modules/market/components/MarketHeader";

export default function SentimentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MarketHeader
        name="Consumer Sentiment"
        active="ECONOMY"
      />

      {children}
    </>
  );
}

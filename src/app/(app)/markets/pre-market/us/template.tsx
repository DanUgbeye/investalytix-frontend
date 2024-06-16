import MarketSelector from "@/modules/market/components/MarketSelector";
import MarketHeader from "@/modules/market/components/MarketHeader";
import MarketSubLinks from "@/modules/market/components/MarketSubLinks";

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

  const marketSelectors = [
    { label: "U.S", href: "/markets/pre-market/us" },
    { label: "AMERICAS", href: "/markets/pre-market/americas" },
  ] as const;

  return (
    <>
      <MarketHeader name="US MARKET" active="PRE-MKT" />

      <MarketSelector
        active="U.S"
        selectors={marketSelectors}
        className="mb-6"
      />

      <MarketSubLinks markets={markets} />

      {children}
    </>
  );
}

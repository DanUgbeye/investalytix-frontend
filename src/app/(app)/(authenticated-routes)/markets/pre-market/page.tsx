import Link from "next/link";
import MarketHeader from "@/modules/market/components/MarketHeader";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import PreMarket from "@/modules/market/components/PreMarket";
import MarketSelector from "@/modules/market/components/MarketSelector";

export default function PreMarketPage() {
  const marketSelectors = [
    { label: "U.S", href: "/markets/pre-market/us" },
    { label: "AMERICAS", href: "/markets/pre-market/americas" },
  ] as const;

  return (
    <main>
      <MarketHeader name="PRE-MARKET DATA" active="PRE-MKT" />

      <MarketSelector selectors={marketSelectors} className="mb-6" />

      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <PreMarket />
      </WithSidePanel>
    </main>
  );
}

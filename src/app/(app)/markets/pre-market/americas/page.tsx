import Americas from "@/modules/market/components/PreMarket/Americas";
import MarketHeader from "@/modules/market/components/MarketHeader";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import MarketSelector from "@/modules/market/components/MarketSelector";

export default function AmericasPage() {
  const marketSelectors = [
    { label: "U.S", href: "/markets/pre-market/us" },
    { label: "AMERICAS", href: "/markets/pre-market/americas" },
  ] as const;
  return (
    <main>
      <MarketHeader name="Americas MARKET" active="PRE-MKT" />

      <MarketSelector
        active="AMERICAS"
        selectors={marketSelectors}
        className="mb-6"
      />

      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <Americas />
      </WithSidePanel>
    </main>
  );
}

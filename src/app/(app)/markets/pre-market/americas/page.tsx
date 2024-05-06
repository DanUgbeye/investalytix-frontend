import Americas from "@/modules/market/components/PreMarket/Americas";
import MarketHeader from "@/modules/market/components/MarketHeader";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import MarketSelector from "@/modules/market/components/PreMarket/MarketSelector";

export default function AmericasPage() {
  return (
    <main>
      <MarketHeader name="US MARKET" active="PRE-MKT" />

      <MarketSelector active="AMERICAS" />

      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <Americas />
      </WithSidePanel>
    </main>
  );
}

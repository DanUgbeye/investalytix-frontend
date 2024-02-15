import Americas from "@/modules/markets/PreMarket/Americas";
import MarketHeader from "../../../../modules/markets/MarketHeader";
import WithSidePanel, { SIDE_SECTIONS } from "../../../../modules/markets/WithSidePanel";
import MarketSelector from "@/modules/markets/PreMarket/MarketSelector";

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

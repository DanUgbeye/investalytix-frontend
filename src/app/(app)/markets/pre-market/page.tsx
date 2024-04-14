import Link from "next/link";
import MarketHeader from "@/modules/market/components/MarketHeader";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import PreMarket from "@/modules/market/components/PreMarket";
import MarketSelector from "@/modules/market/components/PreMarket/MarketSelector";

export default function PreMarketPage() {
  return (
    <main>
      <MarketHeader name="PRE-MARKET DATA" active="PRE-MKT" />

      <MarketSelector />

      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <PreMarket />
      </WithSidePanel>
    </main>
  );
}

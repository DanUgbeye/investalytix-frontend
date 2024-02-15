import Link from "next/link";
import MarketHeader from "../../../modules/markets/MarketHeader";
import WithSidePanel, { SIDE_SECTIONS } from "../../../modules/markets/WithSidePanel";
import PreMarket from "@/modules/markets/PreMarket";
import MarketSelector from "@/modules/markets/PreMarket/MarketSelector";

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

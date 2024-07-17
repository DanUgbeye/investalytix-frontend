import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import data from "./data";
import MarketHeader from "@/modules/market/components/MarketHeader";
import Screen from "./screen";

export default function BondsPage() {
  return (
    <>
      <MarketHeader name="BONDS" active="BONDS" />

      {/* <MarketSubLinks markets={data.markets} /> */}
      <main>
        <Screen />
      </main>
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]} />
    </>
  );
}

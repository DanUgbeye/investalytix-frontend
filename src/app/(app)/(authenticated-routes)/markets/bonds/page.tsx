import Bonds from "@/modules/market/components/Bonds";
import MarketSubLinks from "@/modules/market/components/MarketSubLinks";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import data from "./data";
import MarketHeader from "@/modules/market/components/MarketHeader";

export default function BondsPage() {
  return (
    <>
      <MarketHeader name="BONDS" active="BONDS" />

      {/* <MarketSubLinks markets={data.markets} /> */}
      <main>
        <Bonds />
      </main>
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]} />
    </>
  );
}

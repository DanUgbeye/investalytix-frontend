import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import MarketHeader from "@/modules/market/components/MarketHeader";
import Market from "@/modules/market/components/Market/Market";
import TrendingNow from "@/modules/market/components/Market/TrendingNow";

export default function MarketPage() {
  return (
    <main>
      <MarketHeader name="MARKET" />

      <Market />
      <WithSidePanel sections={SIDE_SECTIONS["ALL"]} />

      {/* TRENDING NOW */}
      {/* <TrendingNow /> */}
    </main>
  );
}

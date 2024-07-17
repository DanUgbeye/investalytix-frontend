import MarketSubLinks from "@/modules/market/components/MarketSubLinks";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import data from "./data";
import Screen from "./screen";

export default function CommoditiesPage() {
  return (
    <>
      <MarketSubLinks
        markets={[...data.selectors, ...data.markets]}
        className="mb-10"
      />
      <Screen />
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]} />
    </>
  );
}

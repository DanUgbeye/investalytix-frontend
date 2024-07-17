import Commodities from "@/modules/market/components/Commodities";
import MarketSubLinks from "@/modules/market/components/MarketSubLinks";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import data from "./data";

export default function CommoditiesPage() {
  return (
    <>
      <MarketSubLinks
        markets={[...data.selectors, ...data.markets]}
        className="mb-10"
      />
      <Commodities />
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]} />
    </>
  );
}

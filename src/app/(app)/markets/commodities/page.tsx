import Commodities from "@/modules/market/components/Commodities";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/market/components/WithSidePanel";

export default function CommoditiesPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Commodities />
    </WithSidePanel>
  );
}

import Commodities from "@/modules/markets/Commodities";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";

export default function CommoditiesPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Commodities />
    </WithSidePanel>
  );
}

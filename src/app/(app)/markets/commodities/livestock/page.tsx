import Livestock from "@/modules/markets/Commodities/Livestock";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";
export default function LivestockPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Livestock />
    </WithSidePanel>
  );
}

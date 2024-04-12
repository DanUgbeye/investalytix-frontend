import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";
import Sectors from "@/modules/markets/PreMarket/US/Sectors";

export default function SectorsPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Sectors />
    </WithSidePanel>
  );
}

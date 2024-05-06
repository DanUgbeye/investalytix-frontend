import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import Sectors from "@/modules/market/components/PreMarket/US/Sectors";

export default function SectorsPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Sectors />
    </WithSidePanel>
  );
}

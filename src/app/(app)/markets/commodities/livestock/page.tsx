import Livestock from "@/modules/market/components/Commodities/Livestock";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
export default function LivestockPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Livestock />
    </WithSidePanel>
  );
}

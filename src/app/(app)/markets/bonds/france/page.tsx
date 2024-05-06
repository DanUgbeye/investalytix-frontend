import France from "@/modules/market/components/Bonds/France";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";

export default function FrancePage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <France />
    </WithSidePanel>
  );
}

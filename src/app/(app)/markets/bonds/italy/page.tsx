import Italy from "@/modules/market/components/Bonds/Italy";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/market/components/WithSidePanel";

export default function ItalyPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Italy />
    </WithSidePanel>
  );
}

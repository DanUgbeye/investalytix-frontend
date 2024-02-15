import Italy from "@/modules/markets/Bonds/Italy";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";

export default function ItalyPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Italy />
    </WithSidePanel>
  );
}

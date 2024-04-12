import France from "@/modules/markets/Bonds/France";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";

export default function FrancePage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <France />
    </WithSidePanel>
  );
}

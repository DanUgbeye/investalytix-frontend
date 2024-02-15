import Japan from "@/modules/markets/Bonds/Japan";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";

export default function JapanPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Japan />
    </WithSidePanel>
  );
}

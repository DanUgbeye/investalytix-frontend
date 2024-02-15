import Australia from "@/modules/markets/Bonds/Australia";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";

export default function AustraliaPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Australia />
    </WithSidePanel>
  );
}

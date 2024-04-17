import Australia from "@/modules/market/components/Bonds/Australia";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/market/components/WithSidePanel";

export default function AustraliaPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Australia />
    </WithSidePanel>
  );
}

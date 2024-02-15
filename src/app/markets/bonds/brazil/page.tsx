import Brazil from "@/modules/markets/Bonds/Brazil";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";

export default function BrazilPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Brazil />
    </WithSidePanel>
  );
}

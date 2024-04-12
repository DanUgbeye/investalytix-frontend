import Treasury from "@/modules/markets/Bonds/Treasury";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";

export default function TreasuryPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Treasury />
    </WithSidePanel>
  );
}

import Germany from "@/modules/markets/Bonds/Germany";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";

export default function GermanyPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Germany />
    </WithSidePanel>
  );
}

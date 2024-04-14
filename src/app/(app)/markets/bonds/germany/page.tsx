import Germany from "@/modules/market/components/Bonds/Germany";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/market/components/WithSidePanel";

export default function GermanyPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Germany />
    </WithSidePanel>
  );
}

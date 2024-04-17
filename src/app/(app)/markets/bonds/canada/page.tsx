import Canada from "@/modules/market/components/Bonds/Canada";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/market/components/WithSidePanel";

export default function CanadaPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Canada />
    </WithSidePanel>
  );
}

import Canada from "@/modules/markets/Bonds/Canada";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";

export default function CanadaPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Canada />
    </WithSidePanel>
  );
}

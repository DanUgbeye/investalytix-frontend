import UK from "@/modules/markets/Bonds/UK";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";

export default function UKPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <UK />
    </WithSidePanel>
  );
}

import UK from "@/modules/market/components/Bonds/UK";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";

export default function UKPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <UK />
    </WithSidePanel>
  );
}

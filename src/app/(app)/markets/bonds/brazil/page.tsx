import Brazil from "@/modules/market/components/Bonds/Brazil";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";

export default function BrazilPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Brazil />
    </WithSidePanel>
  );
}

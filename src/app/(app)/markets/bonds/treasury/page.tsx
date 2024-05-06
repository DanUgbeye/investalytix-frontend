import Treasury from "@/modules/market/components/Bonds/Treasury";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";

export default function TreasuryPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Treasury />
    </WithSidePanel>
  );
}

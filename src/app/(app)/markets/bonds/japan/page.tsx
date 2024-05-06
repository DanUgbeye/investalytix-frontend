import Japan from "@/modules/market/components/Bonds/Japan";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";

export default function JapanPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Japan />
    </WithSidePanel>
  );
}

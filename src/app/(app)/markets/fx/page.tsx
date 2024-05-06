import FX from "@/modules/market/components/FX";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";

export default function FXPage() {
  return (
    <main>
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <FX />
      </WithSidePanel>
    </main>
  );
}

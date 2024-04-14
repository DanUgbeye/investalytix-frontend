import AmericasFX from "@/modules/market/components/FX/AmericasFX";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";

export default function AmericaPage() {
  return (
    <main>
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <AmericasFX />
      </WithSidePanel>
    </main>
  );
}

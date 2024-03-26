import AmericasFX from "@/modules/markets/FX/AmericasFX";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "../../../../modules/markets/WithSidePanel";

export default function AmericaPage() {
  return (
    <main>
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <AmericasFX />
      </WithSidePanel>
    </main>
  );
}

import EuropeFX from "@/modules/markets/FX/EuropeFX";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "../../../../modules/markets/WithSidePanel";

export default function EuropePage() {
  return (
    <main>
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <EuropeFX />
      </WithSidePanel>
    </main>
  );
}

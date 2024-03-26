import AsiaFX from "@/modules/markets/FX/AsiaFX";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "../../../../modules/markets/WithSidePanel";

export default function AsiaPage() {
  return (
    <main>
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <AsiaFX />
      </WithSidePanel>
    </main>
  );
}

import AsiaFX from "@/modules/market/components/FX/AsiaFX";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";

export default function AsiaPage() {
  return (
    <main>
      <AsiaFX />
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]} />
    </main>
  );
}

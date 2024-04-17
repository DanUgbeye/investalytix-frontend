import EuropeFX from "@/modules/market/components/FX/EuropeFX";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/market/components/WithSidePanel";

export default function EuropePage() {
  return (
    <main>
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <EuropeFX />
      </WithSidePanel>
    </main>
  );
}

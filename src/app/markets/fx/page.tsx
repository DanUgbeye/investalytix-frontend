import FX from "@/modules/markets/FX";
import WithSidePanel, { SIDE_SECTIONS } from "../../../modules/markets/WithSidePanel";

export default function FXPage() {
  return (
    <main>
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <FX />
      </WithSidePanel>
    </main>
  );
}

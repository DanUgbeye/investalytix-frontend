import Bonds from "@/modules/markets/Bonds";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";

export default function BondsPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <main>
        <Bonds />
      </main>
    </WithSidePanel>
  );
}

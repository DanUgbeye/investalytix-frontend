import Bonds from "@/modules/market/components/Bonds";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";

export default function BondsPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <main>
        <Bonds />
      </main>
    </WithSidePanel>
  );
}

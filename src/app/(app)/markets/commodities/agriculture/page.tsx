import Agriculture from "@/modules/market/components/Commodities/Agriculture";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/market/components/WithSidePanel";

export default function AgriculturePage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Agriculture />
    </WithSidePanel>
  );
}

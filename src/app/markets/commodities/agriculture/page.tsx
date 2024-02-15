import Agriculture from "@/modules/markets/Commodities/Agriculture";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";

export default function AgriculturePage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Agriculture />
    </WithSidePanel>
  );
}

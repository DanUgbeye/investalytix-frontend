import WithSidePanel, { SIDE_SECTIONS } from "@/modules/market/components/WithSidePanel";
import NASDAQ100 from "@/modules/market/components/PreMarket/US/NASDAQ100";

export default function NASDAQ100Page() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <NASDAQ100 />
    </WithSidePanel>
  );
}

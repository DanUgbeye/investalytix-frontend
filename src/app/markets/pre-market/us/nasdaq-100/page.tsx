import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";
import NASDAQ100 from "@/modules/markets/PreMarket/US/NASDAQ100";

export default function NASDAQ100Page() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <NASDAQ100 />
    </WithSidePanel>
  );
}

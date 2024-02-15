import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";
import Dow30 from "@/modules/markets/PreMarket/US/Dow30";

export default function Dow30Page() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <Dow30 />
    </WithSidePanel>
  );
}

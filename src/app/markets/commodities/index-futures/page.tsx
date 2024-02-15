import IndexFutures from "@/modules/markets/Commodities/IndexFutures";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";
export default function IndexFuturesPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <IndexFutures />
    </WithSidePanel>
  );
}

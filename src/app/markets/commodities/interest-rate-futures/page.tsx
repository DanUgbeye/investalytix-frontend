import IntrestRateFutures from "@/modules/markets/Commodities/IntrestRateFutures";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";
export default function InterestRateFuturesPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <IntrestRateFutures />
    </WithSidePanel>
  );
}

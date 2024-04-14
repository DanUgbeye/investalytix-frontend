import IntrestRateFutures from "@/modules/market/components/Commodities/IntrestRateFutures";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/market/components/WithSidePanel";
export default function InterestRateFuturesPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <IntrestRateFutures />
    </WithSidePanel>
  );
}

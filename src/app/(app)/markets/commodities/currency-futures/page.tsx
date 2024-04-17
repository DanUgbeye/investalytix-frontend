import CurrencyFutures from "@/modules/market/components/Commodities/CurrencyFutures";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/market/components/WithSidePanel";

export default function CurrencyFuturesPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <CurrencyFutures />
    </WithSidePanel>
  );
}

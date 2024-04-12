import CurrencyFutures from "@/modules/markets/Commodities/CurrencyFutures";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";

export default function CurrencyFuturesPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <CurrencyFutures />
    </WithSidePanel>
  );
}

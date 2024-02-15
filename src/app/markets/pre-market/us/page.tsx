import USMarkets from "@/modules/markets/PreMarket/US";
import WithSidePanel, { SIDE_SECTIONS } from "../../../../modules/markets/WithSidePanel";

export default function USPage() {
  return (
    <main>
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <USMarkets />
      </WithSidePanel>
    </main>
  );
}

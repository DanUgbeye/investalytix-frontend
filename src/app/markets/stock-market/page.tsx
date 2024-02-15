import StockMarket from "@/modules/markets/StockMarket";
import WithSidePanel, { SIDE_SECTIONS } from "../../../modules/markets/WithSidePanel";
import MarketHeader from "../../../modules/markets/MarketHeader";

export default function StockMarketPage() {
  return (
    <main>
      <MarketHeader active="STOCK MARKET" name="STOCK MARKET" />
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <StockMarket />
      </WithSidePanel>
    </main>
  );
}

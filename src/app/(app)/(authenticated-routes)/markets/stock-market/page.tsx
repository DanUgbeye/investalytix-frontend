import StockMarket from "@/modules/market/components/StockMarket";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import MarketHeader from "@/modules/market/components/MarketHeader";

export default function StockMarketPage() {
  return (
    <main>
      <MarketHeader active="STOCK MARKET" name="STOCK MARKET" />
      <StockMarket />
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]} />
    </main>
  );
}

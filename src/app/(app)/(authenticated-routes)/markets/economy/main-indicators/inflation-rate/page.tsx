import InflationRate from "@/modules/market/components/Economy/MainIndicators/InflationRate";
import InterestRate from "@/modules/market/components/Economy/MainIndicators/InterestRate";
import MarketHeader from "@/modules/market/components/MarketHeader";

export default function InterestRatePage() {
  return (
    <main>
      <MarketHeader name="INFLATION RATE" active="ECONOMY" />
      <InflationRate />
    </main>
  );
}

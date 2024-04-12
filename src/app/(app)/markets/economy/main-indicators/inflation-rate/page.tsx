import InterestRate from "@/modules/markets/Economy/MainIndicators/InterestRate";
import MarketHeader from "@/modules/markets/MarketHeader";

export default function InterestRatePage() {
  return (
    <main>
      <MarketHeader name="INFLATION RATE" active="ECONOMY" />
      <InterestRate />
    </main>
  );
}

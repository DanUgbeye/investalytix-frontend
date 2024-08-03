import MarketHeader from "@/modules/market/components/MarketHeader";
import Screen from "./screen";

export default function InterestRatePage() {
  return (
    <main>
      <MarketHeader name="INFLATION RATE" active="ECONOMY" />
      <Screen />
    </main>
  );
}

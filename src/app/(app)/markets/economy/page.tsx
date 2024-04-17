import Economy from "@/modules/market/components/Economy";
import MarketHeader from "@/modules/market/components/MarketHeader";

export default function EconomyPage() {
  return (
    <>
      <MarketHeader name="ECONOMY" active="ECONOMY" />
      <main>
        <Economy />
      </main>
    </>
  );
}

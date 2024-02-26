import Economy from "@/modules/markets/Economy";
import MarketHeader from "@/modules/markets/MarketHeader";

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

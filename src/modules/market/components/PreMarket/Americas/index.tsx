import Quotes from "@/modules/market/components/Quotes";
import MarketHeading from "../../MarketHeading";
import Currencies from "../../Currencies";
import StockIndexes from "../../StockIndexes";
import Treasurys from "../../Treasurys";

export default function Americas() {
  return (
    <section>
      {/* STOCK INDEXES */}
      <StockIndexes />

      {/* CURRENCIES */}
      <Currencies className="mt-11" />

      {/* BONDS & RATES */}
      <Treasurys className="mt-11"/>
    </section>
  );
}

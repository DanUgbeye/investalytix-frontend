import Quotes from "@/modules/market/components/Quotes";
import MarketHeading from "../../MarketHeading";
import Bonds from "../../Bonds";
import Currencies from "../../Currencies";
import StockIndexes from "../../StockIndexes";

export default function Americas() {
  return (
    <section>
      {/* STOCK INDEXES */}
      <StockIndexes />

      {/* CURRENCIES */}
      <Currencies className="mt-11" />

      {/* BONDS & RATES */}
      <Bonds className="mt-11" />
    </section>
  );
}

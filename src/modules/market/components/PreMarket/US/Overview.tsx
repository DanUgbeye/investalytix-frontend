import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import Quotes from "@/modules/market/components/Quotes";
import MarketHeading from "../../MarketHeading";
import Commodities from "../../Commodities";
import Currencies from "../../Currencies";
import StockIndexes from "../../StockIndexes";
import Treasurys from "../../Treasurys";

export default function Overview() {
  return (
    <section className="grid gap-x-20 gap-y-11 lg:grid-cols-2">
      {/* <section>

      <MarketSectionHeader label="OVERVIEW" id="overview" />
      <Quotes />
      </section> */}

      {/* STOCK INDEXES */}
      {/* <section className="">
        <MarketHeading label="STOCK INDEXES" />

        <Quotes />
      </section> */}
      <StockIndexes />

      {/* COMMODITIES */}
      <Commodities />

      {/* TREASURYS */}
      <Treasurys />

      {/* CURRENCIES */}
      <Currencies id="currencies" />
    </section>
  );
}

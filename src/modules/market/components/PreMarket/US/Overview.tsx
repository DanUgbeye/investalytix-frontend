import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import Quotes from "@/modules/market/components/Quotes";
import MarketHeading from "../../MarketHeading";
import Commodities from "../../Commodities";
import Currencies from "../../Currencies";

export default function Overview() {
  return (
    <section className="grid gap-x-20 gap-y-11 lg:grid-cols-2">
      {/* <section>

      <MarketSectionHeader label="OVERVIEW" id="overview" />
      <Quotes />
      </section> */}

      {/* STOCK INDEXES */}
      <section className="">
        <MarketHeading label="STOCK INDEXES" />

        <Quotes />
      </section>

      {/* COMMODITIES */}
      <Commodities />

      {/* TREASURYS */}
      <section>
        <MarketHeading label="TREASURYS" />

        <Quotes />
      </section>

      {/* CURRENCIES */}
      <Currencies id="currencies" />
    </section>
  );
}

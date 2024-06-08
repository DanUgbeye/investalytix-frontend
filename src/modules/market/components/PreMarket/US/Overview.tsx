import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import Quotes from "@/modules/market/components/Quotes";
import MarketHeading from "../../MarketHeading";

export default function Overview() {
  return (
    <section>
      <MarketSectionHeader label="OVERVIEW" id="overview" />
      <Quotes />

      {/* STOCK INDEXES */}
      <section className="mt-11">
        <MarketHeading label="STOCK INDEXES" />

        <Quotes />
      </section>

      {/* COMMODITIES */}
      <section className="mt-11">
        <MarketHeading label="COMMODITIES" />

        <Quotes />
      </section>

      {/* TREASURYS */}
      <section className="mt-11">
        <MarketHeading label="TREASURYS" />

        <Quotes />
      </section>

      {/* CURRENCIES */}
      <section className="mt-11" id="currencies">
        <MarketHeading label="CURRENCIES" />

        <Quotes />
      </section>
    </section>
  );
}

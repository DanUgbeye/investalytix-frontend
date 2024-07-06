import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import Quotes from "@/modules/market/components/Quotes";
import MarketHeading from "../../MarketHeading";

export default function Overview() {
  return (
    <section className="grid gap-x-20 lg:grid-cols-2">
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
      <section className="">
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

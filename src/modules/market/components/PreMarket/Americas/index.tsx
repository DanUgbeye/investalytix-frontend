import Quotes from "@/modules/market/components/Quotes";
import MarketHeading from "../../MarketHeading";

export default function Americas() {
  return (
    <section>
      {/* STOCK INDEXES */}
      <section className="">
        <MarketHeading label="STOCK INDEXES" />

        <Quotes />
      </section>

      {/* CURRENCIES */}
      <section className="mt-11">
        <MarketHeading label="CURRENCIES" />

        <Quotes />
      </section>

      {/* BONDS & RATES */}
      <section className="mt-11">
        <MarketHeading label="BONDS & RATES" />

        <Quotes />
      </section>
    </section>
  );
}

import Quotes from "@/modules/market/components/Quotes";
import MarketHeading from "../../MarketHeading";
import Bonds from "../../Bonds";
import Currencies from "../../Currencies";

export default function Americas() {
  return (
    <section>
      {/* STOCK INDEXES */}
      <section className="">
        <MarketHeading label="STOCK INDEXES" />

        <Quotes />
      </section>

      {/* CURRENCIES */}
      <Currencies className="mt-11" />

      {/* BONDS & RATES */}
      <Bonds className="mt-11" />
    </section>
  );
}

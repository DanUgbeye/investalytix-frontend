import Quotes from "@/modules/market/components/Quotes";
import FearAndGreed from "./FearAndGreed";
import InvestorSentiment from "./InvestorSentiment";
import MarketHeading from "../MarketHeading";
import Commodities from "../Commodities";
import Currencies from "../Currencies";
import Treasurys from "../Treasurys";

export default function StockMarket() {
  return (
    <div className="">
      <Quotes />

      {/*  STOCK INDEXES */}
      <section className="mt-8">
        <MarketHeading label="STOCK INDEXES" />

        <Quotes />
      </section>

      {/* TODO: FEAR & GREED INDEX */}
      <section className="mt-8">
        <FearAndGreed />
      </section>

      {/* TODO: INVESTOR SENTIMENT */}
      <section className="mt-8">
        <InvestorSentiment />
      </section>

      {/* COMMODITIES */}
      <Commodities className="mt-8" />

      {/* TREASURYS */}
      <Treasurys className="mt-8" />
      {/* <section className="mt-8">
        <MarketHeading label="TREASURYS" />

        <Quotes
          fields={[
            { label: "symbol", key: "symbol" },
            { label: "yield", key: "change" },
            { label: "chg", key: "changesPercentage" },
          ]}
        />
      </section> */}

      {/* CURRENCIES */}
      <Currencies className="mt-8" />
    </div>
  );
}

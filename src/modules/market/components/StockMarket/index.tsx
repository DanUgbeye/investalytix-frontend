"use client";
import Quotes from "@/modules/market/components/Quotes";
import FearAndGreed from "./FearAndGreed";
import InvestorSentiment from "./InvestorSentiment";
import MarketHeading from "../MarketHeading";

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
      <section className="mt-8">
        <MarketHeading label="COMMODITIES" />

        <Quotes />
      </section>

      {/* TREASURYS */}
      <section className="mt-8">
        <MarketHeading label="TREASURYS" />

        <Quotes
          fields={[
            { label: "symbol", key: "symbol" },
            { label: "yield", key: "change" },
            { label: "chg", key: "changesPercentage" },
          ]}
        />
      </section>

      {/* CURRENCIES */}
      <section className="mt-8">
        <MarketHeading label="CURRENCIES" />

        <Quotes />
      </section>
    </div>
  );
}

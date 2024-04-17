"use client";
import Quotes from "@/modules/market/components/Quotes";
import FearAndGreed from "./FearAndGreed";
import InvestorSentiment from "./InvestorSentiment";

export default function StockMarket() {
  return (
    <div className="">
      <Quotes />

      {/*  STOCK INDEXES */}
      <section className="mt-8">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            STOCK INDEXES
          </h2>
        </header>
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
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            COMMODITIES
          </h2>
        </header>

        <Quotes />
      </section>

      {/* TREASURYS */}
      <section className="mt-8">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            TREASURYS
          </h2>
        </header>
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
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            CURRENCIES
          </h2>
        </header>
        <Quotes />
      </section>
    </div>
  );
}

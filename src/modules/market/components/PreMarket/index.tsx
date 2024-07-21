"use client";
import Futures from "./Futures";
import Quotes from "@/modules/market/components/Quotes";
import Chart from "@/components/Chart";
import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import ChartSummary from "@/app/(app)/ticker/[ticker]/stock-description/chart-summary";
import GroupOverview from "./GroupOverview";

export default function PreMarket() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* DOW (Mini) */}
      <section className="">
        <MarketSectionHeader
          className="pb-4 text-2xl font-bold"
          label="DOW (Mini)"
        />

        <ChartSummary ticker="^DJI" />

        {/* <div className="h-80 w-full">
          <Chart />
        </div> */}

        <Futures />
        <Futures isFairValue />

        <p className="white-text mt-4 text-sm font-bold text-[#2F3A48]">
          Last updated: Thu Dec 28, 2023 : 6:22 AM EST
        </p>
      </section>

      {/* S&P 500 (Mini) */}
      <section className="">
        <MarketSectionHeader
          className="pb-4 text-2xl font-bold"
          label="S&P 500 (Mini)"
        />

        <ChartSummary ticker="^GSPC" />

        {/* <div className="h-80 w-full">
          <Chart />
        </div> */}

        <Futures />
        <Futures isFairValue />

        <p className="white-text mt-4 text-sm font-bold text-[#2F3A48]">
          Last updated: Thu Dec 28, 2023 : 6:22 AM EST
        </p>
      </section>

      {/* NASDAQ (Mini) */}
      <section className="mt-11">
        <MarketSectionHeader
          className="pb-4 text-2xl font-bold"
          label="NASDAQ (Mini)"
        />

        <ChartSummary ticker="^IXIC" />

        {/* <div className="h-80 w-full">
          <Chart />
        </div> */}

        <Futures />
        <Futures isFairValue />

        <p className="white-text mt-4 text-sm font-bold text-[#2F3A48]">
          Last updated: Thu Dec 28, 2023 : 6:22 AM EST
        </p>
      </section>

      {/* RUSELL (Mini) */}
      <section className="mt-11">
        <MarketSectionHeader
          className="pb-4 text-2xl font-bold"
          label="RUSELL (Mini)"
        />

        {/* <div className="h-80 w-full">
          <Chart />
        </div> */}

        <ChartSummary ticker="^RUT" />

        <Futures />
        <Futures isFairValue />

        <p className="white-text mt-4 text-sm font-bold text-[#2F3A48]">
          Last updated: Thu Dec 28, 2023 : 6:22 AM EST
        </p>
      </section>

      {/* Asia-Pacific */}
      <section className="mt-11">
        <MarketSectionHeader
          className="pb-4 text-2xl font-bold"
          label="Asia-Pacific"
        />

        <p className="white-text mb-4 text-sm font-medium text-[#2F3A48]">
          Hang Seng Index
        </p>
        {/* <div className="h-80 w-full">
          <Chart />
        </div> */}
        <ChartSummary ticker="^HSI" />
        <p className="white-text mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
          Previous Close: 16.2k
        </p>

        <Quotes />
      </section>

      {/* Europe */}
      <section className="mt-11">
        <MarketSectionHeader
          className="pb-4 text-2xl font-bold"
          label="Europe"
        />

        <p className="white-text mb-4 text-sm font-medium text-[#2F3A48]">
          FTSE 100
        </p>
        <ChartSummary ticker="^FTSE" />
        {/* <div className="h-80 w-full">
          <Chart />
        </div> */}
        <p className="white-text mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
          Previous Close: 16.2k
        </p>

        <Quotes />
      </section>

      {/* Commodities */}
      <GroupOverview label="Commodities" route="/market/commodities" className="mt-11"/>
      {/* Currencies */}
      <GroupOverview label="Currencies" route="/market/forex/america" className="mt-11"/>

      {/* Volatility & Global Indexes */}
      {/* <section className="mt-11">
        <MarketSectionHeader
          className="pb-4 text-2xl font-bold"
          label="Volatility & Global Indexes"
        />

        <p className="white-text mb-4 text-sm font-medium text-[#2F3A48]">
          Hang Seng Index
        </p>
        <div className="h-80 w-full">
          <Chart />
        </div>
        <p className="white-text mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
          Previous Close: 16.2k
        </p>

        <Quotes />
      </section> */}

      {/* U.S. Treasurys */}
      {/* <section className="mt-11">
        <MarketSectionHeader
          className="pb-4 text-2xl font-bold"
          label="U.S. Treasurys"
        />

        <p className="white-text mb-4 text-sm font-medium text-[#2F3A48]">
          FTSE 100
        </p>
        <div className="h-80 w-full">
          <Chart />
        </div>
        <p className="white-text mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
          Previous Close: 16.2k
        </p>

        <Quotes />
      </section> */}

      {/* U.S. Indexes */}
      {/* <section className="mt-11">
        <MarketSectionHeader
          className="pb-4 text-2xl font-bold"
          label="Indexes"
        />

        <p className="white-text mb-4 text-sm font-medium text-[#2F3A48]">
          Hang Seng Index
        </p>
        <div className="h-80 w-full">
          <Chart />
        </div>
        <p className="white-text mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
          Previous Close: 16.2k
        </p>

        <Quotes />
      </section> */}

      {/* Sectors */}
      {/* <section className="mt-11">
        <MarketSectionHeader
          className="pb-4 text-2xl font-bold"
          label="Sectors"
        />

        <p className="white-text mb-4 text-sm font-medium text-[#2F3A48]">
          FTSE 100
        </p>
        <div className="h-80 w-full">
          <Chart />
        </div>
        <p className="white-text mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
          Previous Close: 16.2k
        </p>

        <Quotes />
      </section> */}
    </div>
  );
}

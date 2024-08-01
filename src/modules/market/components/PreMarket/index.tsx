"use client";
import Futures from "./Futures";
import Quotes from "@/modules/market/components/Quotes";
import Chart from "@/components/Chart";
import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import ChartSummary from "@/components/chart-summary";
import GroupOverview from "./GroupOverview";
import Sectors from "./US/Sectors";

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
      <GroupOverview
        label="asia pacific"
        route="/tickers/hsi,n225,sti,xjo,shcomp/quotes"
        className="mt-11"
        fields={[
          {
            label: "Name",
            key: "name",
          },
          {
            label: "Last",
            key: "price",
          },
          {
            label: "Chg",
            key: "change",
          },
          {
            label: "Chg%",
            key: "changesPercentage",
          },
        ]}
      />

      {/* Europe */}
      <GroupOverview
        label="europe"
        route="/tickers/^ftse,^GDAXI,^FCHI,^AEX,^STOXX50E/quotes"
        className="mt-11"
        fields={[
          {
            label: "Name",
            key: "name",
          },
          {
            label: "Last",
            key: "price",
          },
          {
            label: "Chg",
            key: "change",
          },
          {
            label: "Chg%",
            key: "changesPercentage",
          },
        ]}
      />

      {/* Commodities */}
      <GroupOverview
        label="futures & commodities"
        route="/market/commodities"
        className="mt-11"
      />
      {/* Currencies */}
      <GroupOverview
        label="Currencies"
        route="/tickers/eurusd,gbpusd,audusd,usdcad,usdjpy/quotes"
        className="mt-11"
      />
      {/* U.S. Indexes */}
      <GroupOverview
        label="U.S. Indexes"
        route="/tickers/^RUT,^DJT,^DJU,^NDX,^nya/quotes"
        className="mt-11"
        fields={[
          {
            label: "Name",
            key: "name",
          },
          {
            label: "Last",
            key: "price",
          },
          {
            label: "Chg",
            key: "change",
          },
          {
            label: "Chg%",
            key: "changesPercentage",
          },
        ]}
      />

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

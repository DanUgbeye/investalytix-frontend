"use client";
import Futures from "./Futures";
import Quotes from "@/modules/market/components/Quotes";
import Chart from "@/components/Chart";

export default function PreMarket() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* DOW (Mini) */}
      <section className="">
        <header className="mb-8">
          <h2 className="white-text border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            DOW (Mini)
          </h2>
        </header>

        <div className="h-80 w-full">
          <Chart />
        </div>

        <Futures />
        <Futures isFairValue />

        <p className="white-text mt-4 text-sm font-bold  text-[#2F3A48]">
          Last updated: Thu Dec 28, 2023 : 6:22 AM EST
        </p>
      </section>

      {/* S&P 500 (Mini) */}
      <section className="">
        <header className="mb-8">
          <h2 className="white-text border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            S&P 500 (Mini)
          </h2>
        </header>

        <div className="h-80 w-full">
          <Chart />
        </div>

        <Futures />
        <Futures isFairValue />

        <p className="white-text mt-4 text-sm font-bold text-[#2F3A48]">
          Last updated: Thu Dec 28, 2023 : 6:22 AM EST
        </p>
      </section>

      {/* NASDAQ (Mini) */}
      <section className="mt-11">
        <header className="mb-8">
          <h2 className="white-text border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            NASDAQ (Mini)
          </h2>
        </header>

        <div className="h-80 w-full">
          <Chart />
        </div>

        <Futures />
        <Futures isFairValue />

        <p className="white-text mt-4 text-sm font-bold text-[#2F3A48]">
          Last updated: Thu Dec 28, 2023 : 6:22 AM EST
        </p>
      </section>

      {/* RUSELL (Mini) */}
      <section className="mt-11">
        <header className="mb-8">
          <h2 className="white-text border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            RUSELL (Mini)
          </h2>
        </header>

        <div className="h-80 w-full">
          <Chart />
        </div>

        <Futures />
        <Futures isFairValue />

        <p className="white-text mt-4 text-sm font-bold text-[#2F3A48]">
          Last updated: Thu Dec 28, 2023 : 6:22 AM EST
        </p>
      </section>

      {/* Asia-Pacific */}
      <section className="mt-11">
        <header className="mb-4">
          <h2 className="white-text white-text text-2xl font-bold">
            Asia-Pacific
          </h2>
        </header>

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
      </section>

      {/* Europe */}
      <section className="mt-11">
        <header className="mb-4">
          <h2 className="white-text text-2xl font-bold">Europe</h2>
        </header>

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
      </section>

      {/* Commodities */}
      <section className="mt-11">
        <header className="mb-4">
          <h2 className="white-text text-2xl font-bold">Commodities</h2>
        </header>

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
      </section>

      {/* Currencies */}
      <section className="mt-11">
        <header className="mb-4">
          <h2 className="white-text text-2xl font-bold">Currencies</h2>
        </header>

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
      </section>

      {/* Volatility & Global Indexes */}
      <section className="mt-11">
        <header className="mb-4">
          <h2 className="white-text text-2xl font-bold">
            Volatility & Global Indexes
          </h2>
        </header>

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
      </section>

      {/* U.S. Treasurys */}
      <section className="mt-11">
        <header className="mb-4">
          <h2 className="white-text text-2xl font-bold">U.S. Treasurys</h2>
        </header>

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
      </section>

      {/* U.S. Indexes */}
      <section className="mt-11">
        <header className="mb-4">
          <h2 className="white-text text-2xl font-bold">U.S. Indexes</h2>
        </header>

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
      </section>

      {/* Sectors */}
      <section className="mt-11">
        <header className="mb-4">
          <h2 className="white-text text-2xl font-bold">Sectors</h2>
        </header>

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
      </section>
    </div>
  );
}

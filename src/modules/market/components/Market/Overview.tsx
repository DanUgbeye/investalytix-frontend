import Divider from "@/components/ui/Divider";
import chart from "@/mock/chart";
import _ from "lodash";
import Chart from "@/components/Chart";
import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import Quotes from "../Quotes";
import { EuropeanMarket } from "./EuropeanMarket";
import { AsianMarket } from "./AsianMarket";
import { AmericansMarket } from "./AmericansMarket";
import MarketMovers from "./MarketMovers";

const quotes = [
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 305.42,
    changesPercentage: 0.78,
    change: 2.37,
    dayLow: 303.15,
    dayHigh: 308.19,
    yearHigh: 349.69,
    yearLow: 266.06,
    marketCap: 2314567890123,
    priceAvg50: 298.5732,
    priceAvg200: 312.18765,
    exchange: "NASDAQ",
    volume: 38765210,
    avgVolume: 54981763,
    open: 303.85,
    previousClose: 303.05,
    eps: 8.05,
    pe: 37.94,
    earningsAnnouncement: "2023-05-10T12:45:00.000+0000",
    sharesOutstanding: 7564321098,
    timestamp: 1677791001,
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 145.775,
    changesPercentage: 0.32,
    change: 0.465,
    dayLow: 143.9,
    dayHigh: 146.71,
    yearHigh: 179.61,
    yearLow: 124.17,
    marketCap: 2306437439846,
    priceAvg50: 140.8724,
    priceAvg200: 147.18594,
    exchange: "NASDAQ",
    volume: 42478176,
    avgVolume: 73638864,
    open: 144.38,
    previousClose: 145.31,
    eps: 5.89,
    pe: 24.75,
    earningsAnnouncement: "2023-04-26T10:59:00.000+0000",
    sharesOutstanding: 15821899776,
    timestamp: 1677790773,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 2789.12,
    changesPercentage: -1.15,
    change: -32.45,
    dayLow: 2778.23,
    dayHigh: 2818.49,
    yearHigh: 2985.67,
    yearLow: 2520.11,
    marketCap: 1897654321012,
    priceAvg50: 2760.875,
    priceAvg200: 2889.23456,
    exchange: "NASDAQ",
    volume: 21548763,
    avgVolume: 30251489,
    open: 2798.55,
    previousClose: 2821.57,
    eps: 78.23,
    pe: 35.68,
    earningsAnnouncement: "2023-05-15T14:30:00.000+0000",
    sharesOutstanding: 6789012345,
    timestamp: 1677791255,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 3356.78,
    changesPercentage: 1.42,
    change: 47.22,
    dayLow: 3332.56,
    dayHigh: 3378.91,
    yearHigh: 3555.99,
    yearLow: 3001.78,
    marketCap: 1456789012345,
    priceAvg50: 3310.456,
    priceAvg200: 3445.789,
    exchange: "NASDAQ",
    volume: 19876543,
    avgVolume: 27654321,
    open: 3321.34,
    previousClose: 3309.56,
    eps: 41.87,
    pe: 80.22,
    earningsAnnouncement: "2023-05-20T11:15:00.000+0000",
    sharesOutstanding: 4321098765,
    timestamp: 1677791502,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 915.67,
    changesPercentage: 2.89,
    change: 25.65,
    dayLow: 901.45,
    dayHigh: 927.88,
    yearHigh: 1105.32,
    yearLow: 780.21,
    marketCap: 987654321098,
    priceAvg50: 898.674,
    priceAvg200: 945.325,
    exchange: "NASDAQ",
    volume: 15324876,
    avgVolume: 20987654,
    open: 903.56,
    previousClose: 890.02,
    eps: 3.45,
    pe: 265.12,
    earningsAnnouncement: "2023-05-25T09:30:00.000+0000",
    sharesOutstanding: 1098765432,
    timestamp: 1677791758,
  },
  {
    symbol: "FB",
    name: "Facebook Inc.",
    price: 332.45,
    changesPercentage: -0.96,
    change: -3.21,
    dayLow: 329.87,
    dayHigh: 335.18,
    yearHigh: 354.29,
    yearLow: 301.54,
    marketCap: 876543210987,
    priceAvg50: 328.945,
    priceAvg200: 342.567,
    exchange: "NASDAQ",
    volume: 16789432,
    avgVolume: 23456789,
    open: 333.12,
    previousClose: 335.66,
    eps: 10.76,
    pe: 30.89,
    earningsAnnouncement: "2023-05-30T13:00:00.000+0000",
    sharesOutstanding: 7654321098,
    timestamp: 1677792006,
  },
];

const timeframes = ["1m", "5m", "15m", "1h", "2h", "4h", "1D"];


export default function Market() {
  return (
    <div className="overflow-hidden">
      <h2 className="white-text white-text mb-6 text-3xl font-extrabold">
        MAJOR INDEXES
      </h2>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="">
          <div className="flex items-center justify-between md:gap-4">
            {timeframes.map((tf) => (
              <button
                key={tf}
                className="white-text text-hover-focus p-3 text-xs font-bold"
              >
                {tf}
              </button>
            ))}
          </div>

          <p className="white-text py-4 text-xs font-medium">
            Previous Close: {chart[chart.length - 1].close}
          </p>
          <div className="h-80 overflow-auto">
            <Chart />
          </div>
        </div>

        <div className="div w-full">
          <Quotes />
          {/* <Table /> */}
        </div>
      </div>

      {/* divider */}
      <Divider />

      {/* MARKET MOVERS */}
      <MarketMovers />

      {/* SECURITIES */}

      <section className="mt-11">
        <MarketSectionHeader label="SECURITIES" />

        {/* bonds */}
        <section>
          <h2 className="white-text mb-6 mt-8 text-2xl font-bold">BONDS</h2>
          <div className="grid gap-5 lg:grid-cols-[4fr,3fr]">
            <YieldTable />

            <div className="text-[#2A3037] dark:text-[#F8F7F7]">
              <p className="border-t border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
                Stock and bonds markets will see a&apos;year for non consensus
                in 2024, technical strategist says
              </p>
              <p className="border-t border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
                Treasury yields climb as 2024 trading begins
              </p>
              <p className="border-y border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
                10-year Treasury yield finishes flat near 3.86% as traders wrap
                up a roller coater year.
              </p>
            </div>
          </div>
        </section>

        {/* divider */}
        <Divider />

        {/* FUTURES & COMMODITIES */}
        <section>
          <h2 className="white-text mb-6 mt-8 text-2xl font-bold">
            FUTURES & COMMODITIES
          </h2>
          <div className="grid gap-5 lg:grid-cols-[4fr,3fr]">
            <Quotes />
            <div className="text-[#2A3037] dark:text-[#F8F7F7]">
              <p className="border-t border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
                CNBC Daily Open: A bumpy start to the year, but don&apos;t lose
                hope
              </p>
              <p className="border-t border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
                Copper could skyrocket over 75% to record highs by 2025 — brace
                for deficits, analysts sa
              </p>
              <p className="border-y border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
                Oil prices fall as traders monitor rising tensions in Red Sea
              </p>
            </div>
          </div>
        </section>

        {/* divider */}
        <Divider />

        {/* CURRENCIES */}
        <section>
          <h2 className="white-text mb-6 mt-8 text-2xl font-bold">
            CURRENCIES
          </h2>
          <div className="grid gap-5 lg:grid-cols-[4fr,3fr]">
            <Quotes />
            <div className="text-[#2A3037] dark:text-[#F8F7F7]">
              <p className="border-t border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
                CNBC Daily Open: A bumpy start to the year, but don&apos;t lose
                hope
              </p>
              <p className="border-t border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
                Copper could skyrocket over 75% to record highs by 2025 — brace
                for deficits, analysts sa
              </p>
              <p className="border-y border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
                Oil prices fall as traders monitor rising tensions in Red Sea
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* REGIONAL */}
      <section className="mt-16">
        <MarketSectionHeader label="REGIONAL" />

        {/* AMERICAS MARKET */}
        <AmericansMarket />

        {/* divider */}
        <Divider />

        {/* EUROPE MARKET */}
        <EuropeanMarket />

        {/* divider */}
        <Divider />

        {/* ASIAN MARKET */}
        <AsianMarket />
      </section>
    </div>
  );
}

function YieldTable() {
  return (
    <div className="w-full overflow-auto">
    <table className="w-full table-auto">
      <thead>
        <tr className="white-text !text-white">
          <th className="th border-b p-2 text-left capitalize dark:border-b-0">
            Name
          </th>
          <th className="th border-b text-right uppercase dark:border-b-0">
            yield
          </th>
          <th className="th border-b text-right uppercase dark:border-b-0">
            chg
          </th>
        </tr>
      </thead>
      <tbody>
        {quotes.map((quote) => (
          <tr
            key={quote.symbol}
            className="white-text text-black even:bg-[#F9F9F9] dark:border-b dark:border-b-white/10 dark:even:bg-transparent"
          >
            <td className="p-2 text-left text-sm font-bold uppercase">
              {quote.symbol}
            </td>
            <td className="p-2 text-right text-sm font-bold">{quote.change}</td>
            <td className="p-2 text-right text-sm font-bold">
              {quote.changesPercentage}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}


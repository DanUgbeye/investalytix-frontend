import Divider from "@/components/ui/Divider";
import chart from "@/mock/chart";
import _ from "lodash";
import Chart from "@/components/Chart";
import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import Quotes from "../Quotes";
import { EuropeanMarket } from "./EuropeanMarket";
import { AsianMarket } from "./AsianMarket";
import { AmericansMarket } from "./AmericansMarket";
import MarketMovers from "../MarketMovers";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import GroupOverview from "../PreMarket/GroupOverview";
import Treasurys from "../Treasurys";

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
    <div>
      {/* Major indexes */}
      <GroupOverview
        label="Major indexes"
        route="/tickers/^SPX, ^DJI, ^NDX, ^RUT, ^FTSE, ^NYA, ^GDAXI, ^FCHI, N225, HSI, SHCOMP, XJO, ^STOXX50E, DJT, DJU/quotes"
        className="mb-20"
        limit={6}
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

      {/* MARKET MOVERS */}
      <MarketMovers />

      {/* SECURITIES */}

      <section className="mt-11">
        <MarketSectionHeader label="SECURITIES" />

        <div className="grid gap-x-20 gap-y-11 md:grid-cols-2 md:gap-y-11">
          {/* bonds */}
          {/* <section>
            <h2 className="white-text mb-6 text-2xl font-bold capitalize">
              bonds
            </h2>
            <YieldTable />
          </section> */}

          {/* Commodities */}
          <GroupOverview
            label="futures & commodities"
            route="/market/commodities"
          />
          {/* Currencies */}
          <GroupOverview
            label="Currencies"
            route="/tickers/eurusd,gbpusd,audusd,usdcad,usdjpy/quotes"
          />
          <Treasurys />
        </div>
      </section>

      {/* REGIONAL */}
      <section className="mt-16">
        <MarketSectionHeader label="REGIONAL" />

        <div className="grid gap-x-20 gap-y-5 md:grid-cols-2">
          {/* AMERICAS MARKET */}
          <AmericansMarket />

          {/* EUROPE MARKET */}
          <EuropeanMarket />

          {/* ASIAN MARKET */}
          <AsianMarket />
        </div>
      </section>
    </div>
  );
}

function YieldTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow headerRow>
          <TableHead>Name</TableHead>
          <TableHead>yield</TableHead>
          <TableHead>chg</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {quotes.map((quote) => (
          <TableRow key={quote.symbol} className="">
            <TableCell className="text-left">{quote.symbol}</TableCell>
            <TableCell className="text-right">{quote.change}</TableCell>
            <TableCell className="text-right">
              {quote.changesPercentage}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

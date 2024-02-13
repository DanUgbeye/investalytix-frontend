"use client";
import { formatTimestamp } from "@/lib/utils";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Overview from "./Overview";
import EconomicEvent from "./EconomicEvent";
import { Container } from "@/components/container";

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

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Container>
        <div className="mb-4 py-8">
          <Swiper spaceBetween={0} slidesPerView={"auto"} loop freeMode>
            {quotes.map((quote) => (
              <SwiperSlide className="!flex-shrink" key={quote.symbol}>
                <Quote quote={quote} key={quote.symbol} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative mb-4 h-[170px] w-full lg:mb-12">
          <Image src={"/images/ad1.png"} alt="" fill className="object-cover" />
        </div>

        <p className="mb-6 font-bold text-[#1D1D1D] lg:text-xl">
          <span className="text-[#636363] max-lg:block">
            Quick Links: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          European markets close slightly higher after central bank bonanza;
          Maersk shares up 8%
        </p>

        <div className="grid md:grid-cols-[1fr,350px]">
          <div className="">
            <h2 className="font-bold text-[#020224] lg:text-3xl">
              Latest News
            </h2>
            <div className="mb-6 flex flex-col">
              <News latest />
              <News />
              <News />
              <News />
            </div>
            <button className="rounded bg-[#FB8B1E] px-6 py-2 font-bold text-white">
              More Articles
            </button>
          </div>
          <div className="flex flex-col gap-14 border-[#DCDCDC] py-10 md:ml-5 md:border-l md:pl-5">
            <Overview />
            <Overview />
            <Overview />
            <EconomicEvent />
          </div>
        </div>
      </Container>
    </main>
  );
}

function News({ latest = false }: { latest?: boolean }) {
  return (
    <div className="grid grid-cols-1 grid-rows-[200px,1fr] gap-5 border-b border-[#DCDCDC] py-4 lg:grid-cols-[max-content,1fr] lg:grid-rows-[auto,auto] lg:py-8">
      <div
        className={`relative h-full max-h-[200px] w-full overflow-hidden lg:w-80 ${latest ? "lg:w-96" : "w-80"}`}
      >
        <Image src="/images/news1.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="">
        <div className="flex flex-wrap items-start justify-between gap-2 xl:gap-5">
          <p className="font-extrabold text-[#020224] lg:text-xl">
            Cardinal Health Started With Underweight at Wells Fargo, Shares Drop
            6%
          </p>
          {!latest && (
            <p className="flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base">
              <span className="">ADBE</span>
              <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
              <span className="whitespace-nowrap">14 December, 2023</span>
            </p>
          )}
        </div>
        <p className="mt-4 text-sm text-[#4B4646] lg:mt-8 lg:text-base">
          Adobe system our appointment management solution streamlines
          scheduling for real estate professionals, enhancing coordination
          between agents and clients for smoother property transactions and
          improved customer experiences.
        </p>

        {latest && (
          <p className="mt-8 flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base">
            <span className="">ADBE</span>
            <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
            <span className="whitespace-nowrap">14 December, 2023</span>
          </p>
        )}
      </div>
    </div>
  );
}

function Quote({ quote }: { quote: (typeof quotes)[number] }) {
  const isPositive = quote.changesPercentage >= 0;
  return (
    <div className="w-[220px] border-r border-[#B3B3B3] px-3 py-2 text-sm font-bold text-[#252525]">
      <div className="flex items-center justify-between gap-24">
        <p className="">{quote.symbol}</p>
        <p className="">{quote.price}</p>
      </div>
      <div
        className={`flex justify-between py-3 ${
          isPositive ? "text-[#DC0000]" : "text-[#008133]"
        }`}
      >
        <p className=""></p>
        <p className="">
          {isPositive && "+"}
          {quote.change} {isPositive && "+"}
          {quote.changesPercentage}%
        </p>
      </div>
      <p className="text-xs">LAST | {formatTimestamp(quote.timestamp)}</p>
    </div>
  );
}

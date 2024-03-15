"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import Panel from "../../Panel";
import { IoIosPlay } from "react-icons/io";
import { formatTimestamp } from "@/lib/utils";
import { FiPlayCircle, FiPlus } from "react-icons/fi";
import { MdOutlinePlayCircle } from "react-icons/md";
import Divider from "@/components/ui/Divider";

const financialContent = [
  {
    heading: "Kansas: The List Of The Top Financial Advisor Firms Is Out",
    source: "smartasset",
  },
  {
    heading: "Why March 15 Could Be a Make-or-Break Moment for Tesla ",
    source: "Stansberry Research",
  },
  {
    heading: 'Is Now The Time To "Buy Low"? Like Buying Amazon in 2001',
    source: "The Motley Fool",
  },
  {
    heading: "AI Pioneer Predicts Massive Event Is Coming in 2024",
    source: "Chaikin Analytics",
  },
  {
    heading: "When Should I Collect Social Security?",
    source: "Charles Schwab",
  },
];

const latest = [
  {
    heading:
      "Friday, Dec. 22, 2023: The Club breaks down three ways to play Fed cuts",
    date: "December 22, 2023",
    source: "CNBC.com",
    isClub: true,
    hasVideo: true,
  },
  {
    heading:
      "10-year Treasury yield is little changed after cool inflation data",
    date: "December 22, 2023",
    source: "CNBC.com",
    isClub: false,
    hasVideo: false,
  },
  {
    heading:
      "10-year Treasury yield rises slightly as investors assess path for rate cuts",
    date: "December 21, 2023",
    source: "CNBC.com",
    isClub: false,
    hasVideo: false,
  },
  {
    heading:
      "Wednesday, Dec. 20, 2023: Cramer says these two Club holdings are buys",
    date: "December 20, 2023",
    source: "CNBC.com",
    isClub: true,
    hasVideo: true,
  },
  {
    heading: "10-year Treasury yield hits lowest since July ",
    date: "December 20, 2023",
    source: "CNBC.com",
    isClub: false,
    hasVideo: false,
  },
];

const summary = {
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
};

export default function Stats() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="">
        <div className="flex max-md:flex-col-reverse md:justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#1D1D1D] dark:text-white">
              U.S. 30 Year Treasury
            </h1>
            <p className="text-lg text-[#747474] dark:text-white/80">
              US30Y:Tradeweb
            </p>
            <p className="mt-2 text-sm text-[#BABABA] dark:text-white/50">
              RT Quote | Exchange
            </p>
            <p className="mt-5 text-sm font-bold text-[#171717] dark:text-white">
              Yield | 11:06 AM EST
            </p>
            <p className="mt-3 text-5xl font-bold text-[#171717] dark:text-white">
              4.306%{" "}
              <span className="text-3xl font-bold text-[#008456]">+0.001</span>
            </p>
          </div>

          <div className="flex h-fit flex-wrap gap-5 max-md:mb-5">
            <button className="flex items-center gap-3 border border-[#002F6C] fill-[#002F6C] px-4 py-3 text-xs font-bold text-[#002F6C] dark:border-white dark:fill-white dark:text-white">
              EXPORT
              <svg
                width={13}
                height={12}
                viewBox="0 0 13 12"
                fill="inherit"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_731_14577)">
                  <g clipPath="url(#clip1_731_14577)">
                    <g clipPath="url(#clip2_731_14577)">
                      <path
                        d="M0.25 11.0312C0.25 11.4625 0.5375 11.75 0.96875 11.75H11.0312C11.4625 11.75 11.75 11.4625 11.75 11.0312V6C11.75 5.56875 11.4625 5.28125 11.0312 5.28125C10.6 5.28125 10.3125 5.56875 10.3125 6V10.3125H1.6875V6C1.6875 5.56875 1.4 5.28125 0.96875 5.28125C0.5375 5.28125 0.25 5.56875 0.25 6V11.0312ZM6.71875 8.15625V3.125H8.15625C8.5875 3.125 8.65938 2.90937 8.37187 2.62187L6 0.25L3.62812 2.62187C3.34062 2.90937 3.4125 3.125 3.84375 3.125H5.28125V8.15625H6.71875Z"
                        fill="inherit"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_731_14577">
                    <rect
                      width={12}
                      height={12}
                      fill="white"
                      transform="translate(0.25)"
                    />
                  </clipPath>
                  <clipPath id="clip1_731_14577">
                    <rect
                      width={12}
                      height={12}
                      fill="white"
                      transform="translate(0.25)"
                    />
                  </clipPath>
                  <clipPath id="clip2_731_14577">
                    <rect
                      width={12}
                      height={12}
                      fill="white"
                      transform="translate(0.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className="flex items-center gap-3 border border-[#002F6C] px-4 py-3 text-xs font-bold text-[#002F6C] dark:border-white dark:text-white">
              WATCHLIST
              <FiPlus className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-3 border border-[#002F6C] text-xs font-bold text-[#002F6C] dark:border-white dark:text-white">
              <div className="m-1 flex items-center gap-1 bg-[#CE2B2B] p-2 text-white">
                LIVE
                <MdOutlinePlayCircle className="h-4 w-4" />
              </div>
              <span className="inline-block py-3 pr-4">MONEY MOVERS</span>
            </button>
          </div>
        </div>

        <div className="mt-1o relative h-[320px] w-full max-md:h-[200px]">
          <Image
            src="/images/chart2.png"
            fill
            alt=""
            className="object-contain object-left"
          />
        </div>

        {/* summary and news */}
        <div className="mt-14">
          <Tab.Group>
            <div className="mb-7 lg:flex">
              <Tab.List className={"flex w-full items-center justify-center"}>
                {["summary", "news"].map((market) => (
                  <Tab as={Fragment} key={market}>
                    {({ selected }) => (
                      <button
                        className={`w-full border-b-2 pb-2 text-lg font-bold uppercase ${
                          selected
                            ? "border-primary-base text-[#252525] dark:text-white"
                            : "border-[#C4C4C4] text-[#747474] dark:text-[#C4C4C4]"
                        }`}
                      >
                        {market}
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels>
              <Tab.Panel>
                <div className="">
                  <p className="mb-1 font-bold text-[#002F6C] dark:text-white">
                    KEY STATS
                  </p>
                  <div className="grid gap-x-6 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
                      <p className="capitalize text-[#747474] dark:text-white/60">
                        Yield Open
                      </p>
                      <p className="font-bold text-[#171717] dark:text-white">
                        {summary.open}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
                      <p className="capitalize text-[#747474] dark:text-white/60">
                        Price
                      </p>
                      <p className="font-bold text-[#171717] dark:text-white">
                        {summary.price}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
                      <p className="capitalize text-[#747474] dark:text-white/60">
                        Price Day High
                      </p>
                      <p className="font-bold text-[#171717] dark:text-white">
                        {summary.dayHigh}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
                      <p className="capitalize text-[#747474] dark:text-white/60">
                        Yield Day High
                      </p>
                      <p className="font-bold text-[#171717] dark:text-white">
                        {summary.dayHigh}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
                      <p className="capitalize text-[#747474] dark:text-white/60">
                        Price Change
                      </p>
                      <p className="font-bold text-[#171717] dark:text-white">
                        {summary.change}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
                      <p className="capitalize text-[#747474] dark:text-white/60">
                        price Day Low
                      </p>
                      <p className="font-bold text-[#171717] dark:text-white">
                        {summary.dayLow}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
                      <p className="capitalize text-[#747474] dark:text-white/60">
                        yield Day Low
                      </p>
                      <p className="font-bold text-[#171717] dark:text-white">
                        {summary.dayLow}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
                      <p className="capitalize text-[#747474] dark:text-white/60">
                        Price Change %
                      </p>
                      <p className="font-bold text-[#171717] dark:text-white">
                        {summary.changesPercentage}%
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
                      <p className="capitalize text-[#747474] dark:text-white/60">
                        Coupon
                      </p>
                      <p className="font-bold text-[#171717] dark:text-white">
                        {summary.marketCap}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
                      <p className="capitalize text-[#747474] dark:text-white/60">
                        Yield Prev Close
                      </p>
                      <p className="font-bold text-[#171717] dark:text-white">
                        {summary.previousClose}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
                      <p className="capitalize text-[#747474] dark:text-white/60">
                        Price Prev Close
                      </p>
                      <p className="font-bold text-[#171717] dark:text-white">
                        {summary.previousClose}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
                      <p className="capitalize text-[#747474] dark:text-white/60">
                        Maturity
                      </p>
                      <p className="font-bold text-[#171717] dark:text-white">
                        {formatTimestamp(summary.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        {/* divider */}
        <Divider />

        {/* Latest On U.S. 30 Year Treasury */}
        <div className="">
          <p className="text-xl font-bold text-[#1D1D1D] dark:text-white">
            Latest On U.S. 30 Year Treasury
          </p>

          <div className="mt-4">
            <button className="rounded-full border border-primary-base bg-primary-base px-3 py-2 text-xs font-bold text-white">
              ALL CNBC
            </button>
            <button className="mx-3 rounded-full border border-[#1D1D1D] bg-white px-3 py-2 text-xs font-bold text-[#1D1D1D]">
              INVESTING CLUB
            </button>
            <button className="rounded-full border border-[#1D1D1D] bg-white px-3 py-2 text-xs font-bold text-[#1D1D1D]">
              PRO
            </button>
          </div>

          <div className="mt-4">
            {latest.map((latest, index) => (
              <div
                key={index}
                className="flex flex-wrap items-center border-b border-[#DEDEDE] py-2"
              >
                <div className="mr-3 h-2 w-2 rounded-full bg-[#FCB700]"></div>
                {latest.isClub && (
                  <div className="mr-2 bg-black p-1 text-xs uppercase text-white">
                    club
                  </div>
                )}
                <p className="">{latest.heading}</p>
                {latest.hasVideo && (
                  <div className="ml-2 bg-[#FCB700] p-1">
                    <IoIosPlay className="text-black" />
                  </div>
                )}
                <p className="ml-2 text-xs font-bold text-[#636363]">
                  {latest.date}
                </p>
                <p className="ml-2 text-xs font-bold text-[#636363]">
                  - {latest.source}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* divider */}
        <Divider />

        {/* Sponsored Financial Content */}
        <div className="">
          <p className="text-xl font-bold text-[#1D1D1D] dark:text-white">
            Sponsored Financial Content
          </p>

          <div className="mt-3">
            {financialContent.map((content, index) => (
              <div
                key={index}
                className="flex flex-wrap items-center border-b border-[#DEDEDE] py-2"
              >
                <p className="">{content.heading}</p>

                <p className="ml-6 text-xs font-bold text-[#636363] dark:text-white/60">
                  {content.source}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* divider */}
        <Divider />

        <div className="">
          <p className="text-xl font-bold text-[#1D1D1D] dark:text-white">
            Content From Our Affiliates
          </p>
          <p className="mt-3">There is no recent news for this security.</p>
        </div>

        <div className="relative mt-3 h-[320px] w-full">
          <Image
            src="/images/chart3.png"
            fill
            alt=""
            className="object-contain object-left"
          />
        </div>
      </div>
      <div className="">
        <div className="mt-8 flex flex-col gap-1">
          <Panel heading={"Prices"} defaultOpen />
          <Panel heading={"Markets"} />
          <Panel heading={"Labour"} />
          <Panel heading={"GDP"} />
          <Panel heading={"Health"} />
          <Panel heading={"Money"} />
          <Panel heading={"Trade"} />
          <Panel heading={"Government"} />
          <Panel heading={"Business"} />
          <Panel heading={"Consumer"} />
          <Panel heading={"Housing"} />
          <Panel heading={"Taxes"} />
          <Panel heading={"Climate"} />
        </div>
      </div>
    </div>
  );
}

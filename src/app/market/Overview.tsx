"use client";
import WithSidePanel, { SIDE_SECTIONS } from "./WithSidePanel";
import Market from "./Market/Overview";
import PreMarket from "./PreMarket";
import StockMarket from "./StockMarket";
import FX from "./FX";
import Cryptocurrency from "./Cryptocurrency";
import Commoodities from "./Commodities";
import Bonds from "./Bonds";
import Economy from "./Economy";
import { useRef, useState } from "react";
import Image from "next/image";

const markets = [
  "PRE-MKT",
  "STOCK MARKET",
  "FX",
  "CRYPTOCURRENCY",
  "COMMODITIES",
  "BONDS",
  "ECONOMY",
] as const;

export default function MarketOverview() {
  const portal = useRef<HTMLDivElement>(null);
  const [activeMarket, setActiveMarket] = useState<
    (typeof markets)[number] | null
  >(null);

  const updateActiveMarket = (mkt: typeof activeMarket) => () =>
    setActiveMarket((state) => (state === mkt ? null : mkt));

  return (
    <div>
      {activeMarket != null && (
        <p className="mb-2 text-center text-xl font-extrabold">MARKETS</p>
      )}
      <h1 className="mb-7 border-b-[6px] border-primary-base pb-2 text-center text-3xl font-extrabold">
        {activeMarket === null ? "MARKET" : activeMarket}
      </h1>

      <div
        className={"mb-10 flex justify-between gap-10 overflow-auto px-14 py-5"}
      >
        {markets.map((mkt) => (
          <button
            key={mkt}
            onClick={updateActiveMarket(mkt)}
            className={`whitespace-nowrap border-b-2 pb-2 font-bold ${
              mkt === activeMarket
                ? "border-primary-base "
                : "border-transparent"
            }`}
          >
            {mkt}
          </button>
        ))}
      </div>

      {/* portal */}
      <div className="" ref={portal}></div>

      <div>
        {activeMarket === "PRE-MKT" ? (
          <PreMarket portal={portal} />
        ) : activeMarket === "STOCK MARKET" ? (
          <StockMarket />
        ) : activeMarket === "FX" ? (
          <FX portal={portal} />
        ) : activeMarket === "CRYPTOCURRENCY" ? (
          <Cryptocurrency />
        ) : activeMarket === "COMMODITIES" ? (
          <Commoodities portal={portal} />
        ) : activeMarket === "BONDS" ? (
          <Bonds portal={portal} />
        ) : activeMarket === "ECONOMY" ? (
          <Economy />
        ) : activeMarket === null ? (
          <>
            <WithSidePanel sections={SIDE_SECTIONS["ALL"]}>
              <Market />
            </WithSidePanel>

            {/* TRENDING NOW */}
            <section className="mt-16 overflow-hidden">
              <header className="pb-10">
                <h2 className="border-l-[6px] border-l-primary-base pl-5 text-3xl font-extrabold">
                  TRENDING NOW
                </h2>
              </header>

              <div className="flex gap-5 overflow-hidden">
                <Event />
                <Event />
                <Event />
              </div>
            </section>
          </>
        ) : null}
      </div>
    </div>
  );
}

function Event() {
  return (
    <div className="flex w-full gap-2">
      <div className="relative h-[110px] w-28 flex-shrink-0 overflow-hidden bg-red-500">
        <Image src="/images/news1.jpg" alt="" fill className="object-cover" />
      </div>

      <div className="">
        <p className="text-sm font-bold text-[#000000]">
          Cardinal Health Started With Underweight at Wells Fargo, Shares Drop
          6%
        </p>
        <p className="mt-8 flex items-center gap-1 text-sm text-[#565555]">
          <span className="">ADBE</span>
          <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
          <span className="whitespace-nowrap">14 December, 2023</span>
        </p>
      </div>
    </div>
  );
}

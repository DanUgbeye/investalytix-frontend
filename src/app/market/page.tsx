"use client";
import Image from "next/image";
import Overview from "../Overview";
import EconomicEvent from "../EconomicEvent";
import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import Market from "./Market";
import PreMarket from "./PreMarket";

const markets = [
  "PRE-MKT",
  "STOCK MARKET",
  "FX",
  "CRYPTOCURRENCY",
  "COMMODITIES",
  "BONDS",
  "ECONOMY",
];

export default function MarketPage() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <main>
      <div className="relative mb-4 h-[170px] w-full lg:mb-12">
        <Image src={"/images/ad1.png"} alt="" fill className="object-cover" />
      </div>

      <Tab.Group
        onChange={(index) => {
          setSelectedIndex(index);
        }}
      >
        {selectedIndex > -1 && (
          <p className="mb-2 text-center text-xl font-extrabold">MARKETS</p>
        )}
        <h1 className="mb-7 border-b-[6px] border-primary-base pb-2 text-center text-3xl font-extrabold">
          {selectedIndex === -1 ? "MARKET" : markets[selectedIndex]}
        </h1>

        <Tab.List>
          <div
            className={
              "mb-10 flex justify-between gap-10 overflow-auto px-14 py-5"
            }
          >
            {markets.map((market) => (
              <Tab as={Fragment} key={market}>
                {({ selected }) => (
                  <button
                    className={`whitespace-nowrap border-b-2 pb-2 font-bold ${
                      selected ? "border-primary-base " : "border-transparent"
                    }`}
                  >
                    {market}
                  </button>
                )}
              </Tab>
            ))}
          </div>
        </Tab.List>

        <div className="grid md:grid-cols-[1fr,350px]">
          <div>
            {selectedIndex === -1 && <Market />}
            <Tab.Panels>
              <Tab.Panel>
                <PreMarket />
              </Tab.Panel>
            </Tab.Panels>
          </div>

          <div className="flex flex-col gap-14 border-[#DCDCDC] py-10 md:ml-5 md:border-l md:pl-5">
            <Overview />
            <Overview />
            <Overview />
            <EconomicEvent />
          </div>
        </div>
      </Tab.Group>

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
    </main>
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

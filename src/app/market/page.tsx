"use client";
import Image from "next/image";
import Overview from "../Overview";
import EconomicEvent from "../EconomicEvent";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import Market from "./Market";

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
  return (
    <main>
      <div className="relative mb-4 h-[170px] w-full lg:mb-12">
        <Image src={"/images/ad1.png"} alt="" fill className="object-cover" />
      </div>

      <Tab.Group>
        <Tab.List>
          <Tab className={"w-full"}>
            <h1 className="border-primary-base mb-7 border-b-[6px] pb-2 text-center text-3xl font-extrabold">
              MARKET
            </h1>
          </Tab>

          <div className={"mb-10 flex justify-between px-14 py-5"}>
            {markets.map((market) => (
              <Tab as={Fragment} key={market}>
                {({ selected }) => (
                  <button
                    className={`border-b-2 pb-2 font-bold ${
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
          <Tab.Panels>
            <Tab.Panel>
              <Market />
            </Tab.Panel>
          </Tab.Panels>
          <div className="flex flex-col gap-14 border-[#DCDCDC] py-10 md:ml-5 md:border-l md:pl-5">
            <Overview />
            <Overview />
            <Overview />
            <EconomicEvent />
          </div>
        </div>
      </Tab.Group>
    </main>
  );
}

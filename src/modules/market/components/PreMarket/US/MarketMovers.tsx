"use client";
import Divider from "@/components/ui/Divider";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

export default function MarketMovers() {
  const marketMovers = ["S&P", "NASDAQ", "DOW", "EUR", "ASIA", "COVID19"];

  return (
    <>
      {/* divider */}
      {/* <Divider /> */}

      {/* MARKET MOVERS */}
      <div className="px-6">
        <Tab.Group>
          <div className="mb-7 text-[#252525] lg:flex">
            <h1 className="whitespace-nowrap text-2xl font-extrabold max-lg:mb-5 white-text">
              MARKET MOVERS
            </h1>
            <Tab.List
              className={"flex w-full items-center justify-center gap-4"}
            >
              {marketMovers.map((market) => (
                <Tab as={Fragment} key={market}>
                  {({ selected }) => (
                    <button
                      className={`border-b-2 pb-2 text-sm font-extrabold white-text ${
                        selected ? "border-primary-base " : "border-transparent"
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
              <div className="grid gap-20">
                <div className="">
                  <p className="font-bold">TOP GAINERS</p>
                </div>
                <div className="">
                  <p className="font-bold">TOP DECLINERS</p>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

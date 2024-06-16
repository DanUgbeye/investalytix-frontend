"use client";
import ColoredNumber from "@/components/ui/ColoredNumber";
import Divider from "@/components/ui/Divider";
import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { FiPlus } from "react-icons/fi";

const topMovers = [
  { symbol: "MRNA", name: "Moderna Inc", changePercent: 13.122, close: 295.4 },
  { symbol: "VTRS", name: "Viatris Inc", changePercent: 5.171, close: 150.38 },
  {
    symbol: "LVS",
    name: "Las Vegas Sand",
    changePercent: 4.308,
    close: 160.62,
  },
  { symbol: "INCY", name: "Incyte Corp", changePercent: 4.236, close: 17.605 },
  {
    symbol: "MRK",
    name: "Merck & Co Inc",
    changePercent: 3.871,
    close: 482.47,
  },
];

export default function MarketMovers() {
  const marketMovers = ["S&P", "NASDAQ", "DOW", "EUR", "ASIA", "COVID19"];

  return (
    <>
      <MarketSectionHeader label="MARKET MOVERS" id="market-movers" />

      {/* divider */}
      {/* <Divider /> */}

      {/* MARKET MOVERS */}
      <div className="mt-0">
        <Tab.Group>
          <div className="mb-7 text-[#252525]">
            <Tab.List className={"flex w-full items-center gap-4"}>
              {marketMovers.map((market) => (
                <Tab as={Fragment} key={market}>
                  {({ selected }) => (
                    <button
                      className={`rounded-md px-4 py-1 text-sm font-extrabold outline-none ${
                        selected
                          ? "bg-primary-base text-white dark:bg-primary-light dark:text-black"
                          : "bg-hover-focus bg-[#EBEEF3] dark:bg-[#EBEEF3]/20 dark:text-white/70"
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
            <Panel />
            <Panel />
            <Panel />
            <Panel />
            <Panel />
            <Panel />
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

function Panel() {
  return (
    <Tab.Panel>
      <div className="grid gap-20">
        <div className="">
          <p className="mb-7 font-bold">TOP GAINERS</p>

          <div className="flex flex-col gap-5">
            {topMovers.map((mover) => (
              <div
                key={mover.symbol}
                className="flex items-center gap-1 md:gap-4"
              >
                <div className="grid grid-cols-[7ch,5ch,7ch] items-center gap-1 md:grid-cols-[8ch,auto,20ch,10ch] md:gap-6 lg:grid-cols-[14ch,auto,20ch,10ch]">
                  <p className="truncate text-sm font-bold">{mover.symbol}</p>
                  <button className="group hidden border border-main-blue-base outline-none hover:bg-main-blue-base focus:bg-main-blue-base md:block dark:border-main-blue-light dark:hover:bg-main-blue-light dark:focus:bg-main-blue-light">
                    <FiPlus className="text-main-blue-base group-hover:text-white group-focus:text-white dark:text-main-blue-light" />
                  </button>
                  <p className="truncate text-sm font-bold">{mover.name}</p>
                  <p className="truncate text-sm font-bold">{mover.close}</p>
                </div>
                <div className="grid w-full grid-cols-[max-content,1fr] gap-3">
                  <ColoredNumber
                    number={mover.changePercent}
                    percent
                    colored
                    className="text-right"
                  />
                  <div className="w-full">
                    <div
                      className="h-full bg-[#006400] dark:bg-[#67c967]"
                      style={{ width: `${mover.changePercent * 5}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <p className="mb-7 font-bold">TOP DECLINERS</p>

          <div className="flex flex-col gap-5">
            {topMovers.map((mover) => (
              <div key={mover.symbol} className="flex items-center gap-4">
                <div className="grid grid-cols-[7ch,5ch,7ch] items-center gap-1 md:grid-cols-[8ch,auto,20ch,10ch] md:gap-6 lg:grid-cols-[14ch,auto,20ch,10ch]">
                  <p className="truncate text-sm font-bold">{mover.symbol}</p>
                  <button className="group hidden border border-main-blue-base outline-none hover:bg-main-blue-base focus:bg-main-blue-base md:block dark:border-main-blue-light dark:hover:bg-main-blue-light dark:focus:bg-main-blue-light">
                    <FiPlus className="text-main-blue-base group-hover:text-white group-focus:text-white dark:text-main-blue-light" />
                  </button>
                  <p className="truncate text-sm font-bold">{mover.name}</p>
                  <p className="truncate text-sm font-bold">{mover.close}</p>
                </div>
                <div className="grid w-full grid-cols-[max-content,1fr] gap-3">
                  <ColoredNumber
                    number={-1 * mover.changePercent}
                    percent
                    colored
                    className="text-right"
                  />
                  <div className="">
                    <div
                      className="h-full bg-[#8B0000] dark:bg-[#ca5a5a]"
                      style={{ width: `${mover.changePercent * 5}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Tab.Panel>
  );
}

"use client";
import ColoredNumber from "@/components/ui/ColoredNumber";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { FiPlus } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const marketMovers = ["S&P", "NASDAQ", "DOW", "EUR", "ASIA", "COVID19"];

export default function MarketMovers() {
  return (
    <div>
      <h1 className="white-text whitespace-nowrap text-2xl font-extrabold capitalize max-lg:mb-5">
        market movers
      </h1>
      <Tab.Group>
        <div className="white-text mb-12 mt-10 text-[#252525]">
          <Tab.List
            as={Swiper}
            spaceBetween={16}
            slidesPerView={"auto"}
            freeMode
            // className={"flex w-full items-center gap-4 md:justify-start"}
          >
            {/* <Swiper spaceBetween={24} slidesPerView={"auto"} freeMode> */}
            {marketMovers.map((market) => (
              <SwiperSlide className={"z-[1] !w-fit !flex-shrink grow-0"}>
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
              </SwiperSlide>
            ))}
            {/* </Swiper> */}
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
  );
}

const topMovers = [
  { symbol: "MRNA", name: "Moderna Inc", changePercent: 13.122 },
  { symbol: "VTRS", name: "Viatris Inc", changePercent: 5.171 },
  { symbol: "LVS", name: "Las Vegas Sand", changePercent: 4.308 },
  { symbol: "INCY", name: "Incyte Corp", changePercent: 4.236 },
  { symbol: "MRK", name: "Merck & Co Inc", changePercent: 3.871 },
];
function Panel() {
  return (
    <Tab.Panel>
      <div className="grid gap-10 pb-14 md:grid-cols-2">
        <div className="">
          <p className="white-text mb-11 text-2xl font-bold capitalize">Top gainers</p>

          <div className="flex flex-col gap-5">
            {topMovers.map((mover) => (
              <div key={mover.symbol} className="flex items-center gap-4">
                <div className="grid grid-cols-[7ch,10ch] items-center gap-1 md:grid-cols-[7ch,auto,10ch] md:gap-3">
                  <p className="truncate text-sm font-bold">{mover.symbol}</p>
                  <button className="group hidden border border-main-blue-base outline-none hover:bg-main-blue-base focus:bg-main-blue-base md:block dark:border-main-blue-light dark:hover:bg-main-blue-light dark:focus:bg-main-blue-light">
                    <FiPlus className="text-main-blue-base group-hover:text-white group-focus:text-white dark:text-main-blue-light" />
                  </button>
                  <p className="truncate text-sm font-bold">{mover.name}</p>
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
                      className="h-full bg-main-green-light dark:bg-main-green-dark"
                      style={{ width: `${mover.changePercent * 5}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <p className="white-text mb-11 text-2xl font-bold capitalize">Top decliners</p>

          <div className="flex flex-col gap-5">
            {topMovers.map((mover) => (
              <div key={mover.symbol} className="flex items-center gap-4">
                <div className="grid grid-cols-[7ch,10ch] items-center gap-1 md:grid-cols-[7ch,auto,10ch] md:gap-3">
                  <p className="truncate text-sm font-bold">{mover.symbol}</p>
                  <button className="group hidden border border-main-blue-base outline-none hover:bg-main-blue-base focus:bg-main-blue-base md:block dark:border-main-blue-light dark:hover:bg-main-blue-light dark:focus:bg-main-blue-light">
                    <FiPlus className="text-main-blue-base group-hover:text-white group-focus:text-white dark:text-main-blue-light" />
                  </button>
                  <p className="truncate text-sm font-bold">{mover.name}</p>
                </div>
                <div className="grid w-full grid-cols-[max-content,1fr] gap-3">
                  <ColoredNumber
                    number={-1 * mover.changePercent}
                    percent
                    colored
                    className="text-right"
                  />
                  <div className="w-full">
                    <div
                      className="h-full bg-main-red-light dark:bg-main-red-dark"
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

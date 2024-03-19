"use client";

import Mapper from "@/components/mapper";
import NewsCard from "@/features/news/components/news-card";
import chart from "@/mock/chart";
import { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type NewsTab = "dow-jones" | "market";

interface StockDescriptionSummaryScreenProps {
  ticker: string;
}

export default function StockDescriptionSummaryScreen(
  props: StockDescriptionSummaryScreenProps
) {
  const { ticker } = props;
  const [newsTab, setNewsTab] = useState<NewsTab>("market");

  function handleNewsTabChange(tab: NewsTab) {
    setNewsTab(tab);
  }

  return (
    <section className=" space-y-8 ">
      <div className=" grid grid-cols-1 gap-8 xl:grid-cols-3   ">
        <div className=" w-full ">
          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">Previous Close</span>
            <span className=" font-bold ">18.29</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">Open</span>
            <span className=" font-bold ">18.29</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">Bid</span>
            <span className=" font-bold ">20.62 x 2200</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">Ask</span>
            <span className=" font-bold ">0.00 x 3200</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">Day&apos;s Range</span>
            <span className=" font-bold ">17.68 - 20.09</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">52 Week Range</span>
            <span className=" font-bold ">3.11 - 20.09</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">Volume</span>
            <span className=" font-bold ">59,763,221</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">Avg. Volume</span>
            <span className=" font-bold ">40,368,106</span>
          </div>
        </div>

        <div className=" w-full ">
          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">Market Cap</span>
            <span className=" font-bold ">18.29</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">Beta (5Y Monthly)</span>
            <span className=" font-bold ">18.29</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">PE Ratio (TTM)</span>
            <span className=" font-bold ">N/A</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">EPS (TTM)</span>
            <span className=" font-bold ">-3.08</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">Earnings Date</span>
            <span className=" font-bold ">Mar 14, 2024 -Mar 18, 2024</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">Forward Dividend & Yield</span>
            <span className=" font-bold ">N/A (N/A)</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">Ex-Dividend Date</span>
            <span className=" font-bold ">59,763,221</span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b py-2 text-sm ">
            <span className=" ">Avg. Volume</span>
            <span className=" font-bold ">N/A</span>
          </div>
        </div>

        <div className=" h-80 w-full ">
          <ResponsiveContainer
            width="100%"
            height="100%"
            className="!m-0 !p-0 text-sm"
          >
            <AreaChart
              data={chart}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              className="!p-0"
            >
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="60%" stopColor="#3354F4" stopOpacity={100} />
                  {/* <stop offset="80%" stopColor="rgba(255,0,0,0.62)" stopOpacity={100} /> */}
                  {/* <stop offset="80%" stopColor="#ff0000" stopOpacity={100} /> */}
                  <stop
                    offset="90%"
                    stopColor="rgba(51,84,244,0.62)"
                    stopOpacity={100}
                  />
                </linearGradient>
              </defs>
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis
                dataKey={({ date }) =>
                  date.split(" ")[1].split(":").slice(0, 2).join(":")
                }
              />
              <YAxis dataKey="close" />
              <Tooltip />
              <Area type="monotone" dataKey="close" fill="url(#gradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* KEY STATS */}
      <div className=" space-y-6 ">
        <h2 className="border-l-[6px] border-l-primary-base pl-5 text-3xl font-extrabold">
          KEY STATS
        </h2>

        <div className=" grid gap-8 xl:grid-cols-3 xl:justify-between ">
          <div className=" w-full ">
            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">Open</span>
              <span className=" font-bold ">190.33</span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">Day High</span>
              <span className=" font-bold ">191.56</span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">Day Low</span>
              <span className=" font-bold ">189.23</span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">Prev Close</span>
              <span className=" font-bold ">189.23</span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">10 Day Average Volume</span>
              <span className=" font-bold ">42.45M</span>
            </div>
          </div>

          <div className=" w-full ">
            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">52 Week High</span>
              <span className=" font-bold ">198.23</span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">52 Week High Date</span>
              <span className=" font-bold ">07/19/23</span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">52 Week Low</span>
              <span className=" font-bold ">124.17</span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">52 Week Low Date</span>
              <span className=" font-bold ">01/03/23</span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">Beta</span>
              <span className=" font-bold ">1.32</span>
            </div>
          </div>

          <div className=" w-full ">
            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">Market Cap</span>
              <span className=" font-bold ">2.974T</span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">Shares Out</span>
              <span className=" font-bold ">15.55B</span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">Dividend</span>
              <span className=" font-bold ">0.96</span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">Dividend Yield</span>
              <span className=" font-bold ">0.50%</span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-transparent ">
              <span className=" ">YTD % Change</span>
              <span className=" font-bold ">47.19</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid gap-10 lg:grid-cols-[auto,1fr] ">
        {/* KEY DATA */}
        <div className=" min-w-60 space-y-4 ">
          <header className="relative w-full ">
            <div className=" flex w-full py-4 ">
              <h3 className=" text-2xl font-bold text-[#2A3037] dark:text-white">
                KEY DATA
              </h3>
            </div>

            <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] from-50% to-[#545454] to-50% dark:to-white"></div>
          </header>

          <div className=" grid grid-cols-[auto,auto] gap-x-3 ">
            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">OPEN</span>
              <span className=" font-bold ">$190.33</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">DAY RANGE</span>
              <span className=" font-bold ">189.23 - 191.56</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">52 WEEK RANGE</span>
              <span className=" font-bold ">$190.33</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">MARKET CAP</span>
              <span className=" font-bold ">$2.97T</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">SHARES OUTSTANDING</span>
              <span className=" font-bold ">$190.33</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">PUBLIC FLOAT</span>
              <span className=" font-bold ">$2.97T</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">BETA</span>
              <span className=" font-bold ">1.32</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">REV. PER EMPLOYEE</span>
              <span className=" font-bold ">$2.381M</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">P/E RATIO</span>
              <span className=" font-bold ">31.20</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">EPS</span>
              <span className=" font-bold ">$6.13</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">YIELD</span>
              <span className=" font-bold ">0.50%</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">DIVIDEND</span>
              <span className=" font-bold ">$0.24</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">EX-DIVIDEND RATE</span>
              <span className=" font-bold ">Nov 10, 2023</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">SHORT INTEREST</span>
              <span className=" font-bold ">105.84M 11/15/23</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">% OF FLOAT SHORTED</span>
              <span className=" font-bold ">0.68%</span>
            </div>

            <div className=" flex w-full flex-col gap-y-2 border-b py-2 ">
              <span className=" text-sm ">AVERAGE VOLUME</span>
              <span className=" font-bold ">57.18M</span>
            </div>
          </div>
        </div>

        {/* RECENT NEWS */}
        <div className=" space-y-4 ">
          <header className="relative w-full ">
            <div className=" flex w-full py-4 ">
              <h3 className=" text-2xl font-bold text-[#2A3037] dark:text-white">
                RECENT NEWS
              </h3>
            </div>

            <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] from-50% to-[#545454] to-50% dark:to-white"></div>
          </header>

          <div className="  ">
            <div className=" flex w-fit gap-2 rounded bg-[#F5F5F5] p-2 ">
              <button
                type="button"
                className={`whitespace-nowrap rounded px-5 py-2 text-center hover:bg-primary-base hover:text-white focus:bg-primary-base focus:text-white ${
                  newsTab === "market"
                    ? "bg-primary-base text-white"
                    : "bg-transparent text-[#636363] dark:text-white"
                }`}
                onClick={(e) => handleNewsTabChange("market")}
              >
                MARKET WATCH
              </button>

              <button
                type="button"
                className={`whitespace-nowrap rounded px-5 py-2 text-center hover:bg-primary-base hover:text-white focus:bg-primary-base focus:text-white ${
                  newsTab === "dow-jones"
                    ? "bg-primary-base text-white"
                    : "bg-transparent text-[#636363] dark:text-white"
                }`}
                onClick={(e) => handleNewsTabChange("dow-jones")}
              >
                DOW JONES
              </button>
            </div>

            <div className="  ">
              <Mapper
                list={Array(3).fill("")}
                component={(props) => <NewsCard hideContent className="  " />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

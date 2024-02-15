"use client";

import chart from "@/mock/chart";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface StockDescriptionScreenProps {
  ticker: string;
}

export default function StockDescriptionScreen(
  props: StockDescriptionScreenProps
) {
  const { ticker } = props;

  return (
    <section className="  ">
      <div className=" flex gap-x-10 ">
        <div className=" w-full max-w-xl ">
          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">Previous Close</span>
            <span className=" font-bold ">18.29</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">Open</span>
            <span className=" font-bold ">18.29</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">Bid</span>
            <span className=" font-bold ">20.62 x 2200</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">Ask</span>
            <span className=" font-bold ">0.00 x 3200</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">Day&apos;s Range</span>
            <span className=" font-bold ">17.68 - 20.09</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">52 Week Range</span>
            <span className=" font-bold ">3.11 - 20.09</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">Volume</span>
            <span className=" font-bold ">59,763,221</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">Avg. Volume</span>
            <span className=" font-bold ">40,368,106</span>
          </div>
        </div>

        <div className=" w-full max-w-xl ">
          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">Market Cap</span>
            <span className=" font-bold ">18.29</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">Beta (5Y Monthly)</span>
            <span className=" font-bold ">18.29</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">PE Ratio (TTM)</span>
            <span className=" font-bold ">N/A</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">EPS (TTM)</span>
            <span className=" font-bold ">-3.08</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">Earnings Date</span>
            <span className=" font-bold ">Mar 14, 2024 -Mar 18, 2024</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">Forward Dividend & Yield</span>
            <span className=" font-bold ">N/A (N/A)</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">Ex-Dividend Date</span>
            <span className=" font-bold ">59,763,221</span>
          </div>

          <div className=" grid h-9 grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b text-sm ">
            <span className=" ">Avg. Volume</span>
            <span className=" font-bold ">N/A</span>
          </div>
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%" className="!m-0 !p-0">
            <AreaChart
              // width={500}
              // height={400}
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
    </section>
  );
}

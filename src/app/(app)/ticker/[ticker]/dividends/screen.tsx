"use client";

import { tailwindCSS } from "@/lib/utils";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

interface DividendsScreenProps {
  ticker: string;
}

export default function DividendsScreen(props: DividendsScreenProps) {
  const { ticker } = props;

  return (
    <section className=" max-w-6xl space-y-12 py-12 ">
      <header className="relative w-full ">
        <div className=" flex w-full py-4 ">
          <h2 className=" white-text text-xl font-bold text-[#2A3037] sm:text-3xl">
            Apple Dividend
          </h2>
        </div>

        <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] from-50% to-[#545454] to-50% dark:to-white/50 "></div>
      </header>

      <div className=" space-y-5 border py-3 dark:border-main-gray-600  ">
        <h4 className=" px-4 text-lg font-bold sm:text-2xl ">Data</h4>

        <div className=" white-text flex flex-col divide-y divide-inherit text-gray-700 xl:flex-row xl:divide-x xl:divide-y-0 dark:border-main-gray-600 ">
          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Last Ex-Dividend Date</span>
            <span className="  ">2023-11-16</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Dividend Amount Per Share</span>
            <span className="  ">$0.24</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Dividend Yield</span>
            <span className="  ">0.5</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Payout Ratio</span>
            <span className="  ">15.49%</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Dividend Growth</span>
            <span className="  ">1.57%</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">P/E</span>
            <span className="  ">31.4</span>
          </div>
        </div>
      </div>

      <div className=" border dark:border-main-gray-600 ">
        <h4 className=" border-b px-4 py-5 text-lg font-bold sm:text-2xl dark:border-main-gray-600 ">
          Dividend Yield Range
        </h4>

        <div className=" overflow-x-auto px-4 py-10 ">
          <ResponsiveContainer width={"100%"} height={400}>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                className=" stroke-main-gray-400 dark:stroke-white/40"
              />
              <XAxis dataKey="name" tickLine={false} />
              <YAxis tickLine={false} />
              <Tooltip />
              <Area
                dataKey="pv"
                dot={{
                  r: 3,
                  z: 100,
                  fill: tailwindCSS().theme.colors.white,
                  stroke: tailwindCSS().theme.colors.primary.base,
                }}
                stackId="1"
                fill={"none"}
                stroke={tailwindCSS().theme.colors.primary.base}
              />
              <Area
                dataKey="uv"
                dot={{
                  r: 3,
                  z: 100,
                  fill: tailwindCSS().theme.colors.white,
                  stroke: tailwindCSS().theme.colors.primary.base,
                  opacity: 1,
                }}
                stackId="1"
                fill={tailwindCSS().theme.colors.primary.light}
                stroke={tailwindCSS().theme.colors.primary.base}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="  ">
        <h4 className=" py-5 text-lg font-bold sm:text-2xl ">
          Dividend History
        </h4>

        <div className=" overflow-x-auto border dark:border-main-gray-600 ">
          <table className="w-full min-w-[50rem] ">
            <thead>
              <tr className=" th text-sm font-bold ">
                <th className=" p-0 ">
                  <div className=" px-2 py-4 text-left ">Declaration Date</div>
                </th>

                <th className=" p-0 ">
                  <div className=" px-2 py-4 text-right ">Payment Date</div>
                </th>

                <th className=" p-0 ">
                  <div className=" px-2 py-4 text-right ">Record Date</div>
                </th>

                <th className=" p-0 ">
                  <div className=" px-2 py-4 text-right ">Amount</div>
                </th>

                <th className=" p-0 ">
                  <div className=" px-2 py-4 text-right ">Currency</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {Array(10)
                .fill("")
                .map((_, index) => {
                  return (
                    <tr
                      key={`dividends-${index}`}
                      className=" text-sm even:bg-main-gray-100 dark:even:bg-main-gray-900 "
                    >
                      <td className=" px-2 py-4 text-left ">02-03-23</td>

                      <td className={` px-2 py-4 text-right`}>02-03-23</td>

                      <td className=" px-2 py-4 text-right ">02-03-23</td>

                      <td className=" px-2 py-4 text-right">0.24</td>

                      <td className=" px-2 py-4 text-right">USD</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

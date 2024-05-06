"use client";

import { useState } from "react";
import ChartSample from "./chart-sample";
import { cn, tailwindCSS } from "@/lib/utils";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useTheme from "@/store/theme/useTheme";

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

interface IndustrySectorComparisonScreenProps {
  ticker: string;
}

export default function IndustrySectorComparisonScreen(
  props: IndustrySectorComparisonScreenProps
) {
  const { ticker } = props;
  const { theme } = useTheme();
  const [tab, setTab] = useState<"Industry" | "Sector">("Industry");

  function handleTabChange(change: typeof tab) {
    setTab(change);
  }

  return (
    <section className=" space-y-10 py-10 ">
      <div className=" flex w-fit gap-2 rounded bg-[#F5F5F5] p-2 dark:bg-main-gray-900 ">
        <button
          type="button"
          className={cn(
            `flex h-8 items-center justify-center whitespace-nowrap rounded px-4 text-sm font-medium duration-300 hover:bg-black/10 sm:px-7 dark:hover:bg-main-gray-700 `,
            {
              "bg-primary-base text-white hover:bg-primary-base hover:text-white dark:hover:bg-primary-base ":
                tab === "Industry",
            }
          )}
          onClick={(e) => handleTabChange("Industry")}
        >
          INDUSTRY
        </button>

        <button
          type="button"
          className={cn(
            `flex h-8 items-center justify-center whitespace-nowrap rounded px-4 text-sm font-medium duration-300 hover:bg-black/10 sm:px-7 dark:hover:bg-main-gray-700  `,
            {
              "bg-primary-base text-white hover:bg-primary-base hover:text-white dark:hover:bg-primary-base ":
                tab === "Sector",
            }
          )}
          onClick={(e) => handleTabChange("Sector")}
        >
          SECTOR
        </button>
      </div>

      <div className=" overflow-x-auto border dark:border-main-gray-600 ">
        <table className=" w-full min-w-[50rem] ">
          <thead>
            <tr className=" th text-sm font-bold ">
              <th className=" min-w-28 px-2 py-4 text-left ">Name</th>

              <th className=" px-2 py-4 text-left ">Price</th>

              <th className=" px-2 py-4 text-right ">Market Cap</th>

              <th className=" px-2 py-4 text-right ">P/E Ratio</th>

              <th className=" px-2 py-4 text-right ">Yearly Gain</th>

              <th className=" px-2 py-4 text-right ">Analyst Consensus</th>

              <th className=" px-2 py-4 text-right ">Analyst Price Target</th>

              <th className=" px-2 py-4 text-right ">
                Top Analyst Price Target
              </th>

              <th className=" px-2 py-4 text-right ">Smart Score</th>
            </tr>
          </thead>

          <tbody>
            {Array(10)
              .fill("_")
              .map((_, index) => {
                return (
                  <tr
                    key={`forecast-${index}`}
                    className=" text-sm even:bg-main-gray-100  dark:even:bg-main-gray-900 "
                  >
                    <td className=" white-text p-2 text-left text-[#333333]">
                      <div className=" flex flex-col space-y-1 ">
                        <span className=" font-semibold text-[#125BD4] ">
                          AAPL
                        </span>

                        <span className=" font-bold ">Apple</span>
                      </div>
                    </td>

                    <td className={` p-2 text-left`}>$185.92</td>

                    <td className=" p-2 text-right ">$2.89T</td>

                    <td className=" p-2 text-right">30.32</td>

                    <td className=" p-2 text-right text-green-700 ">38.73%</td>

                    <td className=" p-2 text-right text-[#125BD4] ">
                      Moderate Buy
                    </td>

                    <td className=" p-2 text-right text-[#125BD4]">
                      9.38% Upside
                    </td>

                    <td className=" p-2 text-right text-[#125BD4]">
                      9.65% Upside
                    </td>

                    <td className=" p-2 text-right text-green-700 ">8</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className=" border dark:border-main-gray-600 ">
        <div className=" overflow-x-auto py-10 ">
          <ResponsiveContainer width={"100%"} height={350}>
            <LineChart
              data={data}
              // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                className=" stroke-main-gray-400 dark:stroke-white/40"
              />
              <XAxis tickLine={false} dataKey="name" />
              <YAxis />
              <Tooltip
                cursor={false}
                wrapperClassName={" dark:bg-red-500 "}
                contentStyle={{
                  backgroundColor:
                    theme === "dark"
                      ? tailwindCSS().theme.colors.main.gray[200]
                      : "white",
                  border: "none",
                }}
                labelClassName=" text-black "
              />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={4}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
                strokeWidth={4}
              />
              <Legend iconType="circle" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <p className=" border-t bg-gray-100 p-3 text-xs dark:border-main-gray-600 dark:bg-white/10 ">
          Compare key indicators and discover each stock&apos;s average analyst
          price target, as well as the latest recommendations by top Wall Street
          experts
        </p>
      </div>
    </section>
  );
}

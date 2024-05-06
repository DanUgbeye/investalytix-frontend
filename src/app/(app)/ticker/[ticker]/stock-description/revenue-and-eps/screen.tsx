"use client";

import { Button } from "@/components/ui/button";
import { cn, tailwindCSS } from "@/lib/utils";
import useTheme from "@/store/theme/useTheme";
import { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
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

const FINANCIAL_HISTORY_DATA = {
  reportDate: new Date(),
  fiscalQuarter: "2024(Q1)",
  forecast: 2.09,
  current: 1.46,
  lastYear: 1.88,
  yoyChange: 0.17,
  yoyChangePercentage: 13.18,
};

interface RevenueAndEPSScreenProps {
  ticker: string;
}

export default function RevenueAndEPSScreen(props: RevenueAndEPSScreenProps) {
  const { ticker } = props;
  const { theme } = useTheme();
  const [chartTab, setChartTab] = useState<"Earnings" | "Revenue">("Earnings");

  return (
    <section className=" space-y-12 pb-12 ">
      <div className=" space-y-6 ">
        <div className=" flex gap-x-10 px-6 ">
          <Button
            variant={"link"}
            className={cn(
              " rounded-none border-b-2 px-0 font-bold hover:no-underline ",
              {
                " border-b-primary-base ": chartTab === "Earnings",
                " border-transparent hover:text-primary-base ":
                  chartTab !== "Earnings",
              }
            )}
            onClick={() => setChartTab("Earnings")}
          >
            Earnings
          </Button>

          <Button
            variant={"link"}
            className={cn(
              " rounded-none border-b-2 px-0 font-bold hover:no-underline ",
              {
                " border-b-primary-base ": chartTab === "Revenue",
                " border-transparent hover:text-primary-base ":
                  chartTab !== "Revenue",
              }
            )}
            onClick={() => setChartTab("Revenue")}
          >
            Revenue
          </Button>
        </div>

        <div className=" space-y-4 py-5 ">
          <ResponsiveContainer width={"100%"} height={300}>
            <BarChart data={data}>
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                className=" stroke-main-gray-400 dark:stroke-white/40"
              />
              <XAxis tickLine={false} dataKey="name" />
              <YAxis tickLine={false} />
              <Tooltip
                cursor={{
                  className: " fill-main-gray-200/50 dark:fill-white/20 ",
                }}
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
              <Bar dataKey="pv" fill="#2563eb" />
              <Bar dataKey="uv" fill="#1E417B" />
            </BarChart>
          </ResponsiveContainer>

          <div className=" flex flex-wrap items-center gap-8 px-6 ">
            <div className=" flex items-center gap-x-2 ">
              <span className=" size-3 rounded-sm bg-blue-600 " />
              <span className="  ">Estimated EPS</span>
            </div>

            <div className=" flex items-center gap-x-2 ">
              <span className=" size-3 rounded-sm bg-[#1E417B] " />
              <span className="  ">Reported EPS</span>
            </div>
          </div>
        </div>
      </div>

      {/* EARNINGS SECTION */}
      <div className=" space-y-6 ">
        <h3 className=" text-2xl font-bold ">Earning History</h3>

        <div className=" space-y-6 ">
          <div className=" ">
            <div className=" overflow-y-auto border dark:border-main-gray-600 ">
              <table className="w-full min-w-[50rem] ">
                <thead>
                  <tr className=" th  text-sm font-bold ">
                    <th className=" px-2 py-4 text-left ">Report Date</th>

                    <th className=" px-2 py-4 text-right ">Fiscal Quarter</th>

                    <th className=" px-2 py-4 text-right ">Forecast/EPS</th>

                    <th className=" px-2 py-4 text-right ">
                      Last Year&apos;s EPS
                    </th>

                    <th className=" px-2 py-4 text-right ">EPS YoY Change</th>
                  </tr>
                </thead>

                <tbody>
                  {Array<typeof FINANCIAL_HISTORY_DATA>(10)
                    .fill(FINANCIAL_HISTORY_DATA)
                    .map((item, index) => {
                      return (
                        <tr
                          key={`earning-history-${index}`}
                          className=" text-sm even:bg-main-gray-100  dark:even:bg-main-gray-900 "
                        >
                          <td className=" px-2 py-4 text-left ">
                            {item.reportDate.toDateString()}
                          </td>

                          <td className={` px-2 py-4 text-right`}>
                            {item.fiscalQuarter}
                          </td>

                          <td className=" px-2 py-4 text-right">
                            <span className=" ">{item.forecast}</span>/
                            <span
                              className={cn({
                                " text-green-600 ":
                                  item.current && item.current > item.forecast,
                                " text-red-600 ":
                                  item.current && item.current < item.forecast,
                              })}
                            >
                              {item.current ? Math.abs(item.current) : "-"}
                            </span>
                          </td>

                          <td className=" px-2 py-4 text-right">
                            {item.lastYear}
                          </td>

                          <td className=" px-2 py-4 text-right">
                            {item.yoyChangePercentage.toPrecision(2)}% (
                            {item.yoyChange > 0 && "+"}
                            {item.yoyChange.toPrecision(2)})
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <div className=" flex flex-wrap items-center gap-x-10 gap-y-2 border bg-main-gray-300 px-4 py-6 text-xs dark:border-main-gray-600 dark:bg-white/10  ">
              <div className="  ">
                The table shows recent earnings report dates and whether the
                forecast was beat or missed. See the change in forecast and EPS
                from the previous year.
              </div>

              <div className=" flex items-center gap-x-5 ">
                <span className=" flex items-center gap-x-2 ">
                  <span className=" size-3 rounded-sm bg-green-600 " />
                  Beat
                </span>

                <span className=" flex items-center gap-x-2 ">
                  <span className=" size-3 rounded-sm bg-red-600 " />
                  Missed
                </span>
              </div>
            </div>
          </div>

          <div className=" flex justify-center ">
            <Button className=" gap-x-3 ">+ Show More</Button>
          </div>
        </div>
      </div>

      {/* REVENUE SECTION */}
      <div className=" space-y-6 ">
        <h3 className=" text-2xl font-bold ">Revenue History</h3>

        <div className=" space-y-6 ">
          <div className=" ">
            <div className=" overflow-y-auto border dark:border-main-gray-600 ">
              <table className="w-full min-w-[50rem] ">
                <thead>
                  <tr className=" th text-sm font-semibold dark:bg-white/20 ">
                    <th className=" px-2 py-4 text-left ">Report Date</th>

                    <th className=" px-2 py-4 text-right ">Fiscal Quarter</th>

                    <th className=" px-2 py-4 text-right ">Revenue</th>

                    <th className=" px-2 py-4 text-right ">
                      Last Year&apos;s Revenue
                    </th>

                    <th className=" px-2 py-4 text-right ">
                      Revenue YoY Change
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {Array<typeof FINANCIAL_HISTORY_DATA>(10)
                    .fill(FINANCIAL_HISTORY_DATA)
                    .map((item, index) => {
                      return (
                        <tr
                          key={`revenue-history-${index}`}
                          className=" text-sm even:bg-main-gray-100  dark:even:bg-main-gray-900 "
                        >
                          <td className=" px-2 py-4 text-left ">
                            {item.reportDate.toDateString()}
                          </td>

                          <td className={` px-2 py-4 text-right`}>
                            {item.fiscalQuarter}
                          </td>

                          <td className=" px-2 py-4 text-right">
                            {item.current || "-"}
                          </td>

                          <td className=" px-2 py-4 text-right">
                            {item.lastYear}
                          </td>

                          <td className=" px-2 py-4 text-right">
                            {item.yoyChangePercentage.toPrecision(2)}% (
                            {item.yoyChange > 0 && "+"}
                            {item.yoyChange.toPrecision(2)})
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <div className=" flex flex-wrap items-center gap-x-10 gap-y-2 border bg-main-gray-300 px-4 py-6 text-xs dark:border-main-gray-600 dark:bg-white/10  ">
              <div className="  ">
                The table shows recent earnings report dates and whether the
                forecast was beat or missed. See the change in forecast and EPS
                from the previous year.
              </div>
            </div>
          </div>

          <div className=" flex justify-center ">
            <Button className=" gap-x-3 ">+ Show More</Button>
          </div>
        </div>
      </div>

      <div className=" space-y-4 ">
        <h4 className=" text-xl font-bold ">Earning Estimate Graph</h4>

        <div className="  ">
          <ResponsiveContainer width={"100%"} height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis tickLine={false} dataKey="name" />
              <YAxis tickLine={false} />
              {/* <CartesianGrid ver strokeDasharray="3 3" /> */}
              <Tooltip />

              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />

              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

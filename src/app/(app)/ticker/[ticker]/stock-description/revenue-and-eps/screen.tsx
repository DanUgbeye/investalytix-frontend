"use client";

import { Button } from "@/components/ui/button";
import { cn, tailwindCSS } from "@/lib/utils";
import useAuthStore from "@/modules/auth/store";
import { Earning } from "@/modules/ticker/types";
import useTheme from "@/store/theme/useTheme";
import { Quote } from "@/types";
import appUtils from "@/utils/app-util";
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

interface RevenueAndEPSScreenProps {
  ticker: string;
  quote: Quote;
  earnings: Earning[];
}

export default function RevenueAndEPSScreen(props: RevenueAndEPSScreenProps) {
  const { ticker, quote, earnings } = props;
  const { theme } = useTheme();
  const user = useAuthStore(({ user }) => user);
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

        <div className="  ">
          {chartTab === "Earnings" && (
            <>
              {/* EARNINGS */}
              <div className="  ">
                <ResponsiveContainer
                  width={"100%"}
                  height={300}
                  className={" text-xs md:text-sm "}
                >
                  <BarChart
                    data={earnings
                      .filter(
                        (earnings) =>
                          earnings.date.getTime() < new Date().getTime()
                      )
                      .slice(0, 10)}
                  >
                    <CartesianGrid
                      vertical={false}
                      strokeDasharray="3 3"
                      className=" stroke-main-gray-400 dark:stroke-white/40"
                    />
                    <XAxis
                      tickLine={false}
                      dataKey={"date"}
                      tickFormatter={(value) =>
                        new Date(value).toLocaleDateString()
                      }
                    />
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
                      labelFormatter={(label) =>
                        new Date(label).toLocaleDateString()
                      }
                    />
                    <Bar
                      dataKey="epsEstimated"
                      name={"EPS Estimated"}
                      fill={"#2563eb"}
                    />
                    <Bar dataKey="eps" name={"EPS"} fill="#1E417B" />
                    <Legend className=" pt-3 " margin={{ top: 32 }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          )}

          {chartTab === "Revenue" && (
            <>
              {/* REVENUE */}
              <div className="  ">
                <ResponsiveContainer
                  width={"100%"}
                  height={300}
                  className={" text-xs md:text-sm "}
                >
                  <BarChart
                    data={earnings
                      .filter(
                        (earnings) =>
                          earnings.date.getTime() < new Date().getTime()
                      )
                      .slice(0, 10)}
                  >
                    <CartesianGrid
                      vertical={false}
                      strokeDasharray="3 3"
                      className=" stroke-main-gray-400 dark:stroke-white/40"
                    />
                    <XAxis
                      tickLine={false}
                      dataKey={"date"}
                      tickFormatter={(value) =>
                        new Date(value).toLocaleDateString()
                      }
                    />
                    <YAxis
                      tickLine={false}
                      tickFormatter={(value) =>
                        appUtils.formatNumber(value, { notation: "compact" })
                      }
                    />
                    <Tooltip
                      cursor={{
                        className: " fill-main-gray-200/50 dark:fill-white/20 ",
                      }}
                      formatter={(value) =>
                        appUtils.formatNumber(
                          value ? Number(value) : undefined,
                          { notation: "compact" }
                        )
                      }
                      wrapperClassName={"  "}
                      contentStyle={{
                        backgroundColor:
                          theme === "dark"
                            ? tailwindCSS().theme.colors.main.gray[300]
                            : "white",
                        border: "none",
                      }}
                      labelClassName=" text-black "
                      labelFormatter={(label) =>
                        new Date(label).toLocaleDateString()
                      }
                    />
                    <Bar
                      dataKey="revenueEstimated"
                      name={"Revenue Estimated"}
                      fill={"#2563eb"}
                    />
                    <Bar dataKey="revenue" name={"Revenue"} fill="#1E417B" />
                    <Legend className=" pt-3 " margin={{ top: 32 }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          )}
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

                    <th className=" px-2 py-4 text-center ">Fiscal Date</th>

                    <th className=" px-2 py-4 text-center ">Forecast</th>

                    <th className=" px-2 py-4 text-center ">EPS</th>

                    <th className=" px-2 py-4 text-center ">
                      Last Year&apos;s EPS
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {earnings.map((earning, index) => {
                    return (
                      <tr
                        key={`earning-history-${index}`}
                        className=" text-sm even:bg-main-gray-100  dark:even:bg-main-gray-900 "
                      >
                        <td className=" px-2 py-4 text-left ">
                          {earning.date.toLocaleDateString()}
                        </td>

                        <td className={` px-2 py-4 text-center`}>
                          {earning.fiscalDateEnding.toLocaleDateString()}
                        </td>

                        <td className=" px-2 py-4 text-center">
                          <span className=" ">
                            {appUtils.formatNumber(
                              earning.epsEstimated || undefined,
                              { style: "decimal", minimumFractionDigits: 2 }
                            )}
                          </span>
                        </td>

                        <td className=" px-2 py-4 text-center">
                          <span
                            className={cn({
                              " text-green-600 ":
                                earning.eps &&
                                earning.epsEstimated &&
                                earning.eps > earning.epsEstimated,
                              " text-red-600 ":
                                earning.eps &&
                                earning.epsEstimated &&
                                earning.eps < earning.epsEstimated,
                            })}
                          >
                            {appUtils.formatNumber(earning.eps || undefined, {
                              style: "decimal",
                              minimumFractionDigits: 2,
                            })}
                          </span>
                        </td>

                        <td className=" px-2 py-4 text-center">
                          {appUtils.formatNumber(
                            earnings[index + 1]?.eps || undefined,
                            {
                              style: "decimal",
                              minimumFractionDigits: 2,
                            }
                          )}
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

          {user === undefined && (
            <div className=" flex justify-center ">
              <Button className=" gap-x-3 ">+ Show More</Button>
            </div>
          )}
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

                    <th className=" px-2 py-4 text-center ">Fiscal Date</th>

                    <th className=" px-2 py-4 text-center ">Estimated</th>

                    <th className=" px-2 py-4 text-center ">Revenue</th>

                    <th className=" px-2 py-4 text-center ">
                      Last Year&apos;s Revenue
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {earnings.map((earning, index) => {
                    return (
                      <tr
                        key={`revenue-history-${index}`}
                        className=" text-sm even:bg-main-gray-100  dark:even:bg-main-gray-900 "
                      >
                        <td className=" px-2 py-4 text-left ">
                          {earning.date.toLocaleDateString()}
                        </td>

                        <td className={` px-2 py-4 text-center`}>
                          {earning.fiscalDateEnding.toLocaleDateString()}
                        </td>

                        <td className=" px-2 py-4 text-center">
                          <span className=" ">
                            {appUtils.formatNumber(
                              earning.revenueEstimated || undefined,
                              { notation: "compact", minimumFractionDigits: 2 }
                            )}
                          </span>
                        </td>

                        <td className=" px-2 py-4 text-center">
                          <span
                            className={cn({
                              " text-green-600 ":
                                earning.revenue &&
                                earning.revenueEstimated &&
                                earning.revenue > earning.revenueEstimated,
                              " text-red-600 ":
                                earning.revenue &&
                                earning.revenueEstimated &&
                                earning.revenue < earning.revenueEstimated,
                            })}
                          >
                            {appUtils.formatNumber(
                              earning.revenue || undefined,
                              {
                                notation: "compact",
                                minimumFractionDigits: 2,
                              }
                            )}
                          </span>
                        </td>

                        <td className=" px-2 py-4 text-center">
                          {appUtils.formatNumber(
                            earnings[index + 1]?.revenue || undefined,
                            {
                              notation: "compact",
                              minimumFractionDigits: 2,
                            }
                          )}
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
                forecast was beat or missed. See the change in forecast and
                Revenue from the previous year.
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

          {user === undefined && (
            <div className=" flex justify-center ">
              <Button className=" gap-x-3 ">+ Show More</Button>
            </div>
          )}
        </div>
      </div>

      <div className=" space-y-4 ">
        <h4 className=" text-xl font-bold ">Earning Estimate Graph</h4>

        <div className="  ">
          <ResponsiveContainer
            width={"100%"}
            height={300}
            className={" text-xs md:text-sm "}
          >
            <AreaChart
              data={earnings
                .filter(
                  (earnings) => earnings.date.getTime() < new Date().getTime()
                )
                .slice(0, 10)
                .reverse()}
            >
              <defs>
                <linearGradient id="epsEstimated" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>

                <linearGradient id="eps" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                tickLine={false}
                dataKey="date"
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
              />

              <YAxis
                tickLine={false}
                tickFormatter={(value) =>
                  appUtils.formatNumber(value, {
                    notation: "compact",
                    style: "decimal",
                  })
                }
              />

              <Tooltip
                cursor={{
                  className: " fill-main-gray-200/50 dark:fill-white/20 ",
                }}
                formatter={(value) =>
                  appUtils.formatNumber(value ? Number(value) : undefined, {
                    notation: "compact",
                    style: "decimal",
                  })
                }
                wrapperClassName={"  "}
                contentStyle={{
                  backgroundColor:
                    theme === "dark"
                      ? tailwindCSS().theme.colors.main.gray[100]
                      : "white",
                  border: "none",
                }}
                labelClassName=" text-black "
                labelFormatter={(label) => new Date(label).toLocaleDateString()}
              />

              <Area
                type="monotone"
                dataKey="eps"
                name="EPS"
                stroke="#82ca9d"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#eps)"
              />

              <Area
                type="monotone"
                dataKey="epsEstimated"
                name="EPS Estimated"
                stroke="#8884d8"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#epsEstimated)"
              />

              <Legend
                className=" pt-3 "
                verticalAlign="top"
                align="right"
                // margin={{ top: 40 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

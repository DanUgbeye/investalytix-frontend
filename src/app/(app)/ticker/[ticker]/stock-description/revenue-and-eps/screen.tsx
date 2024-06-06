"use client";

import HeaderWithUnderline from "@/components/heading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import useAuthStore from "@/modules/auth/store";
import { Earning } from "@/modules/ticker/types";
import useTheme from "@/store/theme/useTheme";
import { Quote } from "@/types";
import appUtils from "@/utils/app-util";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface RevenueAndEPSScreenProps {
  ticker: string;
  quote: Quote;
  earnings: Earning[];
  currency: string;
}

export default function RevenueAndEPSScreen(props: RevenueAndEPSScreenProps) {
  const { ticker, quote, earnings, currency } = props;
  const { theme } = useTheme();
  const user = useAuthStore(({ user }) => user);
  const [showAll, setShowAll] = useState<"EPS" | "Revenue" | undefined>();

  function handleShoMore(show?: typeof showAll) {
    // TODO handle unauthenticated users
    setShowAll(showAll === show ? undefined : show);
  }

  return (
    <section className=" space-y-12 pb-12 ">
      {/* EARNINGS SECTION */}
      <section className=" space-y-5 ">
        <HeaderWithUnderline>EPS</HeaderWithUnderline>

        <div className="  ">
          <div className=" py-10 ">
            <ResponsiveContainer
              width={"100%"}
              height={180}
              className={" text-xs md:text-sm "}
            >
              <BarChart
                data={earnings
                  .filter(
                    (earning) =>
                      earning.epsEstimated !== null || earning.eps !== null
                  )
                  .slice(0, 10)
                  .reverse()}
              >
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  className=" stroke-main-gray-200 dark:stroke-main-gray-700"
                />

                <XAxis
                  axisLine={false}
                  tickLine={false}
                  dataKey={"date"}
                  tickFormatter={(value) => {
                    const { quarter, year } = appUtils.getYearAndQuarter(
                      value || new Date()
                    );
                    return `${quarter} '${year}`;
                  }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  orientation="right"
                  tickFormatter={(value) =>
                    appUtils.formatNumber(value, {
                      style: "decimal",
                      minimumFractionDigits: 2,
                    })
                  }
                />

                <Tooltip
                  cursor={{
                    className: " fill-main-gray-200/20 dark:fill-white/10 ",
                  }}
                  content={(props) => {
                    const { payload, label } = props;
                    const { quarter, year } = appUtils.getYearAndQuarter(
                      label || new Date()
                    );

                    return (
                      <div className=" space-y-2 rounded bg-main-gray-700 p-2 text-main-gray-300 ">
                        {label && (
                          <div className="  ">
                            {quarter} '{year}
                          </div>
                        )}

                        <div className="">
                          {payload &&
                            payload.map((pl, index) => {
                              const { name, value } = pl;

                              return (
                                <div
                                  key={`${value}-${index}`}
                                  className=" text-main-gray-300 "
                                >
                                  {name}: {value}
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  }}
                />

                <Bar
                  dataKey="eps"
                  name={"Reported"}
                  fill="#448AFF"
                  radius={[2, 2, 0, 0]}
                  maxBarSize={25}
                />

                <Bar
                  dataKey="epsEstimated"
                  name={"Estimate"}
                  fill={theme === "dark" ? "#434651" : "#E0E3EB"}
                  radius={[2, 2, 0, 0]}
                  maxBarSize={25}
                />

                <Legend
                  content={(props) => {
                    const { payload } = props;

                    return (
                      <div className=" flex items-center gap-x-4 py-2 sm:justify-center ">
                        {payload &&
                          payload.map((pl, index) => {
                            const { value, color } = pl;

                            return (
                              <span
                                key={`${value}`}
                                className=" text-black dark:text-main-gray-300 "
                              >
                                <span
                                  style={{
                                    display: "inline-block",
                                    width: 12,
                                    height: 12,
                                    backgroundColor: color,
                                    marginRight: 8,
                                  }}
                                ></span>

                                {value}
                              </span>
                            );
                          })}
                      </div>
                    );
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className=" space-y-6 ">
            <div className="  ">
              <h3 className=" font-extrabold ">Earning History</h3>
              {/* <span className="  ">
                Currency: USD
              </span> */}
            </div>

            <div className=" space-y-6 ">
              <div className=" space-y-1 ">
                <div className=" overflow-y-auto ">
                  <Table className=" w-full min-w-[50rem] border-b-2 dark:border-main-gray-900 ">
                    <TableHeader className="">
                      <TableRow className=" border-y-2 text-sm hover:bg-transparent dark:border-main-gray-900 dark:hover:bg-transparent ">
                        <TableHead className=" py-4 text-left font-normal ">
                          Report Date
                        </TableHead>

                        <TableHead className=" py-4 text-center font-normal ">
                          Fiscal Year
                        </TableHead>

                        <TableHead className=" py-4 text-center font-normal ">
                          Quarter
                        </TableHead>

                        <TableHead className=" py-4 text-center font-normal ">
                          Forecast
                        </TableHead>

                        <TableHead className=" py-4 text-center font-normal ">
                          EPS
                        </TableHead>

                        <TableHead className=" py-4 text-center font-normal ">
                          Last Year&apos;s EPS
                        </TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {earnings
                        .filter(
                          (earning) =>
                            earning.eps !== null ||
                            earning.epsEstimated !== null
                        )
                        .slice(0, showAll === "EPS" ? -1 : 10)
                        .map((earning, index) => {
                          const { quarter, year } = appUtils.getYearAndQuarter(
                            earning.date
                          );

                          return (
                            <TableRow
                              key={`earning-history-${index}`}
                              className=" border-y-2 text-sm dark:border-y-main-gray-900 dark:text-main-gray-300 dark:odd:bg-transparent "
                            >
                              <TableCell className=" py-3 text-left ">
                                {earning.date.toDateString()}
                              </TableCell>

                              <TableCell className={` py-3 text-center `}>
                                {year}
                              </TableCell>

                              <TableCell className={` py-3 text-center `}>
                                {quarter}
                              </TableCell>

                              <TableCell className=" py-3 text-center ">
                                <span className=" ">
                                  {appUtils.formatNumber(
                                    earning.epsEstimated || undefined,
                                    {
                                      style: "decimal",
                                      minimumFractionDigits: 2,
                                    }
                                  )}
                                </span>
                              </TableCell>

                              <TableCell className=" py-3 text-center ">
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
                                  {appUtils.formatNumber(
                                    earning.eps || undefined,
                                    {
                                      style: "decimal",
                                      minimumFractionDigits: 2,
                                    }
                                  )}
                                </span>
                              </TableCell>

                              <TableCell className=" py-3 text-center ">
                                {appUtils.formatNumber(
                                  earnings[index + 1]?.eps || undefined,
                                  {
                                    style: "decimal",
                                    minimumFractionDigits: 2,
                                  }
                                )}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </div>

                <div className=" flex justify-center ">
                  <Button
                    variant={"link"}
                    className=" h-fit gap-x-2 py-2 text-primary-base hover:no-underline dark:text-primary-base "
                    onClick={() => handleShoMore("EPS")}
                  >
                    {showAll === "EPS" ? (
                      <>
                        <Minus className=" size-4 " />
                        Show Less
                      </>
                    ) : (
                      <>
                        <Plus className=" size-4 " />
                        Show More
                      </>
                    )}
                  </Button>
                </div>

                <div className=" flex flex-wrap items-center gap-x-10 gap-y-2 border-y bg-main-gray-100 px-4 py-6 text-xs dark:border-main-gray-900 dark:bg-main-gray-800  ">
                  <div className="  ">
                    The table shows recent earnings report dates and whether the
                    forecast was beat or missed. See the change in forecast and
                    EPS from the previous year.
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
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE SECTION */}
      <section className=" space-y-5 ">
        <HeaderWithUnderline>Revenue</HeaderWithUnderline>

        <div className="  ">
          <div className=" py-10 ">
            <ResponsiveContainer
              width={"100%"}
              height={180}
              className={" text-xs md:text-sm "}
            >
              <BarChart
                data={earnings
                  .filter(
                    (earning) =>
                      earning.epsEstimated !== null || earning.eps !== null
                  )
                  .slice(0, 10)
                  .reverse()}
              >
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  className=" stroke-main-gray-200 dark:stroke-main-gray-700"
                />

                <XAxis
                  axisLine={false}
                  tickLine={false}
                  dataKey={"date"}
                  tickFormatter={(value) => {
                    const { quarter, year } = appUtils.getYearAndQuarter(
                      value || new Date()
                    );
                    return `${quarter} '${year}`;
                  }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  orientation="right"
                  tickFormatter={(value) =>
                    appUtils.formatNumber(value, {
                      style: "decimal",
                      notation: "compact",
                      maximumFractionDigits: 0,
                    })
                  }
                />

                <Tooltip
                  cursor={{
                    className: " fill-main-gray-200/20 dark:fill-white/10 ",
                  }}
                  content={(props) => {
                    const { payload, label } = props;
                    const { quarter, year } = appUtils.getYearAndQuarter(
                      label || new Date()
                    );

                    return (
                      <div className=" space-y-2 rounded bg-main-gray-700 p-2 text-main-gray-300 ">
                        {label && (
                          <div className="  ">
                            {quarter} '{year}
                          </div>
                        )}

                        <div className="">
                          {payload &&
                            payload.map((pl, index) => {
                              const { name, value } = pl;

                              return (
                                <div
                                  key={`${value}-${index}`}
                                  className=" text-main-gray-300 "
                                >
                                  {name}:{" "}
                                  {appUtils.formatNumber(value as number, {
                                    style: "decimal",
                                    notation: "compact",
                                    maximumFractionDigits: 2,
                                  })}
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  }}
                />

                <Bar
                  dataKey="revenue"
                  name={"Reported"}
                  fill="#FBBC05"
                  radius={[2, 2, 0, 0]}
                  maxBarSize={25}
                />

                <Bar
                  dataKey="revenueEstimated"
                  name={"Estimate"}
                  fill={theme === "dark" ? "#434651" : "#E0E3EB"}
                  radius={[2, 2, 0, 0]}
                  maxBarSize={25}
                />

                <Legend
                  content={(props) => {
                    const { payload } = props;

                    return (
                      <div className=" flex items-center gap-x-4 py-2 sm:justify-center ">
                        {payload &&
                          payload.map((pl, index) => {
                            const { value, color } = pl;

                            return (
                              <span
                                key={`${value}`}
                                className=" text-black dark:text-main-gray-300 "
                              >
                                <span
                                  style={{
                                    display: "inline-block",
                                    width: 12,
                                    height: 12,
                                    backgroundColor: color,
                                    marginRight: 8,
                                  }}
                                ></span>

                                {value}
                              </span>
                            );
                          })}
                      </div>
                    );
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className=" space-y-6 ">
            <h3 className="font-extrabold ">Revenue History</h3>

            <div className=" space-y-6 ">
              <div className=" ">
                <div className=" overflow-y-auto ">
                  <Table className="w-full min-w-[50rem] border-b-2 dark:border-main-gray-900 ">
                    <TableHeader>
                      <TableRow className=" border-y-2 text-sm hover:bg-transparent dark:border-y-main-gray-900 dark:hover:bg-transparent ">
                        <TableHead className=" px-2 py-2 text-left ">
                          Report Date
                        </TableHead>

                        <TableHead className=" py-4 text-center font-normal ">
                          Fiscal Year
                        </TableHead>

                        <TableHead className=" py-4 text-center font-normal ">
                          Quarter
                        </TableHead>

                        <TableHead className=" px-2 py-2 text-center ">
                          Estimated
                        </TableHead>

                        <TableHead className=" px-2 py-2 text-center ">
                          Revenue
                        </TableHead>

                        <TableHead className=" px-2 py-2 text-center ">
                          Last Year&apos;s Revenue
                        </TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {earnings
                        .filter(
                          (earning) =>
                            earning.revenue !== null ||
                            earning.revenueEstimated !== null
                        )
                        .slice(0, showAll === "Revenue" ? -1 : 10)
                        .map((earning, index) => {
                          const { quarter, year } = appUtils.getYearAndQuarter(
                            earning.date
                          );

                          return (
                            <TableRow
                              key={`revenue-history-${index}`}
                              className=" border-y-2 text-sm dark:border-main-gray-900 dark:text-main-gray-300 dark:odd:bg-transparent "
                            >
                              <TableCell className=" px-2 py-2 text-left ">
                                {earning.date.toDateString()}
                              </TableCell>

                              <TableCell className={` py-3 text-center `}>
                                {year}
                              </TableCell>

                              <TableCell className={` py-3 text-center `}>
                                {quarter}
                              </TableCell>

                              <TableCell className=" px-2 py-2 text-center">
                                <span className=" ">
                                  {appUtils.formatNumber(
                                    earning.revenueEstimated || undefined,
                                    {
                                      currency,
                                      notation: "compact",
                                      minimumFractionDigits: 2,
                                    }
                                  )}
                                </span>
                              </TableCell>

                              <TableCell className=" px-2 py-2 text-center">
                                <span
                                  className={cn({
                                    " text-green-600 ":
                                      earning.revenue &&
                                      earning.revenueEstimated &&
                                      earning.revenue >
                                        earning.revenueEstimated,
                                    " text-red-600 ":
                                      earning.revenue &&
                                      earning.revenueEstimated &&
                                      earning.revenue <
                                        earning.revenueEstimated,
                                  })}
                                >
                                  {appUtils.formatNumber(
                                    earning.revenue || undefined,
                                    {
                                      currency,
                                      notation: "compact",
                                      minimumFractionDigits: 2,
                                    }
                                  )}
                                </span>
                              </TableCell>

                              <TableCell className=" px-2 py-2 text-center">
                                {appUtils.formatNumber(
                                  earnings[index + 1]?.revenue || undefined,
                                  {
                                    currency,
                                    notation: "compact",
                                    minimumFractionDigits: 2,
                                  }
                                )}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </div>

                <div className=" flex justify-center ">
                  <Button
                    variant={"link"}
                    className=" gap-x-2 text-primary-base hover:no-underline dark:text-primary-base "
                    onClick={() => handleShoMore("Revenue")}
                  >
                    {showAll === "Revenue" ? (
                      <>
                        <Minus className=" size-4 " />
                        Show Less
                      </>
                    ) : (
                      <>
                        <Plus className=" size-4 " />
                        Show More
                      </>
                    )}
                  </Button>
                </div>

                <div className=" flex flex-wrap items-center gap-x-10 gap-y-2 border-y bg-main-gray-100 px-4 py-6 text-xs dark:border-main-gray-900 dark:bg-main-gray-800  ">
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
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

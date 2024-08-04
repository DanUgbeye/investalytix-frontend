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
import useAuthenticatedAction from "@/hooks/use-authenticated-action";
import { cn } from "@/lib/utils";
import { SUBSCRIPTION_PLAN_NAMES } from "@/modules/subscription/types";
import useTheme from "@/store/theme/useTheme";
import appUtils from "@/utils/app-util";
import { dateUtils } from "@/utils/date.utils";
import { differenceInCalendarYears } from "date-fns";
import { Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";
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
import { RevenueEPSPageData } from "./page";
import CLIENT_CONFIG from "@/config/client/app";

interface RevenueAndEPSScreenProps extends RevenueEPSPageData {
  ticker: string;
}

export default function RevenueAndEPSScreen(props: RevenueAndEPSScreenProps) {
  const { ticker, earnings, currency } = props;
  const { theme } = useTheme();
  const authenticateAction = useAuthenticatedAction();
  const [showAll, setShowAll] = useState<"EPS" | "Revenue" | undefined>();

  const filteredEarnings = useMemo(() => {
    return earnings.filter(
      (earning) => earning.eps !== null || earning.epsEstimated !== null
    );
  }, [earnings]);

  const earningsToDisplay = useMemo(() => {
    return filteredEarnings
      .map((earning) => {
        const { quarter, year } = dateUtils.getYearAndQuarter(earning.date);
        return { ...earning, year, quarter };
      })
      .filter((earning) => {
        if (showAll === undefined) {
          return (
            differenceInCalendarYears(new Date(), new Date(earning.date)) <=
            CLIENT_CONFIG.FREE_YEARS_DATA
          );
        }
        return true;
      });
  }, [filteredEarnings, showAll]);

  function handleShowMore(show?: typeof showAll) {
    authenticateAction(
      () => {
        setShowAll(showAll === show ? undefined : show);
      },
      { plan: [SUBSCRIPTION_PLAN_NAMES.PREMIUM] }
    );
  }

  return (
    <section className="space-y-12 pb-12">
      {/* EARNINGS SECTION */}
      <section className="space-y-5">
        <HeaderWithUnderline>EPS</HeaderWithUnderline>

        <div className=" ">
          <div className="py-10">
            <ResponsiveContainer
              width={"100%"}
              height={180}
              className={"text-xs md:text-sm"}
            >
              <BarChart data={filteredEarnings.slice(0, 10).reverse()}>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  className="stroke-main-gray-200 dark:stroke-main-gray-700"
                />

                <XAxis
                  axisLine={false}
                  tickLine={false}
                  dataKey={"date"}
                  tickFormatter={(value) => {
                    const { quarter, year } = dateUtils.getYearAndQuarter(
                      value || new Date()
                    );
                    return `Q${quarter} '${year}`;
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
                    const { quarter, year } = dateUtils.getYearAndQuarter(
                      label || new Date()
                    );

                    return (
                      <div className="space-y-2 rounded bg-main-gray-700 p-2 text-main-gray-300">
                        {label && (
                          <div className=" ">
                            Q{quarter} '{year}
                          </div>
                        )}

                        <div className="">
                          {payload &&
                            payload.map((pl, index) => {
                              const { name, value, color } = pl;

                              return (
                                <div
                                  key={`${value}-${index}`}
                                  className="flex items-center gap-2 text-main-gray-300"
                                >
                                  <span
                                    className="size-3"
                                    style={{ backgroundColor: color }}
                                  />
                                  <span>
                                    {name}: {value}
                                  </span>
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
                  maxBarSize={35}
                />

                <Bar
                  dataKey="epsEstimated"
                  name={"Estimate"}
                  fill={theme === "dark" ? "#434651" : "#E0E3EB"}
                  radius={[2, 2, 0, 0]}
                  maxBarSize={35}
                />

                <Legend
                  content={(props) => {
                    const { payload } = props;

                    return (
                      <div className="flex items-center gap-x-4 py-2 sm:justify-center">
                        {payload &&
                          payload.map((pl, index) => {
                            const { value, color } = pl;

                            return (
                              <span
                                key={`${value}`}
                                className="text-black dark:text-main-gray-300"
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

          <div className="space-y-6">
            <div className="flex flex-wrap items-end gap-4">
              <h3 className="font-extrabold">Earning History</h3>

              <span className="gap-x-1 text-xs">Currency: {currency}</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-1">
                <div className="overflow-y-auto">
                  <Table className="w-full min-w-[50rem]">
                    <TableHeader className="">
                      <TableRow headerRow className=" ">
                        <TableHead className="py-4 text-left font-normal">
                          Report Date
                        </TableHead>

                        <TableHead className="py-4 text-center font-normal">
                          Fiscal Year
                        </TableHead>

                        <TableHead className="py-4 text-center font-normal">
                          Quarter
                        </TableHead>

                        <TableHead className="py-4 text-center font-normal">
                          Forecast
                        </TableHead>

                        <TableHead className="py-4 text-center font-normal">
                          EPS
                        </TableHead>

                        <TableHead className="py-4 text-center font-normal">
                          Last Year&apos;s EPS
                        </TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {earningsToDisplay.map((earning, index) => {
                        return (
                          <TableRow
                            key={`earning-history-${index}`}
                            className=" "
                          >
                            <TableCell className="text-left">
                              {earning.date.toDateString()}
                            </TableCell>

                            <TableCell className={`text-center`}>
                              {earning.year}
                            </TableCell>

                            <TableCell className={`text-center`}>
                              Q{earning.quarter}
                            </TableCell>

                            <TableCell className="text-center">
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

                            <TableCell className="text-center">
                              <span
                                className={cn({
                                  "text-green-600":
                                    earning.eps &&
                                    earning.epsEstimated &&
                                    earning.eps > earning.epsEstimated,
                                  "text-red-600":
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

                            <TableCell className="text-center">
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

                <div className="flex justify-center">
                  <Button
                    variant={"link"}
                    className="h-fit gap-x-2 py-2 text-primary-base hover:no-underline dark:text-primary-base"
                    onClick={() => handleShowMore("EPS")}
                  >
                    {showAll === "EPS" ? (
                      <>
                        <Minus className="size-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <Plus className="size-4" />
                        Show More
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-x-10 gap-y-2 border-y bg-main-gray-100 px-4 py-6 text-xs dark:border-main-gray-900 dark:bg-main-gray-800">
                  <div className=" ">
                    The table shows recent earnings report dates and whether the
                    forecast was beat or missed. See the change in forecast and
                    EPS from the previous year.
                  </div>

                  <div className="flex items-center gap-x-5">
                    <span className="flex items-center gap-x-2">
                      <span className="size-3 rounded-sm bg-green-600" />
                      Beat
                    </span>

                    <span className="flex items-center gap-x-2">
                      <span className="size-3 rounded-sm bg-red-600" />
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
      <section className="space-y-5">
        <HeaderWithUnderline>Revenue</HeaderWithUnderline>

        <div className=" ">
          <div className="py-10">
            <ResponsiveContainer
              width={"100%"}
              height={180}
              className={"text-xs md:text-sm"}
            >
              <BarChart data={filteredEarnings.slice(0, 10).reverse()}>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  className="stroke-main-gray-200 dark:stroke-main-gray-700"
                />

                <XAxis
                  axisLine={false}
                  tickLine={false}
                  dataKey={"date"}
                  tickFormatter={(value) => {
                    const { quarter, year } = dateUtils.getYearAndQuarter(
                      value || new Date()
                    );
                    return `Q${quarter} '${year}`;
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
                    const { quarter, year } = dateUtils.getYearAndQuarter(
                      label || new Date()
                    );

                    return (
                      <div className="space-y-2 rounded bg-main-gray-700 p-2 text-main-gray-300">
                        {label && (
                          <div className=" ">
                            Q{quarter} '{year}
                          </div>
                        )}

                        <div className="">
                          {payload &&
                            payload.map((pl, index) => {
                              const { name, value, color } = pl;

                              return (
                                <div
                                  key={`${value}-${index}`}
                                  className="flex items-center gap-2 text-main-gray-300"
                                >
                                  <span
                                    className="size-3"
                                    style={{ backgroundColor: color }}
                                  />
                                  <span>
                                    {name}:{" "}
                                    {appUtils.formatNumber(value as number, {
                                      style: "decimal",
                                      notation: "compact",
                                      maximumFractionDigits: 2,
                                      minimumFractionDigits: 2,
                                    })}
                                  </span>
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
                  maxBarSize={35}
                />

                <Bar
                  dataKey="revenueEstimated"
                  name={"Estimate"}
                  fill={theme === "dark" ? "#434651" : "#E0E3EB"}
                  radius={[2, 2, 0, 0]}
                  maxBarSize={35}
                />

                <Legend
                  content={(props) => {
                    const { payload } = props;

                    return (
                      <div className="flex items-center gap-x-4 py-2 sm:justify-center">
                        {payload &&
                          payload.map((pl, index) => {
                            const { value, color } = pl;

                            return (
                              <span
                                key={`${value}`}
                                className="text-black dark:text-main-gray-300"
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

          <div className="space-y-6">
            <div className="flex flex-wrap items-end gap-4">
              <h3 className="font-extrabold">Revenue History</h3>

              <span className="gap-x-1 text-xs">Currency: {currency}</span>
            </div>

            <div className="space-y-6">
              <div className=" ">
                <div className="overflow-y-auto">
                  <Table className="w-full min-w-[50rem]">
                    <TableHeader>
                      <TableRow headerRow className=" ">
                        <TableHead className="px-2 py-2 text-left">
                          Report Date
                        </TableHead>

                        <TableHead className="py-4 text-center font-normal">
                          Fiscal Year
                        </TableHead>

                        <TableHead className="py-4 text-center font-normal">
                          Quarter
                        </TableHead>

                        <TableHead className="px-2 py-2 text-center">
                          Estimated
                        </TableHead>

                        <TableHead className="px-2 py-2 text-center">
                          Revenue
                        </TableHead>

                        <TableHead className="px-2 py-2 text-center">
                          Last Year&apos;s Revenue
                        </TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {earningsToDisplay.map((earning, index) => {
                        return (
                          <TableRow key={`revenue-history-${index}`}>
                            <TableCell className="px-2 py-2 text-left">
                              {earning.date.toDateString()}
                            </TableCell>

                            <TableCell className={`text-center`}>
                              {earning.year}
                            </TableCell>

                            <TableCell className={`text-center`}>
                              Q{earning.quarter}
                            </TableCell>

                            <TableCell className="px-2 py-2 text-center">
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

                            <TableCell className="px-2 py-2 text-center">
                              <span
                                className={cn({
                                  "text-green-600":
                                    earning.revenue &&
                                    earning.revenueEstimated &&
                                    earning.revenue > earning.revenueEstimated,
                                  "text-red-600":
                                    earning.revenue &&
                                    earning.revenueEstimated &&
                                    earning.revenue < earning.revenueEstimated,
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

                            <TableCell className="px-2 py-2 text-center">
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

                <div className="flex justify-center">
                  <Button
                    variant={"link"}
                    className="gap-x-2 text-primary-base hover:no-underline dark:text-primary-base"
                    onClick={() => handleShowMore("Revenue")}
                  >
                    {showAll === "Revenue" ? (
                      <>
                        <Minus className="size-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <Plus className="size-4" />
                        Show More
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-x-10 gap-y-2 border-y bg-main-gray-100 px-4 py-6 text-xs dark:border-main-gray-900 dark:bg-main-gray-800">
                  <div className=" ">
                    The table shows recent earnings report dates and whether the
                    forecast was beat or missed. See the change in forecast and
                    Revenue from the previous year.
                  </div>

                  <div className="flex items-center gap-x-5">
                    <span className="flex items-center gap-x-2">
                      <span className="size-3 rounded-sm bg-green-600" />
                      Beat
                    </span>

                    <span className="flex items-center gap-x-2">
                      <span className="size-3 rounded-sm bg-red-600" />
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

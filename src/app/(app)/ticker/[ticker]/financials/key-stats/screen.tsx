"use client";

import WithToggle from "@/components/with-toggle";
import { cn } from "@/lib/utils";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import { KEY_STATS_SAMPLE } from "./sample";

interface KeyStatsScreenProps {
  ticker: string;
}

export default function KeyStatsScreen(props: KeyStatsScreenProps) {
  const { ticker } = props;

  return (
    <section className=" pb-12 ">
      <div className=" overflow-x-auto border dark:border-main-gray-600 ">
        <table className=" w-full min-w-[50rem] ">
          <thead>
            <tr className="  th text-sm font-bold ">
              <th className=" px-2 py-3 text-left dark:bg-transparent"></th>

              {KEY_STATS_SAMPLE.balance.map((data, index) => {
                return (
                  <td
                    key={`${data.date}-${index}`}
                    className=" px-2 py-3 text-center dark:bg-transparent"
                  >
                    {format(new Date(data.date), "MMM yy ")}
                  </td>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {/* INCOME STATEMENT */}
            <WithToggle initial={true}>
              {(props) => {
                const { state, toggle } = props;

                return (
                  <>
                    <tr
                      onClick={(e) => toggle()}
                      className={cn(
                        " cursor-pointer border-y text-sm font-bold dark:border-main-gray-600",
                        {
                          " bg-main-gray-100 dark:bg-main-gray-900 ": state,
                        }
                      )}
                    >
                      <th className=" px-2 py-3 text-left dark:bg-transparent">
                        <div className=" flex items-center gap-x-1 ">
                          <span>Income Statement</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {KEY_STATS_SAMPLE.balance.map((data, index) => {
                        return <td key={`forecast-month-${index}`} />;
                      })}
                    </tr>

                    {state && (
                      <>
                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Total Revenue
                          </th>

                          {KEY_STATS_SAMPLE.income.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.revenue, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Cost of Revenue
                          </th>

                          {KEY_STATS_SAMPLE.income.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.costOfRevenue, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Gross Profit
                          </th>

                          {KEY_STATS_SAMPLE.income.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.grossProfit, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            EBITDA
                          </th>

                          {KEY_STATS_SAMPLE.income.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.ebitda, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            EPS
                          </th>

                          {KEY_STATS_SAMPLE.income.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.eps, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>
                      </>
                    )}
                  </>
                );
              }}
            </WithToggle>

            {/* BALANCE SHEET STATEMENT */}
            <WithToggle initial={true}>
              {(props) => {
                const { state, toggle } = props;

                return (
                  <>
                    <tr
                      onClick={(e) => toggle()}
                      className={cn(
                        " cursor-pointer border-y text-sm font-bold dark:border-main-gray-600",
                        {
                          " bg-main-gray-100 dark:bg-main-gray-900 ": state,
                        }
                      )}
                    >
                      <th className=" px-2 py-3 text-left dark:bg-transparent">
                        <div className=" flex items-center gap-x-1 ">
                          <span>Balance Sheet</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {KEY_STATS_SAMPLE.balance.map((data, index) => {
                        return <td key={`forecast-month-${index}`} />;
                      })}
                    </tr>

                    {state && (
                      <>
                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Total Assets
                          </th>

                          {KEY_STATS_SAMPLE.balance.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.totalAssets, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Total Debt
                          </th>

                          {KEY_STATS_SAMPLE.balance.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.totalDebt, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Net Debt
                          </th>

                          {KEY_STATS_SAMPLE.balance.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.netDebt, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Total Liabilities
                          </th>

                          {KEY_STATS_SAMPLE.balance.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.totalLiabilities,
                                  {
                                    notation: "compact",
                                    minimumFractionDigits: 1,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Stakeholder Equity
                          </th>

                          {KEY_STATS_SAMPLE.balance.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.totalStockholdersEquity,
                                  {
                                    notation: "compact",
                                    minimumFractionDigits: 1,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      </>
                    )}
                  </>
                );
              }}
            </WithToggle>

            {/* CASH FLOW STATEMENT */}
            <WithToggle initial={true}>
              {(props) => {
                const { state, toggle } = props;

                return (
                  <>
                    <tr
                      onClick={(e) => toggle()}
                      className={cn(
                        " cursor-pointer border-y text-sm font-bold dark:border-main-gray-600",
                        {
                          " bg-main-gray-100 dark:bg-main-gray-900 ": state,
                        }
                      )}
                    >
                      <th className=" px-2 py-3 text-left dark:bg-transparent">
                        <div className=" flex items-center gap-x-1 ">
                          <span>Cash Flow</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {KEY_STATS_SAMPLE.balance.map((data, index) => {
                        return <td key={`forecast-month-${index}`} />;
                      })}
                    </tr>

                    {state && (
                      <>
                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Free Cash Flow
                          </th>

                          {KEY_STATS_SAMPLE.cash.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.freeCashFlow, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Operating Cash Flow
                          </th>

                          {KEY_STATS_SAMPLE.cash.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.operatingCashFlow,
                                  {
                                    notation: "compact",
                                    minimumFractionDigits: 1,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Net Income
                          </th>

                          {KEY_STATS_SAMPLE.cash.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.netIncome, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Stock Repurchases
                          </th>

                          {KEY_STATS_SAMPLE.cash.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.commonStockRepurchased,
                                  {
                                    notation: "compact",
                                    minimumFractionDigits: 1,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Dividend Paid
                          </th>

                          {KEY_STATS_SAMPLE.cash.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.dividendsPaid, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>
                      </>
                    )}
                  </>
                );
              }}
            </WithToggle>
          </tbody>
        </table>
      </div>
    </section>
  );
}

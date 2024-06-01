"use client";

import { buttonVariants } from "@/components/ui/button";
import WithToggle from "@/components/with-toggle";
import { cn } from "@/lib/utils";
import { Financials } from "@/modules/ticker/types";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function getPeriodUrl(path: string, period: string) {
  return `${path}?period=${period}`;
}

interface KeyStatsScreenProps {
  ticker: string;
  financials: Financials;
}

export default function KeyStatsScreen(props: KeyStatsScreenProps) {
  const { ticker, financials } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const period = searchParams.get("period");

  return (
    <section className=" pb-12 ">
      <div className=" mb-6 flex items-center gap-2 ">
        <Link
          href={getPeriodUrl(pathname, "quarterly")}
          className={cn(
            buttonVariants(),
            " pointer-events-none h-9 cursor-pointer ",
            {
              " pointer-events-auto bg-transparent text-main-gray-700 hover:text-white dark:text-main-gray-300 ":
                !!period && period !== "quarterly",
            }
          )}
        >
          Quarterly
        </Link>

        <Link
          href={getPeriodUrl(pathname, "annual")}
          className={cn(
            buttonVariants(),
            " pointer-events-none h-9 cursor-pointer ",
            {
              " pointer-events-auto bg-transparent text-main-gray-700 hover:text-white dark:text-main-gray-300 ":
                period !== "annual",
            }
          )}
        >
          Annual
        </Link>
      </div>

      <div className=" overflow-x-auto border dark:border-main-gray-600 ">
        <table className=" w-full min-w-[50rem] ">
          <thead>
            <tr className="  th text-sm font-bold ">
              <th className=" sticky left-0 bg-inherit px-2 py-3 text-left dark:bg-inherit"></th>

              {financials.balance.map((data, index) => {
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
                        " cursor-pointer border-y text-sm font-bold dark:border-main-gray-600 ",
                        {
                          " bg-main-gray-100 dark:bg-main-gray-900 ": state,
                        }
                      )}
                    >
                      <th className=" sticky left-0 bg-inherit px-2 py-3 text-left dark:bg-inherit">
                        <div className=" flex items-center gap-x-1 ">
                          <span>Income Statement</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {financials.balance.map((data, index) => {
                        return <td key={`forecast-month-${index}`} />;
                      })}
                    </tr>

                    {state && (
                      <>
                        <tr className=" text-sm ">
                          <th className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left font-normal dark:bg-black">
                            Total Revenue
                          </th>

                          {financials.income.map((data, index) => {
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
                          <th className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left font-normal dark:bg-black">
                            Cost of Revenue
                          </th>

                          {financials.income.map((data, index) => {
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
                          <th className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left font-normal dark:bg-black">
                            Gross Profit
                          </th>

                          {financials.income.map((data, index) => {
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
                          <th className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left font-normal dark:bg-black">
                            EBITDA
                          </th>

                          {financials.income.map((data, index) => {
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
                          <th className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left font-normal dark:bg-black">
                            EPS
                          </th>

                          {financials.income.map((data, index) => {
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
                      <th className=" sticky left-0 bg-inherit px-2 py-3 text-left dark:bg-inherit ">
                        <div className=" flex items-center gap-x-1 ">
                          <span>Balance Sheet</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {financials.balance.map((data, index) => {
                        return <td key={`forecast-month-${index}`} />;
                      })}
                    </tr>

                    {state && (
                      <>
                        <tr className=" text-sm ">
                          <th className=" sticky left-0 bg-white py-3 pl-6  pr-2 text-left font-normal dark:bg-black">
                            Total Assets
                          </th>

                          {financials.balance.map((data, index) => {
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
                          <th className=" sticky left-0 bg-white py-3 pl-6  pr-2 text-left font-normal dark:bg-black">
                            Total Debt
                          </th>

                          {financials.balance.map((data, index) => {
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
                          <th className=" sticky left-0 bg-white py-3 pl-6  pr-2 text-left font-normal dark:bg-black">
                            Net Debt
                          </th>

                          {financials.balance.map((data, index) => {
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
                          <th className=" sticky left-0 bg-white py-3 pl-6  pr-2 text-left font-normal dark:bg-black">
                            Total Liabilities
                          </th>

                          {financials.balance.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.totalLiabilities, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" sticky left-0 bg-white py-3 pl-6  pr-2 text-left font-normal dark:bg-black">
                            Stakeholder Equity
                          </th>

                          {financials.balance.map((data, index) => {
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
                      <th className=" sticky left-0 bg-inherit px-2 py-3 text-left dark:bg-inherit ">
                        <div className=" flex items-center gap-x-1 ">
                          <span>Cash Flow</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {financials.balance.map((data, index) => {
                        return <td key={`forecast-month-${index}`} />;
                      })}
                    </tr>

                    {state && (
                      <>
                        <tr className=" text-sm ">
                          <th className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left font-normal dark:bg-black ">
                            Free Cash Flow
                          </th>

                          {financials.cash.map((data, index) => {
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
                          <th className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left font-normal dark:bg-black ">
                            Operating Cash Flow
                          </th>

                          {financials.cash.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.operatingCashFlow, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" text-sm ">
                          <th className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left font-normal dark:bg-black ">
                            Net Income
                          </th>

                          {financials.cash.map((data, index) => {
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
                          <th className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left font-normal dark:bg-black ">
                            Stock Repurchases
                          </th>

                          {financials.cash.map((data, index) => {
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
                          <th className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left font-normal dark:bg-black ">
                            Dividend Paid
                          </th>

                          {financials.cash.map((data, index) => {
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

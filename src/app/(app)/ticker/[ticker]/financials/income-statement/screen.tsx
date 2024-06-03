"use client";

import { buttonVariants } from "@/components/ui/button";
import WithToggle from "@/components/with-toggle";
import { cn } from "@/lib/utils";
import { FinancialPeriod, IncomeStatement } from "@/modules/ticker/types";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { KEY_STATS_SAMPLE } from "../sample";

function getPeriodUrl(path: string, period: string) {
  return `${path}?period=${period}`;
}

const INCOME_STATEMENT_DATA =
  KEY_STATS_SAMPLE.income satisfies IncomeStatement[];

interface IncomeStatementScreenProps {
  ticker: string;
  incomeStatement: IncomeStatement[];
  period?: FinancialPeriod;
}

export default function IncomeStatementScreen(
  props: IncomeStatementScreenProps
) {
  const { ticker, period, incomeStatement } = props;
  const pathname = usePathname();

  return (
    <section className=" pb-12 ">
      <div className=" mb-6 flex items-center gap-2 ">
        <Link
          href={getPeriodUrl(pathname, "quarter")}
          className={cn(
            buttonVariants(),
            " pointer-events-none h-9 cursor-pointer ",
            {
              " pointer-events-auto bg-transparent text-main-gray-700 hover:text-white dark:text-main-gray-300 ":
                !!period && period !== "quarter",
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
              <th className=" sticky left-0 min-w-[20rem] bg-inherit px-4 py-3 text-left dark:bg-inherit "></th>

              {incomeStatement.map((data, index) => {
                return (
                  <td
                    key={`${data.date}-${index}`}
                    className=" px-4 py-3 text-center dark:bg-transparent"
                  >
                    {format(new Date(data.date), "MMM yy ")}
                  </td>
                );
              })}
            </tr>
          </thead>

          <tbody>
            <tr className=" border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" sticky left-0 bg-white px-4 py-3 text-left dark:bg-black">
                Total Revenue
              </th>

              {incomeStatement.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-4 py-3 text-center dark:bg-transparent"
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

            <tr className=" border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" sticky left-0 bg-white px-4 py-3 text-left dark:bg-black">
                Cost of Revenue
              </th>

              {incomeStatement.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-4 py-3 text-center dark:bg-transparent"
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

            <tr className=" border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" sticky left-0 bg-white px-4 py-3 text-left dark:bg-black">
                Gross Profit
              </th>

              {incomeStatement.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-4 py-3 text-center dark:bg-transparent"
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
                      <th
                        className={cn(
                          " sticky left-0 bg-white px-4 py-3 text-left dark:bg-black",
                          { " bg-inherit dark:bg-inherit": state }
                        )}
                      >
                        <div className=" flex items-center gap-x-1 ">
                          <span>Operating Expenses</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {incomeStatement.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-4 py-3 text-center dark:bg-transparent"
                          >
                            {appUtils.formatNumber(data.operatingExpenses, {
                              notation: "compact",
                              minimumFractionDigits: 1,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                        );
                      })}
                    </tr>

                    {state && (
                      <>
                        <tr className=" cursor-pointer text-sm ">
                          <td className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left dark:bg-black">
                            Research and Development
                          </td>

                          {incomeStatement.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-4 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.researchAndDevelopmentExpenses,
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

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left dark:bg-black">
                            General & Administrative Expenses
                          </td>

                          {incomeStatement.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-4 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.generalAndAdministrativeExpenses,
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

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left dark:bg-black">
                            Selling, General & Administrative Expenses
                          </td>

                          {incomeStatement.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-4 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.sellingGeneralAndAdministrativeExpenses,
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

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left dark:bg-black">
                            Selling & Marketing Expenses
                          </td>

                          {incomeStatement.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-4 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.sellingAndMarketingExpenses,
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

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left dark:bg-black">
                            Depreciation and Amortization
                          </td>

                          {incomeStatement.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-4 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.depreciationAndAmortization,
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

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left dark:bg-black">
                            Other Expenses
                          </td>

                          {incomeStatement.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-4 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.otherExpenses, {
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
                      <th
                        className={cn(
                          " sticky left-0 bg-white px-4 py-3 text-left dark:bg-black",
                          { " bg-inherit dark:bg-inherit": state }
                        )}
                      >
                        <div className=" flex items-center gap-x-1 ">
                          <span>Operating Income</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {incomeStatement.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-4 py-3 text-center dark:bg-transparent"
                          >
                            {appUtils.formatNumber(data.operatingExpenses, {
                              notation: "compact",
                              minimumFractionDigits: 1,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                        );
                      })}
                    </tr>

                    {state && (
                      <>
                        <tr className=" cursor-pointer text-sm ">
                          <td className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left dark:bg-black">
                            Total Other Income/Expenses Net
                          </td>

                          {incomeStatement.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-4 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.totalOtherIncomeExpensesNet,
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
                      <th
                        className={cn(
                          " sticky left-0 bg-white px-4 py-3 text-left dark:bg-black",
                          { " bg-inherit dark:bg-inherit": state }
                        )}
                      >
                        <div className=" flex items-center gap-x-1 ">
                          <span>Income Before Tax</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {incomeStatement.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-4 py-3 text-center dark:bg-transparent"
                          >
                            {appUtils.formatNumber(data.incomeBeforeTax, {
                              notation: "compact",
                              minimumFractionDigits: 1,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                        );
                      })}
                    </tr>

                    {state && (
                      <>
                        <tr className=" cursor-pointer text-sm ">
                          <td className=" sticky left-0 bg-white py-3 pl-6 pr-2 text-left dark:bg-black">
                            Income Tax
                          </td>

                          {incomeStatement.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-4 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.incomeTaxExpense, {
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

            <tr className=" cursor-pointer border-y text-sm font-bold dark:border-main-gray-600 ">
              <th className=" sticky left-0 bg-white px-4 py-3 text-left dark:bg-black">
                Net Income
              </th>

              {incomeStatement.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-4 py-3 text-center dark:bg-transparent"
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

            <tr className=" cursor-pointer border-y text-sm font-bold dark:border-main-gray-600 ">
              <th className=" sticky left-0 bg-white px-4 py-3 text-left dark:bg-black">
                EBITDA
              </th>

              {incomeStatement.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-4 py-3 text-center dark:bg-transparent"
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

            <tr className=" cursor-pointer border-y text-sm font-bold dark:border-main-gray-600 ">
              <th className=" sticky left-0 bg-white px-4 py-3 text-left dark:bg-black">
                Average Shares
              </th>

              {incomeStatement.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-4 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatNumber(data.weightedAverageShsOut, {
                      notation: "compact",
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" cursor-pointer border-y text-sm font-bold dark:border-main-gray-600 ">
              <th className=" sticky left-0 bg-white px-4 py-3 text-left dark:bg-black">
                Diluted Average Shares
              </th>

              {incomeStatement.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-4 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatNumber(data.weightedAverageShsOutDil, {
                      notation: "compact",
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" cursor-pointer border-y text-sm font-bold dark:border-main-gray-600 ">
              <th className=" sticky left-0 bg-white px-4 py-3 text-left dark:bg-black">
                EPS
              </th>

              {incomeStatement.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-4 py-3 text-center dark:bg-transparent"
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

            <tr className=" cursor-pointer border-y text-sm font-bold dark:border-main-gray-600 ">
              <th className=" sticky left-0 bg-white px-4 py-3 text-left dark:bg-black">
                EPS Diluted
              </th>

              {incomeStatement.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-4 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatNumber(data.epsdiluted, {
                      notation: "compact",
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

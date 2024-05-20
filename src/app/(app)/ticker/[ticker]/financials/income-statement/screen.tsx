"use client";

import WithToggle from "@/components/with-toggle";
import { cn } from "@/lib/utils";
import { IncomeStatement } from "@/modules/ticker/types";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import { KEY_STATS_SAMPLE } from "../key-stats/sample";

const INCOME_STATEMENT_DATA =
  KEY_STATS_SAMPLE.income satisfies IncomeStatement[];

interface IncomeStatementScreenProps {
  ticker: string;
}

export default function IncomeStatementScreen(
  props: IncomeStatementScreenProps
) {
  const { ticker } = props;

  return (
    <section className=" pb-12 ">
      <div className=" overflow-x-auto border dark:border-main-gray-600 ">
        <table className=" w-full min-w-[50rem] ">
          <thead>
            <tr className="  th text-sm font-bold ">
              <th className=" w-[10rem] px-2 py-3 text-left md:w-[15rem] lg:w-[20rem] dark:bg-transparent"></th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
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
            <tr className=" border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" px-2 py-3 text-left dark:bg-transparent">
                Total Revenue
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatCurrency(data.revenue, {
                      notation: "compact",
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" px-2 py-3 text-left dark:bg-transparent">
                Cost of Revenue
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatCurrency(data.costOfRevenue, {
                      notation: "compact",
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" px-2 py-3 text-left dark:bg-transparent">
                Gross Profit
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatCurrency(data.costOfRevenue, {
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
                        " cursor-pointer border-y text-sm font-bold dark:border-main-gray-600",
                        {
                          " bg-main-gray-100 dark:bg-main-gray-900 ": state,
                        }
                      )}
                    >
                      <th className=" px-2 py-3 text-left dark:bg-transparent">
                        <div className=" flex items-center gap-x-1 ">
                          <span>Operating Expenses</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {INCOME_STATEMENT_DATA.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-2 py-3 text-center dark:bg-transparent"
                          >
                            {appUtils.formatCurrency(data.operatingExpenses, {
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
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Research and Development
                          </td>

                          {INCOME_STATEMENT_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
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
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            General & Administrative Expenses
                          </td>

                          {INCOME_STATEMENT_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
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
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Selling, General & Administrative Expenses
                          </td>

                          {INCOME_STATEMENT_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
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
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Selling & Marketing Expenses
                          </td>

                          {INCOME_STATEMENT_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
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
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Depreciation and Amortization
                          </td>

                          {INCOME_STATEMENT_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
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
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Other Expenses
                          </td>

                          {INCOME_STATEMENT_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(data.otherExpenses, {
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
                        " cursor-pointer border-y text-sm font-bold dark:border-main-gray-600",
                        {
                          " bg-main-gray-100 dark:bg-main-gray-900 ": state,
                        }
                      )}
                    >
                      <th className=" px-2 py-3 text-left dark:bg-transparent">
                        <div className=" flex items-center gap-x-1 ">
                          <span>Operating Income</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {INCOME_STATEMENT_DATA.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-2 py-3 text-center dark:bg-transparent"
                          >
                            {appUtils.formatCurrency(data.operatingExpenses, {
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
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Total Other Income/Expenses Net
                          </td>

                          {INCOME_STATEMENT_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
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
                        " cursor-pointer border-y text-sm font-bold dark:border-main-gray-600",
                        {
                          " bg-main-gray-100 dark:bg-main-gray-900 ": state,
                        }
                      )}
                    >
                      <th className=" px-2 py-3 text-left dark:bg-transparent">
                        <div className=" flex items-center gap-x-1 ">
                          <span>Income Before Tax</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {INCOME_STATEMENT_DATA.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-2 py-3 text-center dark:bg-transparent"
                          >
                            {appUtils.formatCurrency(data.incomeBeforeTax, {
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
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Income Tax
                          </td>

                          {INCOME_STATEMENT_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
                                  data.incomeTaxExpense,
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

            <tr className=" cursor-pointer border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" px-2 py-3 text-left dark:bg-transparent">
                Net Income
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatCurrency(data.netIncome, {
                      notation: "compact",
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" cursor-pointer border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" px-2 py-3 text-left dark:bg-transparent">
                EBITDA
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatCurrency(data.ebitda, {
                      notation: "compact",
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" cursor-pointer border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" px-2 py-3 text-left dark:bg-transparent">
                Average Shares
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatCurrency(data.weightedAverageShsOut, {
                      notation: "compact",
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" cursor-pointer border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" px-2 py-3 text-left dark:bg-transparent">
                Diluted Average Shares
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatCurrency(data.weightedAverageShsOutDil, {
                      notation: "compact",
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" cursor-pointer border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" px-2 py-3 text-left dark:bg-transparent">EPS</th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatCurrency(data.eps, {
                      notation: "compact",
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" cursor-pointer border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" px-2 py-3 text-left dark:bg-transparent">
                EPS Diluted
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatCurrency(data.epsdiluted, {
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

"use client";

import WithToggle from "@/components/with-toggle";
import { cn } from "@/lib/utils";
import { CashFlowStatement } from "@/modules/ticker/types";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import { KEY_STATS_SAMPLE } from "../key-stats/sample";

const CASH_FLOW_DATA = KEY_STATS_SAMPLE.cash satisfies CashFlowStatement[];

interface CashFlowStatementScreenProps {
  ticker: string;
}

export default function CashFlowStatementScreen(
  props: CashFlowStatementScreenProps
) {
  const { ticker } = props;

  return (
    <section className=" pb-12 ">
      <div className=" overflow-x-auto border dark:border-main-gray-600 ">
        <table className=" w-full min-w-[50rem] ">
          <thead>
            <tr className="  th text-sm font-bold ">
              <th className=" w-[10rem] px-2 py-3 text-left md:w-[15rem] lg:w-[20rem] dark:bg-transparent"></th>

              {CASH_FLOW_DATA.map((data, index) => {
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
            {/* OPERATING CASH FLOW */}
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
                          <span>Operating Cash Flow</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {CASH_FLOW_DATA.map((data, index) => {
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

                    {state && (
                      <>
                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Net Income
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
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

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Depreciation & Amortization
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
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
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Deferred Income Taxes
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.deferredIncomeTax,
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
                            Stock Based Compensation
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.stockBasedCompensation,
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
                            Change in Working Capital
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.changeInWorkingCapital,
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
                            Accounts Receivable
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.accountsReceivables,
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
                            Inventory
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.inventory, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Accounts Payable
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.accountsPayables,
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
                            Other Working Capital
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.otherWorkingCapital,
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
                            Other Non-Cash Items
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.otherNonCashItems,
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

            {/* INVESTING CASH FLOW */}
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
                          <span>Investing Cash Flow</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {CASH_FLOW_DATA.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-2 py-3 text-center dark:bg-transparent"
                          >
                            {appUtils.formatNumber(
                              data.netCashUsedForInvestingActivites,
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

                    {state && (
                      <>
                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Investments in Property, Plant & Equipment
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.investmentsInPropertyPlantAndEquipment,
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
                            Net Acquisitions
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.acquisitionsNet, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Investment Purchases
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.purchasesOfInvestments,
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
                            Sales/Maturities of Investments
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.salesMaturitiesOfInvestments,
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
                            Other Investing Activites
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.otherInvestingActivites,
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

            {/* FINANCING CASH FLOW */}
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
                          <span>Financing Cash Flow</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {CASH_FLOW_DATA.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-2 py-3 text-center dark:bg-transparent"
                          >
                            {appUtils.formatNumber(
                              data.netCashUsedProvidedByFinancingActivities,
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

                    {state && (
                      <>
                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Debt Repayment
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.debtRepayment, {
                                  notation: "compact",
                                  minimumFractionDigits: 1,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Common Stock Issued
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.commonStockIssued,
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
                            Common Stock Repurchased
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
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

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Dividends Paid
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
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

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Other Financing Activites
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.otherFinancingActivites,
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

            {/* FREE CASH FLOW */}
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
                          <span>Free Cash Flow</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {CASH_FLOW_DATA.map((data, index) => {
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

                    {state && (
                      <>
                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Operating Cash Flow
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
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

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Capital Expenditures
                          </td>

                          {CASH_FLOW_DATA.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(
                                  data.capitalExpenditure,
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
                Cash at Beginning of Period
              </th>

              {CASH_FLOW_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatNumber(data.cashAtBeginningOfPeriod, {
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
                Cash at End of Period
              </th>

              {CASH_FLOW_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatNumber(data.cashAtEndOfPeriod, {
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
                Net Change In Cash
              </th>

              {CASH_FLOW_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatNumber(data.netChangeInCash, {
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

"use client";

import { buttonVariants } from "@/components/ui/button";
import WithToggle from "@/components/with-toggle";
import { cn } from "@/lib/utils";
import { BalanceSheetStatement, FinancialPeriod } from "@/modules/ticker/types";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { KEY_STATS_SAMPLE } from "../sample";

function getPeriodUrl(path: string, period: string) {
  return `${path}?period=${period}`;
}

const balanceSheet = KEY_STATS_SAMPLE.balance;

interface BalanceSheetScreenProps {
  ticker: string;
  period?: FinancialPeriod;
  balanceSheet: BalanceSheetStatement[];
}

export default function BalanceSheetScreen(props: BalanceSheetScreenProps) {
  const { ticker, period, balanceSheet } = props;
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
              <th className="  sticky left-0 min-w-[20rem] bg-inherit px-4 py-3 text-left dark:bg-inherit "></th>

              {balanceSheet.map((data, index) => {
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
            {/* TOTAL ASSETS */}
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
                      <th
                        className={cn(
                          " sticky left-0 bg-white px-4 py-3 text-left dark:bg-black",
                          { " bg-inherit dark:bg-inherit": state }
                        )}
                      >
                        <div className=" flex items-center gap-x-1 ">
                          <span>Total Assets</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {balanceSheet.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-4 py-3 text-center dark:bg-transparent"
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

                    {state && (
                      <>
                        {/* TOTAL CURENT ASSETS */}
                        <WithToggle>
                          {(props) => {
                            const { state: stateL2, toggle: toggleL2 } = props;

                            return (
                              <>
                                <tr
                                  onClick={(e) => toggleL2()}
                                  className={cn(" cursor-pointer text-sm ")}
                                >
                                  <th className=" sticky left-0 bg-white py-3 pl-6 pr-4 text-left font-normal dark:bg-black">
                                    <div className=" flex items-center gap-x-1 ">
                                      <span>Current Assets</span>
                                      <ChevronRight
                                        className={cn(" size-4 duration-300 ", {
                                          " rotate-90 ": stateL2,
                                        })}
                                      />
                                    </div>
                                  </th>

                                  {balanceSheet.map((data, index) => {
                                    return (
                                      <td
                                        key={`forecast-month-${index}`}
                                        className=" px-4 py-3 text-center dark:bg-transparent"
                                      >
                                        {appUtils.formatNumber(
                                          data.totalCurrentAssets,
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

                                {stateL2 && (
                                  <>
                                    <WithToggle>
                                      {(props) => {
                                        const {
                                          state: stateL3,
                                          toggle: toggleL3,
                                        } = props;

                                        return (
                                          <>
                                            <tr
                                              onClick={(e) => toggleL3()}
                                              className={cn(
                                                " cursor-pointer text-sm "
                                              )}
                                            >
                                              <th className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left font-normal dark:bg-black">
                                                <div className=" flex items-center gap-x-1 ">
                                                  <span>
                                                    Cash & Short Term
                                                    Investments
                                                  </span>
                                                  <ChevronRight
                                                    className={cn(
                                                      " size-4 duration-300 ",
                                                      {
                                                        " rotate-90 ": stateL3,
                                                      }
                                                    )}
                                                  />
                                                </div>
                                              </th>

                                              {balanceSheet.map(
                                                (data, index) => {
                                                  return (
                                                    <td
                                                      key={`forecast-month-${index}`}
                                                      className=" px-4 py-3 text-center dark:bg-transparent"
                                                    >
                                                      {appUtils.formatNumber(
                                                        data.cashAndShortTermInvestments,
                                                        {
                                                          notation: "compact",
                                                          minimumFractionDigits: 1,
                                                          maximumFractionDigits: 2,
                                                        }
                                                      )}
                                                    </td>
                                                  );
                                                }
                                              )}
                                            </tr>

                                            {stateL3 && (
                                              <>
                                                <tr className=" text-sm ">
                                                  <td className="sticky left-0 bg-white py-3 pl-14 pr-4 text-left dark:bg-black">
                                                    Cash And Cash Equivalents
                                                  </td>

                                                  {balanceSheet.map(
                                                    (data, index) => {
                                                      return (
                                                        <td
                                                          key={`forecast-month-${index}`}
                                                          className=" px-4 py-3 text-center dark:bg-transparent"
                                                        >
                                                          {appUtils.formatNumber(
                                                            data.cashAndCashEquivalents,
                                                            {
                                                              notation:
                                                                "compact",
                                                              minimumFractionDigits: 1,
                                                              maximumFractionDigits: 2,
                                                            }
                                                          )}
                                                        </td>
                                                      );
                                                    }
                                                  )}
                                                </tr>

                                                <tr className=" text-sm ">
                                                  <td className="sticky left-0 bg-white py-3 pl-14 pr-4 text-left dark:bg-black">
                                                    Short Term Investments
                                                  </td>

                                                  {balanceSheet.map(
                                                    (data, index) => {
                                                      return (
                                                        <td
                                                          key={`forecast-month-${index}`}
                                                          className=" px-4 py-3 text-center dark:bg-transparent"
                                                        >
                                                          {appUtils.formatNumber(
                                                            data.shortTermInvestments,
                                                            {
                                                              notation:
                                                                "compact",
                                                              minimumFractionDigits: 1,
                                                              maximumFractionDigits: 2,
                                                            }
                                                          )}
                                                        </td>
                                                      );
                                                    }
                                                  )}
                                                </tr>
                                              </>
                                            )}
                                          </>
                                        );
                                      }}
                                    </WithToggle>

                                    <tr className=" text-sm ">
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Inventory
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.inventory,
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
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Net Receivables
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.netReceivables,
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
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Other Current Assets
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.otherCurrentAssets,
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

                        {/* TOTAL NON_CURRENT ASSETS */}
                        <WithToggle>
                          {(props) => {
                            const { state: stateL2, toggle: toggleL2 } = props;

                            return (
                              <>
                                <tr
                                  onClick={(e) => toggleL2()}
                                  className={cn(" cursor-pointer text-sm ")}
                                >
                                  <th className="sticky left-0 bg-white py-3 pl-6 pr-4 text-left font-normal dark:bg-black">
                                    <div className=" flex items-center gap-x-1 ">
                                      <span>Non-Current Assets</span>
                                      <ChevronRight
                                        className={cn(" size-4 duration-300 ", {
                                          " rotate-90 ": stateL2,
                                        })}
                                      />
                                    </div>
                                  </th>

                                  {balanceSheet.map((data, index) => {
                                    return (
                                      <td
                                        key={`forecast-month-${index}`}
                                        className=" px-4 py-3 text-center dark:bg-transparent"
                                      >
                                        {appUtils.formatNumber(
                                          data.totalNonCurrentAssets,
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

                                {stateL2 && (
                                  <>
                                    <tr className=" text-sm ">
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Property, Plant & Equipment
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.propertyPlantEquipmentNet,
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

                                    <WithToggle>
                                      {(props) => {
                                        const {
                                          state: stateL3,
                                          toggle: toggleL3,
                                        } = props;

                                        return (
                                          <>
                                            <tr
                                              onClick={(e) => toggleL3()}
                                              className={cn(
                                                " cursor-pointer text-sm "
                                              )}
                                            >
                                              <th className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left font-normal dark:bg-black">
                                                <div className=" flex items-center gap-x-1 ">
                                                  <span>
                                                    Goodwill And Intangible
                                                    Assets
                                                  </span>
                                                  <ChevronRight
                                                    className={cn(
                                                      " size-4 duration-300 ",
                                                      {
                                                        " rotate-90 ": stateL3,
                                                      }
                                                    )}
                                                  />
                                                </div>
                                              </th>

                                              {balanceSheet.map(
                                                (data, index) => {
                                                  return (
                                                    <td
                                                      key={`forecast-month-${index}`}
                                                      className=" px-4 py-3 text-center dark:bg-transparent"
                                                    >
                                                      {appUtils.formatNumber(
                                                        data.goodwillAndIntangibleAssets,
                                                        {
                                                          notation: "compact",
                                                          minimumFractionDigits: 1,
                                                          maximumFractionDigits: 2,
                                                        }
                                                      )}
                                                    </td>
                                                  );
                                                }
                                              )}
                                            </tr>

                                            {stateL3 && (
                                              <>
                                                <tr className=" text-sm ">
                                                  <td className="sticky left-0 bg-white py-3 pl-14 pr-4 text-left dark:bg-black">
                                                    Goodwill
                                                  </td>

                                                  {balanceSheet.map(
                                                    (data, index) => {
                                                      return (
                                                        <td
                                                          key={`forecast-month-${index}`}
                                                          className=" px-4 py-3 text-center dark:bg-transparent"
                                                        >
                                                          {appUtils.formatNumber(
                                                            data.goodwill,
                                                            {
                                                              notation:
                                                                "compact",
                                                              minimumFractionDigits: 1,
                                                              maximumFractionDigits: 2,
                                                            }
                                                          )}
                                                        </td>
                                                      );
                                                    }
                                                  )}
                                                </tr>

                                                <tr className=" text-sm ">
                                                  <td className="sticky left-0 bg-white py-3 pl-14 pr-4 text-left dark:bg-black">
                                                    Intangible Assets
                                                  </td>

                                                  {balanceSheet.map(
                                                    (data, index) => {
                                                      return (
                                                        <td
                                                          key={`forecast-month-${index}`}
                                                          className=" px-4 py-3 text-center dark:bg-transparent"
                                                        >
                                                          {appUtils.formatNumber(
                                                            data.intangibleAssets,
                                                            {
                                                              notation:
                                                                "compact",
                                                              minimumFractionDigits: 1,
                                                              maximumFractionDigits: 2,
                                                            }
                                                          )}
                                                        </td>
                                                      );
                                                    }
                                                  )}
                                                </tr>
                                              </>
                                            )}
                                          </>
                                        );
                                      }}
                                    </WithToggle>

                                    <tr className=" text-sm ">
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Long Term Investments
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.longTermInvestments,
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
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Tax Assets
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.taxAssets,
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
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Other Non-Current Assets
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.otherCurrentAssets,
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

                        {/* TOTAL ASSETS */}
                        <tr className=" text-sm ">
                          <th className=" sticky left-0 bg-white py-3 pl-6 pr-4 text-left font-normal dark:bg-black">
                            Other Assets
                          </th>

                          {balanceSheet.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-4 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.otherAssets, {
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

            {/* TOTAL LIABILITIES */}
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
                      <th
                        className={cn(
                          " sticky left-0 bg-white px-4 py-3 text-left dark:bg-black",
                          { " bg-inherit dark:bg-inherit": state }
                        )}
                      >
                        <div className=" flex items-center gap-x-1 ">
                          <span>Total Liabilities</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {balanceSheet.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-4 py-3 text-center dark:bg-transparent"
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

                    {state && (
                      <>
                        {/* TOTAL CURENT LIABILITIES */}
                        <WithToggle>
                          {(props) => {
                            const { state: stateL2, toggle: toggleL2 } = props;

                            return (
                              <>
                                <tr
                                  onClick={(e) => toggleL2()}
                                  className={cn(" cursor-pointer text-sm ")}
                                >
                                  <th className=" sticky left-0 bg-white py-3 pl-6 pr-4 text-left font-normal dark:bg-black">
                                    <div className=" flex items-center gap-x-1 ">
                                      <span>Current Liabilities</span>
                                      <ChevronRight
                                        className={cn(" size-4 duration-300 ", {
                                          " rotate-90 ": stateL2,
                                        })}
                                      />
                                    </div>
                                  </th>

                                  {balanceSheet.map((data, index) => {
                                    return (
                                      <td
                                        key={`forecast-month-${index}`}
                                        className=" px-4 py-3 text-center dark:bg-transparent"
                                      >
                                        {appUtils.formatNumber(
                                          data.totalCurrentLiabilities,
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

                                {stateL2 && (
                                  <>
                                    <tr className=" text-sm ">
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Accounts Payable
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.accountPayables,
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
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Short Term Debt
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.shortTermDebt,
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
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Tax Payables
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.taxPayables,
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
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Deferred Revenue
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.deferredRevenue,
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
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Other Current Liabilities
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.otherCurrentLiabilities,
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

                        {/* TOTAL NON_CURRENT LIABILITIES */}
                        <WithToggle>
                          {(props) => {
                            const { state: stateL2, toggle: toggleL2 } = props;

                            return (
                              <>
                                <tr
                                  onClick={(e) => toggleL2()}
                                  className={cn(" cursor-pointer text-sm ")}
                                >
                                  <th className="sticky left-0 bg-white py-3 pl-6 pr-4 text-left font-normal dark:bg-black">
                                    <div className=" flex items-center gap-x-1 ">
                                      <span>Non-Current Liabilities</span>
                                      <ChevronRight
                                        className={cn(" size-4 duration-300 ", {
                                          " rotate-90 ": stateL2,
                                        })}
                                      />
                                    </div>
                                  </th>

                                  {balanceSheet.map((data, index) => {
                                    return (
                                      <td
                                        key={`forecast-month-${index}`}
                                        className=" px-4 py-3 text-center dark:bg-transparent"
                                      >
                                        {appUtils.formatNumber(
                                          data.totalNonCurrentLiabilities,
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

                                {stateL2 && (
                                  <>
                                    <tr className=" text-sm ">
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Long-Term Debt
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.longTermDebt,
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
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Non Current Deferred Revenue
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.deferredRevenueNonCurrent,
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
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Deferred Taxes Liabilities
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.deferredTaxLiabilitiesNonCurrent,
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
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Other Non Current liabilities
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.otherNonCurrentLiabilities,
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

                        {/* TOTAL LIABILITIES */}
                        <tr className=" text-sm ">
                          <th className=" sticky left-0 bg-white py-3 pl-6 pr-4 text-left font-normal dark:bg-black">
                            Other Liabilities
                          </th>

                          {balanceSheet.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-4 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.otherLiabilities, {
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

            {/* TOTAL EQUITY */}
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
                      <th
                        className={cn(
                          " sticky left-0 bg-white px-4 py-3 text-left dark:bg-black",
                          { " bg-inherit dark:bg-inherit": state }
                        )}
                      >
                        <div className=" flex items-center gap-x-1 ">
                          <span>Total Equity</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {balanceSheet.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-4 py-3 text-center dark:bg-transparent"
                          >
                            {appUtils.formatNumber(data.totalEquity, {
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
                        {/* TOTAL STOCKHOLDERS EQUITY */}
                        <WithToggle>
                          {(props) => {
                            const { state: stateL2, toggle: toggleL2 } = props;

                            return (
                              <>
                                <tr
                                  onClick={(e) => toggleL2()}
                                  className={cn(" cursor-pointer text-sm ")}
                                >
                                  <th
                                    className={cn(
                                      " sticky left-0 bg-white py-3 pl-6 pr-4 text-left font-normal dark:bg-black"
                                    )}
                                  >
                                    <div className=" flex items-center gap-x-1 ">
                                      <span>Stockholders Equity</span>
                                      <ChevronRight
                                        className={cn(" size-4 duration-300 ", {
                                          " rotate-90 ": stateL2,
                                        })}
                                      />
                                    </div>
                                  </th>

                                  {balanceSheet.map((data, index) => {
                                    return (
                                      <td
                                        key={`forecast-month-${index}`}
                                        className=" px-4 py-3 text-center dark:bg-transparent"
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

                                {stateL2 && (
                                  <>
                                    <tr className=" text-sm ">
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Common Stock
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.commonStock,
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
                                      <td className=" sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Retained Earnings
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.retainedEarnings,
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
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Accumulated Other Comprehensive
                                        Income/Loss
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.accumulatedOtherComprehensiveIncomeLoss,
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
                                      <td className="sticky left-0 bg-white py-3 pl-10 pr-4 text-left dark:bg-black">
                                        Other Stockholder Equity
                                      </td>

                                      {balanceSheet.map((data, index) => {
                                        return (
                                          <td
                                            key={`forecast-month-${index}`}
                                            className=" px-4 py-3 text-center dark:bg-transparent"
                                          >
                                            {appUtils.formatNumber(
                                              data.othertotalStockholdersEquity,
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

                        {/* MINORITY INTEREST */}
                        <tr className=" text-sm ">
                          <th className="sticky left-0 bg-white py-3 pl-6 pr-4 text-left dark:bg-black">
                            Minority Interest
                          </th>

                          {balanceSheet.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-4 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatNumber(data.minorityInterest, {
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

            <tr className=" border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" sticky left-0 bg-white px-4 py-3 text-left dark:bg-black ">
                Preferred Stock Equity
              </th>

              {balanceSheet.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-4 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatNumber(data.preferredStock, {
                      notation: "compact",
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" border-y text-sm font-bold dark:border-main-gray-600">
              <th className=" sticky left-0 bg-white px-4 py-3 text-left dark:bg-black ">
                Capital Lease Obligations
              </th>

              {balanceSheet.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-4 py-3 text-center dark:bg-transparent"
                  >
                    {appUtils.formatNumber(data.capitalLeaseObligations, {
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

"use client";

import { format } from "date-fns";
import appUtils from "@/utils/app-util";
import WithToggle from "@/components/with-toggle";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { KEY_STATS_SAMPLE } from "../key-stats/sample";

export const BALANCE_SHEET_SAMPLE = KEY_STATS_SAMPLE.balance;

interface BalanceSheetScreenProps {
  ticker: string;
}

export default function BalanceSheetScreen(props: BalanceSheetScreenProps) {
  const { ticker } = props;

  return (
    <section className=" pb-12 ">
      <div className=" overflow-x-auto border dark:border-main-gray-600 ">
        <table className=" w-full min-w-[50rem] ">
          <thead>
            <tr className="  th text-sm font-bold ">
              <th className=" w-[10rem] px-2 py-3 text-left md:w-[15rem] lg:w-[20rem] dark:bg-transparent"></th>

              {BALANCE_SHEET_SAMPLE.map((data, index) => {
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
                      <th className=" px-2 py-3 text-left dark:bg-transparent">
                        <div className=" flex items-center gap-x-1 ">
                          <span>Total Assets</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {BALANCE_SHEET_SAMPLE.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-2 py-3 text-center dark:bg-transparent"
                          >
                            {appUtils.formatCurrency(data.totalAssets, {
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
                                  <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                                    <div className=" flex items-center gap-x-1 ">
                                      <span>Current Assets</span>
                                      <ChevronRight
                                        className={cn(" size-4 duration-300 ", {
                                          " rotate-90 ": stateL2,
                                        })}
                                      />
                                    </div>
                                  </th>

                                  {BALANCE_SHEET_SAMPLE.map((data, index) => {
                                    return (
                                      <td
                                        key={`forecast-month-${index}`}
                                        className=" px-2 py-3 text-center dark:bg-transparent"
                                      >
                                        {appUtils.formatCurrency(
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
                                              <th className=" py-3 pl-10 pr-2 text-left font-normal dark:bg-transparent">
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

                                              {BALANCE_SHEET_SAMPLE.map(
                                                (data, index) => {
                                                  return (
                                                    <td
                                                      key={`forecast-month-${index}`}
                                                      className=" px-2 py-3 text-center dark:bg-transparent"
                                                    >
                                                      {appUtils.formatCurrency(
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
                                                  <td className=" py-3 pl-14 pr-2 text-left dark:bg-transparent">
                                                    Cash And Cash Equivalents
                                                  </td>

                                                  {BALANCE_SHEET_SAMPLE.map(
                                                    (data, index) => {
                                                      return (
                                                        <td
                                                          key={`forecast-month-${index}`}
                                                          className=" px-2 py-3 text-center dark:bg-transparent"
                                                        >
                                                          {appUtils.formatCurrency(
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
                                                  <td className=" py-3 pl-14 pr-2 text-left dark:bg-transparent">
                                                    Short Term Investments
                                                  </td>

                                                  {BALANCE_SHEET_SAMPLE.map(
                                                    (data, index) => {
                                                      return (
                                                        <td
                                                          key={`forecast-month-${index}`}
                                                          className=" px-2 py-3 text-center dark:bg-transparent"
                                                        >
                                                          {appUtils.formatCurrency(
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
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Inventory
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.inventory,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Net Receivables
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.netReceivables,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Other Current Assets
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.otherCurrentAssets,
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
                                  <th className="  py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                                    <div className=" flex items-center gap-x-1 ">
                                      <span>Non-Current Assets</span>
                                      <ChevronRight
                                        className={cn(" size-4 duration-300 ", {
                                          " rotate-90 ": stateL2,
                                        })}
                                      />
                                    </div>
                                  </th>

                                  {BALANCE_SHEET_SAMPLE.map((data, index) => {
                                    return (
                                      <td
                                        key={`forecast-month-${index}`}
                                        className=" px-2 py-3 text-center dark:bg-transparent"
                                      >
                                        {appUtils.formatCurrency(
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
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Property, Plant & Equipment
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.propertyPlantEquipmentNet,
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
                                              <th className=" py-3 pl-10 pr-2 text-left font-normal dark:bg-transparent">
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

                                              {BALANCE_SHEET_SAMPLE.map(
                                                (data, index) => {
                                                  return (
                                                    <td
                                                      key={`forecast-month-${index}`}
                                                      className=" px-2 py-3 text-center dark:bg-transparent"
                                                    >
                                                      {appUtils.formatCurrency(
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
                                                  <td className=" py-3 pl-14 pr-2 text-left dark:bg-transparent">
                                                    Goodwill
                                                  </td>

                                                  {BALANCE_SHEET_SAMPLE.map(
                                                    (data, index) => {
                                                      return (
                                                        <td
                                                          key={`forecast-month-${index}`}
                                                          className=" px-2 py-3 text-center dark:bg-transparent"
                                                        >
                                                          {appUtils.formatCurrency(
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
                                                  <td className=" py-3 pl-14 pr-2 text-left dark:bg-transparent">
                                                    Intangible Assets
                                                  </td>

                                                  {BALANCE_SHEET_SAMPLE.map(
                                                    (data, index) => {
                                                      return (
                                                        <td
                                                          key={`forecast-month-${index}`}
                                                          className=" px-2 py-3 text-center dark:bg-transparent"
                                                        >
                                                          {appUtils.formatCurrency(
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
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Long Term Investments
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.longTermInvestments,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Tax Assets
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.taxAssets,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Other Non-Current Assets
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.otherCurrentAssets,
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
                                  </>
                                )}
                              </>
                            );
                          }}
                        </WithToggle>

                        {/* TOTAL ASSETS */}
                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Other Assets
                          </th>

                          {BALANCE_SHEET_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(data.otherAssets, {
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
                      <th className=" px-2 py-3 text-left dark:bg-transparent">
                        <div className=" flex items-center gap-x-1 ">
                          <span>Total Liabilities</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {BALANCE_SHEET_SAMPLE.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-2 py-3 text-center dark:bg-transparent"
                          >
                            {appUtils.formatCurrency(data.totalLiabilities, {
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
                                  <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                                    <div className=" flex items-center gap-x-1 ">
                                      <span>Current Liabilities</span>
                                      <ChevronRight
                                        className={cn(" size-4 duration-300 ", {
                                          " rotate-90 ": stateL2,
                                        })}
                                      />
                                    </div>
                                  </th>

                                  {BALANCE_SHEET_SAMPLE.map((data, index) => {
                                    return (
                                      <td
                                        key={`forecast-month-${index}`}
                                        className=" px-2 py-3 text-center dark:bg-transparent"
                                      >
                                        {appUtils.formatCurrency(
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
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Accounts Payable
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.accountPayables,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Short Term Debt
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.shortTermDebt,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Tax Payables
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.taxPayables,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Deferred Revenue
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.deferredRevenue,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Other Current Liabilities
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.otherCurrentLiabilities,
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
                                  <th className="  py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                                    <div className=" flex items-center gap-x-1 ">
                                      <span>Non-Current Liabilities</span>
                                      <ChevronRight
                                        className={cn(" size-4 duration-300 ", {
                                          " rotate-90 ": stateL2,
                                        })}
                                      />
                                    </div>
                                  </th>

                                  {BALANCE_SHEET_SAMPLE.map((data, index) => {
                                    return (
                                      <td
                                        key={`forecast-month-${index}`}
                                        className=" px-2 py-3 text-center dark:bg-transparent"
                                      >
                                        {appUtils.formatCurrency(
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
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Long-Term Debt
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.longTermDebt,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Non Current Deferred Revenue
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.deferredRevenueNonCurrent,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Deferred Taxes Liabilities
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.deferredTaxLiabilitiesNonCurrent,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Other Non Current liabilities
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.otherNonCurrentLiabilities,
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
                                  </>
                                )}
                              </>
                            );
                          }}
                        </WithToggle>

                        {/* TOTAL LIABILITIES */}
                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Other Liabilities
                          </th>

                          {BALANCE_SHEET_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
                                  data.otherLiabilities,
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
                      <th className=" px-2 py-3 text-left dark:bg-transparent">
                        <div className=" flex items-center gap-x-1 ">
                          <span>Total Equity</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {BALANCE_SHEET_SAMPLE.map((data, index) => {
                        return (
                          <td
                            key={`forecast-month-${index}`}
                            className=" px-2 py-3 text-center dark:bg-transparent"
                          >
                            {appUtils.formatCurrency(data.totalEquity, {
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
                                  <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                                    <div className=" flex items-center gap-x-1 ">
                                      <span>Stockholders Equity</span>
                                      <ChevronRight
                                        className={cn(" size-4 duration-300 ", {
                                          " rotate-90 ": stateL2,
                                        })}
                                      />
                                    </div>
                                  </th>

                                  {BALANCE_SHEET_SAMPLE.map((data, index) => {
                                    return (
                                      <td
                                        key={`forecast-month-${index}`}
                                        className=" px-2 py-3 text-center dark:bg-transparent"
                                      >
                                        {appUtils.formatCurrency(
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
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Common Stock
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.commonStock,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Retained Earnings
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.retainedEarnings,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Accumulated Other Comprehensive
                                        Income/Loss
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.accumulatedOtherComprehensiveIncomeLoss,
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

                                    <tr className=" text-sm ">
                                      <td className=" py-3 pl-10 pr-2 text-left dark:bg-transparent">
                                        Other Stockholder Equity
                                      </td>

                                      {BALANCE_SHEET_SAMPLE.map(
                                        (data, index) => {
                                          return (
                                            <td
                                              key={`forecast-month-${index}`}
                                              className=" px-2 py-3 text-center dark:bg-transparent"
                                            >
                                              {appUtils.formatCurrency(
                                                data.othertotalStockholdersEquity,
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
                                  </>
                                )}
                              </>
                            );
                          }}
                        </WithToggle>

                        {/* MINORITY INTEREST */}
                        <tr className=" text-sm ">
                          <th className=" py-3 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                            Minority Interest
                          </th>

                          {BALANCE_SHEET_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
                                  data.minorityInterest,
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
          </tbody>
        </table>
      </div>
    </section>
  );
}

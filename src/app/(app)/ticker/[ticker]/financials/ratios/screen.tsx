"use client";

import WithToggle from "@/components/with-toggle";
import { cn } from "@/lib/utils";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import { RATIOS_SAMPLE } from "./sample";

interface RatioScreenProps {
  ticker: string;
}

export default function RatioScreen(props: RatioScreenProps) {
  const { ticker } = props;

  return (
    <section className=" pb-12 ">
      <div className=" overflow-x-auto border dark:border-main-gray-600 ">
        <table className=" w-full min-w-[50rem] ">
          <thead>
            <tr className="  th text-sm font-bold ">
              <th className=" w-[10rem] px-2 py-3 text-left md:w-[15rem] lg:w-[20rem] dark:bg-transparent"></th>

              {RATIOS_SAMPLE.map((data, index) => {
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
            {/* RETURNS */}
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
                          <span>Returns</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {RATIOS_SAMPLE.map((data, index) => {
                        return <td key={`forecast-month-${index}`} />;
                      })}
                    </tr>

                    {state && (
                      <>
                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Return on Equity
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(data.returnOnEquity, {
                                  style: "decimal",
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Return on Assets
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(data.returnOnAssets, {
                                  style: "decimal",
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Return on Capital
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
                                  data.returnOnCapitalEmployed,
                                  {
                                    style: "decimal",
                                    minimumFractionDigits: 2,
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

            {/* MARGINS */}
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
                          <span>Margins</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {RATIOS_SAMPLE.map((data, index) => {
                        return <td key={`forecast-month-${index}`} />;
                      })}
                    </tr>

                    {state && (
                      <>
                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Gross Profit Margin
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
                                  data.grossProfitMargin,
                                  {
                                    style: "decimal",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Operating Profit Margin
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
                                  data.operatingProfitMargin,
                                  {
                                    style: "decimal",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Pretax Profit Margin
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
                                  data.pretaxProfitMargin,
                                  {
                                    style: "decimal",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Net profit Margin
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(data.netProfitMargin, {
                                  style: "decimal",
                                  minimumFractionDigits: 2,
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

            {/* Additional */}
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
                          <span>Additional</span>
                          <ChevronRight
                            className={cn(" size-4 duration-300 ", {
                              " rotate-90 ": state,
                            })}
                          />
                        </div>
                      </th>

                      {RATIOS_SAMPLE.map((data, index) => {
                        return <td key={`forecast-month-${index}`} />;
                      })}
                    </tr>

                    {state && (
                      <>
                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Effective Tax Rate
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
                                  data.effectiveTaxRate,
                                  {
                                    style: "decimal",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Price Fair Value
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(data.priceFairValue, {
                                  style: "decimal",
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Dividend Yield
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(data.dividendYield, {
                                  style: "decimal",
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Cash Per Share
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(data.cashPerShare, {
                                  style: "decimal",
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Asset Turnover
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(data.assetTurnover, {
                                  style: "decimal",
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Fixed Asset Turnover
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
                                  data.fixedAssetTurnover,
                                  {
                                    style: "decimal",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Inventory Turnover
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
                                  data.inventoryTurnover,
                                  {
                                    style: "decimal",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Recieveables Turnover
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
                                  data.receivablesTurnover,
                                  {
                                    style: "decimal",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </td>
                            );
                          })}
                        </tr>

                        <tr className=" cursor-pointer text-sm ">
                          <td className=" py-3 pl-6 pr-2 text-left dark:bg-transparent">
                            Payables Turnover
                          </td>

                          {RATIOS_SAMPLE.map((data, index) => {
                            return (
                              <td
                                key={`forecast-month-${index}`}
                                className=" px-2 py-3 text-center dark:bg-transparent"
                              >
                                {appUtils.formatCurrency(
                                  data.payablesTurnover,
                                  {
                                    style: "decimal",
                                    minimumFractionDigits: 2,
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

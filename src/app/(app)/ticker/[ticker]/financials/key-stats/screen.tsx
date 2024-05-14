"use client";

import { format } from "date-fns";
import { KEY_STATS_SAMPLE } from "./sample";
import appUtils from "@/utils/app-util";

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
              <th className=" px-2 py-4 text-left dark:bg-transparent"></th>

              {KEY_STATS_SAMPLE.balance.map((data, index) => {
                return (
                  <td
                    key={`${data.date}-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {format(new Date(data.date), "MMM yy ")}
                  </td>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {/* INCOME STATEMENT */}
            <>
              <tr className=" bg-primary-light/20 text-sm font-bold dark:bg-primary-light/40  ">
                <td className=" inline-block min-w-0 px-2 py-4 text-left ">
                  Income Statement
                </td>

                {KEY_STATS_SAMPLE.balance.map((data, index) => {
                  return <td key={`${data.date}-${index}`} />;
                })}
              </tr>

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  Total Revenue
                </th>

                {KEY_STATS_SAMPLE.income.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
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

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  Cost of Revenue
                </th>

                {KEY_STATS_SAMPLE.income.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
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

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  Gross Profit
                </th>

                {KEY_STATS_SAMPLE.income.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
                    >
                      {appUtils.formatCurrency(data.grossProfit, {
                        notation: "compact",
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  );
                })}
              </tr>

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  EBITDA
                </th>

                {KEY_STATS_SAMPLE.income.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
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

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  EPS
                </th>

                {KEY_STATS_SAMPLE.income.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
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
            </>

            {/* BALANCE SHEET STATEMENT */}
            <>
              <tr className=" bg-primary-light/20 text-sm font-bold dark:bg-primary-light/40  ">
                <td className=" inline-block min-w-0 px-2 py-4 text-left ">
                  Balance Sheet
                </td>

                {KEY_STATS_SAMPLE.balance.map((data, index) => {
                  return <td key={`${data.date}-${index}`} />;
                })}
              </tr>

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  Total Assets
                </th>

                {KEY_STATS_SAMPLE.balance.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
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

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  Total Debt
                </th>

                {KEY_STATS_SAMPLE.balance.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
                    >
                      {appUtils.formatCurrency(data.totalDebt, {
                        notation: "compact",
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  );
                })}
              </tr>

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  Net Debt
                </th>

                {KEY_STATS_SAMPLE.balance.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
                    >
                      {appUtils.formatCurrency(data.netDebt, {
                        notation: "compact",
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  );
                })}
              </tr>

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  Total Liabilities
                </th>

                {KEY_STATS_SAMPLE.balance.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
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

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  Stakeholder Equity
                </th>

                {KEY_STATS_SAMPLE.balance.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
                    >
                      {appUtils.formatCurrency(data.totalStockholdersEquity, {
                        notation: "compact",
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  );
                })}
              </tr>
            </>

            {/* CASH FLOW STATEMENT */}
            <>
              <tr className=" bg-primary-light/20 text-sm font-bold dark:bg-primary-light/40  ">
                <td className=" inline-block min-w-0 px-2 py-4 text-left ">
                  Cash Flow
                </td>

                {KEY_STATS_SAMPLE.balance.map((data, index) => {
                  return <td key={`${data.date}-${index}`} />;
                })}
              </tr>

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  Free Cash Flow
                </th>

                {KEY_STATS_SAMPLE.cash.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
                    >
                      {appUtils.formatCurrency(data.freeCashFlow, {
                        notation: "compact",
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  );
                })}
              </tr>

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  Operating Cash Flow
                </th>

                {KEY_STATS_SAMPLE.cash.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
                    >
                      {appUtils.formatCurrency(data.operatingCashFlow, {
                        notation: "compact",
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  );
                })}
              </tr>

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  Net Income
                </th>

                {KEY_STATS_SAMPLE.cash.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
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

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  Stock Repurchases
                </th>

                {KEY_STATS_SAMPLE.cash.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
                    >
                      {appUtils.formatCurrency(data.commonStockRepurchased, {
                        notation: "compact",
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  );
                })}
              </tr>

              <tr className=" text-sm  even:bg-main-gray-100 dark:even:bg-main-gray-900 ">
                <th className=" py-4 pl-6 pr-2 text-left font-normal dark:bg-transparent">
                  Dividend Paid
                </th>

                {KEY_STATS_SAMPLE.cash.map((data, index) => {
                  return (
                    <td
                      key={`forecast-month-${index}`}
                      className=" px-2 py-4 text-right dark:bg-transparent"
                    >
                      {appUtils.formatCurrency(data.dividendsPaid, {
                        notation: "compact",
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  );
                })}
              </tr>
            </>
          </tbody>
        </table>
      </div>
    </section>
  );
}

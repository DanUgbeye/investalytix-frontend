"use client";

import { tailwindCSS } from "@/lib/utils";
import useTheme from "@/store/theme/useTheme";
import { Dividend } from "@/modules/ticker/types";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { HISTORICAL_DIVIDENDS } from "./sample";
import { format } from "date-fns";
import appUtils from "@/utils/app-util";

function formatDividendData(data: Dividend[]) {
  const dataMap = new Map<number, { year: number; from: number; to: number }>();

  data.forEach((item) => {
    const year = new Date(item.date).getFullYear();

    let entry = dataMap.get(year);
    if (!entry) {
      dataMap.set(year, { year, from: item.dividend, to: item.dividend });
      return;
    }

    if (item.dividend < entry.from) {
      entry.from = item.dividend;
    }

    if (item.dividend > entry.to) {
      entry.to = item.dividend;
    }

    dataMap.set(year, entry);
  });

  return Array.from(dataMap.values());
}

interface DividendsScreenProps {
  ticker: string;
}

export default function DividendsScreen(props: DividendsScreenProps) {
  const { ticker } = props;
  const { theme } = useTheme();

  return (
    <section className=" max-w-7xl space-y-12 py-12 ">
      <header className="relative w-full ">
        <div className=" flex w-full py-4 ">
          <h2 className=" white-text text-xl font-bold text-[#2A3037] sm:text-3xl">
            Apple Dividend
          </h2>
        </div>

        <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] from-50% to-[#545454] to-50% dark:to-white/50 "></div>
      </header>

      <div className=" space-y-5 border py-3 dark:border-main-gray-600  ">
        <h4 className=" px-4 text-lg font-bold sm:text-2xl ">Data</h4>

        <div className=" white-text flex flex-col divide-y divide-inherit text-gray-700 xl:flex-row xl:divide-x xl:divide-y-0 dark:border-main-gray-600 ">
          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Last Ex-Dividend Date</span>
            <span className="  ">2023-11-16</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Dividend Amount Per Share</span>
            <span className="  ">$0.24</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Dividend Yield</span>
            <span className="  ">0.5</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Payout Ratio</span>
            <span className="  ">15.49%</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">Dividend Growth</span>
            <span className="  ">1.57%</span>
          </div>

          <div className=" flex min-w-24 flex-col gap-y-1 px-4 py-3 ">
            <span className=" font-bold ">P/E</span>
            <span className="  ">31.4</span>
          </div>
        </div>
      </div>

      <div className=" border dark:border-main-gray-600 ">
        <h4 className=" border-b px-4 py-5 text-lg font-bold sm:text-2xl dark:border-main-gray-600 ">
          Dividend Yield Range
        </h4>

        <div className=" overflow-x-auto px-4 ">
          <ResponsiveContainer width={"100%"} height={500}>
            <AreaChart
              data={formatDividendData(HISTORICAL_DIVIDENDS)}
              margin={{
                top: 40,
                right: 40,
                left: 0,
                bottom: 40,
              }}
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                className=" stroke-main-gray-400 dark:stroke-white/40"
              />
              <XAxis
                dataKey="year"
                tickLine={false}
                style={{ paddingTop: 20 }}
                tickMargin={10}
                padding={{ left: 20 }}
              />
              <YAxis tickLine={false} />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor:
                    theme === "dark"
                      ? tailwindCSS().theme.colors.main.gray[900]
                      : "white",
                  borderColor:
                    theme === "dark"
                      ? tailwindCSS().theme.colors.main.gray[500]
                      : tailwindCSS().theme.colors.main.gray[300],
                }}
                labelClassName=" text-black dark:text-main-gray-300 "
              />
              <Area
                dataKey="from"
                name="From"
                dot={{
                  r: 6,
                  z: 100,
                  fill: tailwindCSS().theme.colors.primary.base,
                  fillOpacity: 1,
                  stroke: tailwindCSS().theme.colors.primary.base,
                }}
                activeDot={{
                  r: 6,
                }}
                strokeWidth={2}
                stackId="1"
                fill={"none"}
                stroke={tailwindCSS().theme.colors.primary.base}
              />
              <Area
                dataKey="to"
                name="To"
                dot={{
                  r: 6,
                  z: 100,
                  fill: tailwindCSS().theme.colors.primary.base,
                  fillOpacity: 1,
                  stroke: tailwindCSS().theme.colors.primary.base,
                }}
                activeDot={{
                  r: 6,
                }}
                strokeWidth={2}
                stackId="1"
                fill={tailwindCSS().theme.colors.primary.light}
                stroke={tailwindCSS().theme.colors.primary.base}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="  ">
        <h4 className=" py-5 text-lg font-bold sm:text-2xl ">
          Dividend History
        </h4>

        <div className=" overflow-x-auto border dark:border-main-gray-600 ">
          <table className="w-full min-w-[50rem] ">
            <thead>
              <tr className=" th text-sm font-bold ">
                <th className=" p-0 ">
                  <div className=" px-2 py-4 text-left ">Declaration Date</div>
                </th>

                <th className=" p-0 ">
                  <div className=" px-2 py-4 text-left ">Payment Date</div>
                </th>

                <th className=" p-0 ">
                  <div className=" px-2 py-4 text-left ">Record Date</div>
                </th>

                <th className=" p-0 ">
                  <div className=" px-2 py-4 text-right ">Amount</div>
                </th>

                <th className=" p-0 ">
                  <div className=" px-2 py-4 text-right ">Currency</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {HISTORICAL_DIVIDENDS.toReversed().map((dividend, index) => {
                return (
                  <tr
                    key={`dividends-${index}`}
                    className=" text-sm even:bg-main-gray-100 dark:even:bg-main-gray-900 "
                  >
                    <td className=" px-2 py-4 text-left ">
                      {format(dividend.declarationDate, "yyyy-MM-dd")}
                    </td>

                    <td className={` px-2 py-4 text-left`}>
                      {format(dividend.paymentDate, "yyyy-MM-dd")}
                    </td>

                    <td className=" px-2 py-4 text-left ">
                      {format(dividend.recordDate, "yyyy-MM-dd")}
                    </td>

                    <td className=" px-2 py-4 text-right">
                      {appUtils.formatCurrency(dividend.dividend, {
                        style: "decimal",
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    <td className=" px-2 py-4 text-right">USD</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

"use client";

import { tailwindCSS } from "@/lib/utils";
import useTheme from "@/store/theme/useTheme";
import { Dividend } from "@/modules/ticker/ticker.types";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    date: "2024-05-10",
    label: "May 10, 24",
    adjDividend: 0.25,
    dividend: 0.25,
    recordDate: "2024-05-13",
    paymentDate: "2024-05-16",
    declarationDate: "2024-05-02",
  },
  {
    date: "2024-02-09",
    label: "February 09, 24",
    adjDividend: 0.24,
    dividend: 0.24,
    recordDate: "2024-02-12",
    paymentDate: "2024-02-15",
    declarationDate: "2024-02-01",
  },
  {
    date: "2023-11-10",
    label: "November 10, 23",
    adjDividend: 0.24,
    dividend: 0.24,
    recordDate: "2023-11-13",
    paymentDate: "2023-11-16",
    declarationDate: "2023-11-02",
  },
  {
    date: "2023-08-11",
    label: "August 11, 23",
    adjDividend: 0.24,
    dividend: 0.24,
    recordDate: "2023-08-14",
    paymentDate: "2023-08-17",
    declarationDate: "2023-08-03",
  },
  {
    date: "2023-05-12",
    label: "May 12, 23",
    adjDividend: 0.24,
    dividend: 0.24,
    recordDate: "2023-05-15",
    paymentDate: "2023-05-18",
    declarationDate: "2023-05-04",
  },
  {
    date: "2023-02-10",
    label: "February 10, 23",
    adjDividend: 0.23,
    dividend: 0.23,
    recordDate: "2023-02-13",
    paymentDate: "2023-02-16",
    declarationDate: "2023-02-02",
  },
  {
    date: "2022-11-04",
    label: "November 04, 22",
    adjDividend: 0.23,
    dividend: 0.23,
    recordDate: "2022-11-07",
    paymentDate: "2022-11-10",
    declarationDate: "2022-10-27",
  },
  {
    date: "2022-08-05",
    label: "August 05, 22",
    adjDividend: 0.23,
    dividend: 0.23,
    recordDate: "2022-08-08",
    paymentDate: "2022-08-11",
    declarationDate: "2022-07-28",
  },
  {
    date: "2022-05-06",
    label: "May 06, 22",
    adjDividend: 0.23,
    dividend: 0.23,
    recordDate: "2022-05-09",
    paymentDate: "2022-05-12",
    declarationDate: "2022-04-28",
  },
  {
    date: "2022-02-04",
    label: "February 04, 22",
    adjDividend: 0.22,
    dividend: 0.22,
    recordDate: "2022-02-07",
    paymentDate: "2022-02-10",
    declarationDate: "2022-01-27",
  },
  {
    date: "2021-11-05",
    label: "November 05, 21",
    adjDividend: 0.22,
    dividend: 0.22,
    recordDate: "2021-11-08",
    paymentDate: "2021-11-11",
    declarationDate: "2021-10-28",
  },
  {
    date: "2021-08-06",
    label: "August 06, 21",
    adjDividend: 0.22,
    dividend: 0.22,
    recordDate: "2021-08-09",
    paymentDate: "2021-08-12",
    declarationDate: "2021-07-27",
  },
  {
    date: "2021-05-07",
    label: "May 07, 21",
    adjDividend: 0.22,
    dividend: 0.22,
    recordDate: "2021-05-10",
    paymentDate: "2021-05-13",
    declarationDate: "2021-04-28",
  },
  {
    date: "2021-02-05",
    label: "February 05, 21",
    adjDividend: 0.205,
    dividend: 0.205,
    recordDate: "2021-02-08",
    paymentDate: "2021-02-11",
    declarationDate: "2021-01-27",
  },
  {
    date: "2020-11-06",
    label: "November 06, 20",
    adjDividend: 0.205,
    dividend: 0.205,
    recordDate: "2020-11-09",
    paymentDate: "2020-11-12",
    declarationDate: "2020-10-29",
  },
  {
    date: "2020-08-07",
    label: "August 07, 20",
    adjDividend: 0.205,
    dividend: 0.82,
    recordDate: "2020-08-10",
    paymentDate: "2020-08-13",
    declarationDate: "2020-07-30",
  },
  {
    date: "2020-05-08",
    label: "May 08, 20",
    adjDividend: 0.205,
    dividend: 0.82,
    recordDate: "2020-05-11",
    paymentDate: "2020-05-14",
    declarationDate: "2020-04-30",
  },
  {
    date: "2020-02-07",
    label: "February 07, 20",
    adjDividend: 0.1925,
    dividend: 0.77,
    recordDate: "2020-02-10",
    paymentDate: "2020-02-13",
    declarationDate: "2020-01-28",
  },
].reverse();

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
              data={formatDividendData(data)}
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
                  <div className=" px-2 py-4 text-right ">Payment Date</div>
                </th>

                <th className=" p-0 ">
                  <div className=" px-2 py-4 text-right ">Record Date</div>
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
              {Array(10)
                .fill("")
                .map((_, index) => {
                  return (
                    <tr
                      key={`dividends-${index}`}
                      className=" text-sm even:bg-main-gray-100 dark:even:bg-main-gray-900 "
                    >
                      <td className=" px-2 py-4 text-left ">02-03-23</td>

                      <td className={` px-2 py-4 text-right`}>02-03-23</td>

                      <td className=" px-2 py-4 text-right ">02-03-23</td>

                      <td className=" px-2 py-4 text-right">0.24</td>

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

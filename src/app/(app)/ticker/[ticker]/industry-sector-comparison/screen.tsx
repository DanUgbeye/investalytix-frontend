"use client";

import { cn, tailwindCSS } from "@/lib/utils";
import useTheme from "@/store/theme/useTheme";
import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    date: "2024-05-07",
    basicMaterialsChangesPercentage: -0.0934,
    communicationServicesChangesPercentage: 1.26249,
    consumerCyclicalChangesPercentage: 0.29312,
    consumerDefensiveChangesPercentage: 0.60606,
    energyChangesPercentage: 0.58913,
    financialServicesChangesPercentage: 0.72193,
    healthcareChangesPercentage: -0.38694,
    industrialsChangesPercentage: 0.28425,
    realEstateChangesPercentage: -1.37528,
    technologyChangesPercentage: 1.76193,
    utilitiesChangesPercentage: -0.00015,
  },
  {
    date: "2024-05-06",
    basicMaterialsChangesPercentage: -0.0934,
    communicationServicesChangesPercentage: 1.26249,
    consumerCyclicalChangesPercentage: 0.29312,
    consumerDefensiveChangesPercentage: 0.60606,
    energyChangesPercentage: 0.58913,
    financialServicesChangesPercentage: 0.72199,
    healthcareChangesPercentage: -0.38694,
    industrialsChangesPercentage: 0.28425,
    realEstateChangesPercentage: -1.37528,
    technologyChangesPercentage: 1.76193,
    utilitiesChangesPercentage: -0.00015,
  },
  {
    date: "2024-05-03",
    basicMaterialsChangesPercentage: 1.10443,
    communicationServicesChangesPercentage: 0.84,
    consumerCyclicalChangesPercentage: 0.87542,
    consumerDefensiveChangesPercentage: 0.85901,
    energyChangesPercentage: 1.89802,
    financialServicesChangesPercentage: 5.29977,
    healthcareChangesPercentage: 1.41727,
    industrialsChangesPercentage: 0.56529,
    realEstateChangesPercentage: 0.37973,
    technologyChangesPercentage: 2.44522,
    utilitiesChangesPercentage: 1.66244,
  },
  {
    date: "2024-05-02",
    basicMaterialsChangesPercentage: -3.59657,
    communicationServicesChangesPercentage: 1.56931,
    consumerCyclicalChangesPercentage: 2.51543,
    consumerDefensiveChangesPercentage: 0.8855,
    energyChangesPercentage: 0.92033,
    financialServicesChangesPercentage: -0.8938,
    healthcareChangesPercentage: 0.81091,
    industrialsChangesPercentage: 0.93674,
    realEstateChangesPercentage: 0.99022,
    technologyChangesPercentage: 1.69558,
    utilitiesChangesPercentage: 0.64711,
  },
  {
    date: "2024-05-01",
    basicMaterialsChangesPercentage: 0.23439,
    communicationServicesChangesPercentage: 0.8385,
    consumerCyclicalChangesPercentage: 0.279,
    consumerDefensiveChangesPercentage: -0.62577,
    energyChangesPercentage: -1.94269,
    financialServicesChangesPercentage: 0.19996,
    healthcareChangesPercentage: 1.9434,
    industrialsChangesPercentage: 0.49965,
    realEstateChangesPercentage: -0.6631,
    technologyChangesPercentage: -0.89902,
    utilitiesChangesPercentage: 0.62743,
  },
  {
    date: "2024-04-30",
    basicMaterialsChangesPercentage: -1.44095,
    communicationServicesChangesPercentage: -1.81674,
    consumerCyclicalChangesPercentage: -3.10486,
    consumerDefensiveChangesPercentage: -0.41263,
    energyChangesPercentage: 1.33031,
    financialServicesChangesPercentage: 2.80296,
    healthcareChangesPercentage: -0.30533,
    industrialsChangesPercentage: -1.79814,
    realEstateChangesPercentage: -1.90272,
    technologyChangesPercentage: -1.8592,
    utilitiesChangesPercentage: -0.99954,
  },
  {
    date: "2024-04-29",
    basicMaterialsChangesPercentage: 0.16287,
    communicationServicesChangesPercentage: -2.19341,
    consumerCyclicalChangesPercentage: 2.44805,
    consumerDefensiveChangesPercentage: 0.16651,
    energyChangesPercentage: 0.44145,
    financialServicesChangesPercentage: -0.38682,
    healthcareChangesPercentage: 0.31399,
    industrialsChangesPercentage: -0.81845,
    realEstateChangesPercentage: -2.79866,
    technologyChangesPercentage: -0.99677,
    utilitiesChangesPercentage: -0.6847,
  },
].reverse();

interface IndustrySectorComparisonScreenProps {
  ticker: string;
}

export default function IndustrySectorComparisonScreen(
  props: IndustrySectorComparisonScreenProps
) {
  const { ticker } = props;
  const { theme } = useTheme();
  const [tab, setTab] = useState<"Industry" | "Sector">("Industry");

  function handleTabChange(change: typeof tab) {
    setTab(change);
  }

  return (
    <section className=" space-y-10 py-10 ">
      <div className=" flex w-fit gap-2 rounded bg-[#F5F5F5] p-2 dark:bg-main-gray-900 ">
        <button
          type="button"
          className={cn(
            `flex h-8 items-center justify-center whitespace-nowrap rounded px-4 text-sm font-medium duration-300 hover:bg-black/10 sm:px-7 dark:hover:bg-main-gray-700 `,
            {
              "bg-primary-base text-white hover:bg-primary-base hover:text-white dark:hover:bg-primary-base ":
                tab === "Industry",
            }
          )}
          onClick={(e) => handleTabChange("Industry")}
        >
          INDUSTRY
        </button>

        <button
          type="button"
          className={cn(
            `flex h-8 items-center justify-center whitespace-nowrap rounded px-4 text-sm font-medium duration-300 hover:bg-black/10 sm:px-7 dark:hover:bg-main-gray-700  `,
            {
              "bg-primary-base text-white hover:bg-primary-base hover:text-white dark:hover:bg-primary-base ":
                tab === "Sector",
            }
          )}
          onClick={(e) => handleTabChange("Sector")}
        >
          SECTOR
        </button>
      </div>

      <div className=" overflow-x-auto border dark:border-main-gray-600 ">
        <table className=" w-full min-w-[50rem] ">
          <thead>
            <tr className=" th text-sm font-bold ">
              <th className=" min-w-28 px-2 py-4 text-left ">Name</th>

              <th className=" px-2 py-4 text-left ">Price</th>

              <th className=" px-2 py-4 text-right ">Market Cap</th>

              <th className=" px-2 py-4 text-right ">P/E Ratio</th>

              <th className=" px-2 py-4 text-right ">Yearly Gain</th>

              <th className=" px-2 py-4 text-right ">Analyst Consensus</th>

              <th className=" px-2 py-4 text-right ">Analyst Price Target</th>

              <th className=" px-2 py-4 text-right ">
                Top Analyst Price Target
              </th>

              <th className=" px-2 py-4 text-right ">Smart Score</th>
            </tr>
          </thead>

          <tbody>
            {Array(10)
              .fill("_")
              .map((_, index) => {
                return (
                  <tr
                    key={`forecast-${index}`}
                    className=" text-sm even:bg-main-gray-100  dark:even:bg-main-gray-900 "
                  >
                    <td className=" white-text p-2 text-left text-[#333333]">
                      <div className=" flex flex-col space-y-1 ">
                        <span className=" font-semibold text-[#125BD4] ">
                          AAPL
                        </span>

                        <span className=" font-bold ">Apple</span>
                      </div>
                    </td>

                    <td className={` p-2 text-left`}>$185.92</td>

                    <td className=" p-2 text-right ">$2.89T</td>

                    <td className=" p-2 text-right">30.32</td>

                    <td className=" p-2 text-right text-green-700 ">38.73%</td>

                    <td className=" p-2 text-right text-[#125BD4] ">
                      Moderate Buy
                    </td>

                    <td className=" p-2 text-right text-[#125BD4]">
                      9.38% Upside
                    </td>

                    <td className=" p-2 text-right text-[#125BD4]">
                      9.65% Upside
                    </td>

                    <td className=" p-2 text-right text-green-700 ">8</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className=" border dark:border-main-gray-600 ">
        <div className=" overflow-x-auto ">
          <ResponsiveContainer width={"100%"} height={500}>
            <LineChart data={data} margin={{ top: 40, right: 40 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                className=" stroke-main-gray-400 dark:stroke-white/40"
              />
              <XAxis
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                dataKey="date"
              />
              <YAxis
                tickLine={false}
                tickMargin={5}
                padding={{ bottom: 20 }}
                tickFormatter={(value) => `${value}%`}
              />
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
                labelClassName=" font-semibold text-black dark:text-main-gray-300 "
                formatter={(value) => {
                  const numValue = Number(value);

                  if (isNaN(numValue)) {
                    return "nil";
                  }

                  return `${numValue.toFixed(2)}%`;
                }}
              />
              <Line
                type="monotone"
                name="Basic Materials"
                dataKey="basicMaterialsChangesPercentage"
                stroke="#8884d8"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                name="Communication Services"
                dataKey="communicationServicesChangesPercentage"
                stroke="#82ca9d"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                name="Consumer Cyclical"
                dataKey="consumerCyclicalChangesPercentage"
                stroke="#ff7300"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                name="Consumer Defensive"
                dataKey="consumerDefensiveChangesPercentage"
                stroke="#0088FE"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                name="Energy"
                dataKey="energyChangesPercentage"
                stroke="#FF0080"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                name="Financial Services"
                dataKey="financialServicesChangesPercentage"
                stroke="#FFBB28"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                name="Healthcare"
                dataKey="healthcareChangesPercentage"
                stroke="#00C49F"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                name="Industrials"
                dataKey="industrialsChangesPercentage"
                stroke="#FF8042"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                name="Real Estate"
                dataKey="realEstateChangesPercentage"
                stroke="#bcbd22"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                name="Technology"
                dataKey="technologyChangesPercentage"
                stroke="#ff0000"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                name="Utilities"
                dataKey="utilitiesChangesPercentage"
                stroke="#8A2BE2"
                strokeWidth={3}
              />
              <Legend iconType="circle" wrapperStyle={{ padding: 20 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <p className=" border-t bg-gray-100 p-3 text-xs dark:border-main-gray-600 dark:bg-white/10 ">
          Compare key indicators and discover each stock&apos;s average analyst
          price target, as well as the latest recommendations by top Wall Street
          experts
        </p>
      </div>
    </section>
  );
}

"use client";

import { SectorPerformanceHistory } from "@/modules/market/types";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
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

interface Props {
  currency: string;
  sectorPerformanceHistory: SectorPerformanceHistory[];
}

export default function SectorComparisonChart(props: Props) {
  const { currency, sectorPerformanceHistory } = props;

  return (
    <div className="  ">
      <div className=" overflow-x-auto text-xs ">
        <ResponsiveContainer width={"100%"} height={350}>
          <LineChart data={sectorPerformanceHistory.toReversed()}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              className=" stroke-main-gray-200 dark:stroke-main-gray-900"
            />

            <XAxis
              tickLine={false}
              axisLine={false}
              dataKey="date"
              tickFormatter={(value) => format(new Date(value), "MMM yy")}
              padding={{ right: 20 }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              orientation="right"
              tickFormatter={(value) =>
                value
                  ? `${appUtils.formatNumber(value, { style: "decimal" })}%`
                  : `0%`
              }
            />

            <Tooltip
              cursor={{
                className: " stroke-transparent ",
              }}
              content={(props) => {
                const { payload, label } = props;

                return (
                  <div className=" space-y-2 rounded bg-main-gray-700 p-2 text-sm text-main-gray-300 ">
                    {label && (
                      <div className="  ">
                        {format(new Date(label), "MMM dd, yyyy")}
                      </div>
                    )}

                    <div className="">
                      {payload &&
                        payload.map((pl, index) => {
                          const { name, value, color } = pl;

                          return (
                            <div
                              key={`${value}-${index}`}
                              className=" flex items-center gap-2 text-main-gray-300 "
                            >
                              <span
                                className=" size-3 "
                                style={{ backgroundColor: color }}
                              />

                              <div className=" flex w-full justify-between gap-4 ">
                                <span>{name}</span>
                                <span>
                                  {value
                                    ? `${appUtils.formatNumber(
                                        (value || 0) as number,
                                        {
                                          style: "decimal",
                                        }
                                      )}%`
                                    : `0%`}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              }}
            />

            <Legend
              content={(props) => {
                const { payload } = props;

                return (
                  <div className=" flex flex-wrap items-center gap-x-4 gap-y-1 py-4  ">
                    {payload &&
                      payload.map((pl, index) => {
                        const { value, color } = pl;

                        return (
                          <span
                            key={`${value}`}
                            className=" text-black dark:text-main-gray-300 "
                          >
                            <span
                              style={{
                                display: "inline-block",
                                width: 12,
                                height: 12,
                                backgroundColor: color,
                                marginRight: 8,
                              }}
                            ></span>

                            {value}
                          </span>
                        );
                      })}
                  </div>
                );
              }}
            />

            <Line
              type="monotone"
              name="Basic Materials"
              dataKey="basicMaterialsChangesPercentage"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
              activeDot={{
                style: {
                  stroke: "#8884d8",
                  strokeWidth: 4,
                  outline: 0,
                },
              }}
            />
            <Line
              type="monotone"
              name="Communication Services"
              dataKey="communicationServicesChangesPercentage"
              stroke="#82ca9d"
              strokeWidth={2}
              dot={false}
              activeDot={{
                style: {
                  stroke: "#82ca9d",
                  strokeWidth: 4,
                  outline: 0,
                },
              }}
            />
            <Line
              type="monotone"
              name="Consumer Cyclical"
              dataKey="consumerCyclicalChangesPercentage"
              stroke="#ff7300"
              strokeWidth={2}
              dot={false}
              activeDot={{
                style: {
                  stroke: "#ff7300",
                  strokeWidth: 4,
                  outline: 0,
                },
              }}
            />
            <Line
              type="monotone"
              name="Consumer Defensive"
              dataKey="consumerDefensiveChangesPercentage"
              stroke="#0088FE"
              strokeWidth={2}
              dot={false}
              activeDot={{
                style: {
                  stroke: "#0088FE",
                  strokeWidth: 4,
                  outline: 0,
                },
              }}
            />
            <Line
              type="monotone"
              name="Energy"
              dataKey="energyChangesPercentage"
              stroke="#FF0080"
              strokeWidth={2}
              dot={false}
              activeDot={{
                style: {
                  stroke: "#FF0080",
                  strokeWidth: 4,
                  outline: 0,
                },
              }}
            />
            <Line
              type="monotone"
              name="Financial Services"
              dataKey="financialServicesChangesPercentage"
              stroke="#FFBB28"
              strokeWidth={2}
              dot={false}
              activeDot={{
                style: {
                  stroke: "#FFBB28",
                  strokeWidth: 4,
                  outline: 0,
                },
              }}
            />
            <Line
              type="monotone"
              name="Healthcare"
              dataKey="healthcareChangesPercentage"
              stroke="#00C49F"
              strokeWidth={2}
              dot={false}
              activeDot={{
                style: {
                  stroke: "#00C49F",
                  strokeWidth: 4,
                  outline: 0,
                },
              }}
            />
            <Line
              type="monotone"
              name="Industrials"
              dataKey="industrialsChangesPercentage"
              stroke="#FF8042"
              strokeWidth={2}
              dot={false}
              activeDot={{
                style: {
                  stroke: "#FF8042",
                  strokeWidth: 4,
                  outline: 0,
                },
              }}
            />
            <Line
              type="monotone"
              name="Real Estate"
              dataKey="realEstateChangesPercentage"
              stroke="#bcbd22"
              strokeWidth={2}
              dot={false}
              activeDot={{
                style: {
                  stroke: "#bcbd22",
                  strokeWidth: 4,
                  outline: 0,
                },
              }}
            />
            <Line
              type="monotone"
              name="Technology"
              dataKey="technologyChangesPercentage"
              stroke="#ff0000"
              strokeWidth={2}
              dot={false}
              activeDot={{
                style: {
                  stroke: "#ff0000",
                  strokeWidth: 4,
                  outline: 0,
                },
              }}
            />
            <Line
              type="monotone"
              name="Utilities"
              dataKey="utilitiesChangesPercentage"
              stroke="#8A2BE2"
              strokeWidth={2}
              dot={false}
              activeDot={{
                style: {
                  stroke: "#8A2BE2",
                  strokeWidth: 4,
                  outline: 0,
                },
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className=" border-t bg-gray-100 p-3 text-xs dark:border-main-gray-700 dark:bg-white/10 ">
        Compare key indicators and discover each stock&apos;s average analyst
        price target, as well as the latest recommendations by top Wall Street
        experts
      </p>
    </div>
  );
}

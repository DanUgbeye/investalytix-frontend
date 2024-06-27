"use client";

import Spinner from "@/components/spinner";
import { clientAPI } from "@/config/client/api";
import { cn } from "@/lib/utils";
import { TickerRepository } from "@/modules/ticker/repository";
import { Theme } from "@/store";
import useTheme from "@/store/theme/useTheme";
import { QuoteHistory } from "@/types";
import appUtils from "@/utils/app-util";
import { format, subYears } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
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

type chartData = Map<string, Record<string, Date | string | number>>;

type QuoteHistoryWithSymbol = { symbol: string; data: QuoteHistory[] };

function toChartData(quoteHistory: QuoteHistoryWithSymbol[]) {
  let chartData: chartData = new Map();

  for (
    let quoteHistoryIndex = 0;
    quoteHistoryIndex < quoteHistory.length;
    quoteHistoryIndex++
  ) {
    let { data, symbol } = quoteHistory[quoteHistoryIndex];

    if (data.length <= 0) continue;

    let sortedData = data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    let firstItem = sortedData[0];
    let referencePrice = (firstItem.high + firstItem.low) / 2;

    for (let dataIndex = 0; dataIndex < sortedData.length; dataIndex++) {
      let { date, high, low } = sortedData[dataIndex];
      let dateAsString = date.toString();

      const currentPrice = (high + low) / 2;
      const percentage =
        ((currentPrice - referencePrice) / referencePrice) * 100;

      let entryData = chartData.get(dateAsString);

      if (entryData) {
        entryData[symbol] = percentage;
      } else {
        entryData = {
          date,
          [symbol]: percentage,
        };
      }

      chartData.set(dateAsString, entryData);
    }
  }

  return Array.from(chartData.values());
}

function createColorPicker(theme: Theme) {
  let colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A1FF33",
    "#33A1FF",
    "#FF7133",
    "#71FF33",
    "#7133FF",
    "#FF3381",
  ];

  if (theme === "dark") {
    colors = [
      "#FF8C00", // DarkOrange
      "#1E90FF", // DodgerBlue
      "#9370DB", // MediumPurple
      "#32CD32", // LimeGreen
      "#FF4500", // OrangeRed
      "#3CB371", // MediumSeaGreen
      "#4682B4", // SteelBlue
      "#9ACD32", // YellowGreen
      "#FF6347", // Tomato
      "#87CEFA", // LightSkyBlue
    ];
  }

  let lastColorIndex = -1;
  let currentIndex = 0;

  return function pickColor() {
    if (currentIndex === lastColorIndex) {
      currentIndex = (currentIndex + 1) % colors.length;
    }
    const pickedColor = colors[currentIndex];
    lastColorIndex = currentIndex;
    currentIndex = (currentIndex + 1) % colors.length;
    console.log(pickedColor);
    return pickedColor;
  };
}

interface Props {
  currency: string;
  tickers: string[];
}

export default function IndustryComparisonChart(props: Props) {
  const { currency, tickers } = props;
  const { theme } = useTheme();
  const tickerRepo = new TickerRepository(clientAPI);
  const [isLoading, setIsLoading] = useState(false);
  const [quotesHistory, setQuotesHistory] = useState<QuoteHistoryWithSymbol[]>(
    []
  );

  const getNextColor = useMemo(() => createColorPicker(theme), [theme]);

  const chartData = useMemo(() => {
    if (!quotesHistory) return [];
    return toChartData(quotesHistory);
  }, [quotesHistory]);

  async function loadHistoryData(tickerSymbols: string[]) {
    try {
      setIsLoading(true);
      const res = await Promise.all(
        tickerSymbols.map((symbol) =>
          tickerRepo
            .getQuoteHistory(symbol, "1month", {
              from: subYears(new Date(), 2),
            })
            .then(
              (data) =>
                ({
                  data,
                  symbol,
                }) satisfies QuoteHistoryWithSymbol
            )
        )
      );

      setQuotesHistory(res);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadHistoryData(tickers);
  }, []);

  return (
    <div className="  ">
      <div className={cn(" relative ")}>
        <div
          className={cn(" pointer-events-none hidden pt-12 ", {
            " inset-0 grid h-full w-full place-items-center ": isLoading,
          })}
        >
          <Spinner />
        </div>

        <ResponsiveContainer
          width={"100%"}
          height={350}
          className={cn("  text-xs  ", {
            " pointer-events-none opacity-50 ": isLoading,
          })}
        >
          <LineChart data={chartData}>
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
              tickFormatter={(value) => {
                return value
                  ? `${appUtils.formatNumber((value || 0) as number, {
                      style: "decimal",
                    })}%`
                  : `0%`;
              }}
            />

            <Legend
              content={(props) => {
                const { payload } = props;

                return (
                  <div className=" flex flex-wrap items-center gap-x-4 py-4  ">
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

            {tickers.map((symbol) => {
              const currentColor = getNextColor();

              return (
                <Line
                  key={symbol}
                  isAnimationActive={false}
                  dataKey={symbol}
                  stroke={currentColor}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    style: {
                      stroke: currentColor,
                      strokeWidth: 4,
                      outline: 0,
                    },
                  }}
                />
              );
            })}

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

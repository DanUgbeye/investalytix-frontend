"use client";

import { clientAPI } from "@/config/client/api";
import { cn } from "@/lib/utils";
import { TickerRepository } from "@/modules/ticker/repository";
import { QuoteHistory } from "@/types";
import appUtils from "@/utils/app-util";
import { format, subYears } from "date-fns";
import { useCallback, useEffect, useMemo, useState } from "react";
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

type QuoteHistoryWithSymbol = { symbol: string; data: QuoteHistory[] };

function convertData(quoteHistory: QuoteHistoryWithSymbol) {
  const { data, symbol } = quoteHistory;

  if (data.length <= 0) return { symbol, data: [] };

  let sortedData = data.toSorted(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  let firstItem = sortedData[0];
  let referencePrice = (firstItem.high + firstItem.low) / 2;

  return {
    symbol,
    data: sortedData.map((quote) => {
      const currentPrice = (quote.high + quote.low) / 2;
      const percentage =
        ((currentPrice - referencePrice) / referencePrice) * 100;

      return {
        date: quote.date,
        percentage,
      };
    }),
  };
}

function createColorPicker() {
  const colors = [
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
  const tickerRepo = new TickerRepository(clientAPI);
  const [isLoading, setIsLoading] = useState(false);
  const [quotesHistory, setQuotesHistory] = useState<QuoteHistoryWithSymbol[]>(
    []
  );

  const getNextColor = useCallback(createColorPicker(), []);

  const percentageHistory = useMemo(() => {
    if (!quotesHistory) return [];

    return quotesHistory.map((history) => {
      return convertData(history);
    });
  }, [quotesHistory]);

  async function loadHistoryData(tickerSymbols: string[]) {
    try {
      setIsLoading(true);
      const res = await Promise.all(
        tickerSymbols.map((symbol) =>
          tickerRepo
            .getQuoteHistory(symbol, "1month", {
              from: subYears(new Date(), 1),
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
      console.log(error)
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
      <div
        className={cn("text-xs  ", {
          isLoading: " pointer-events-none opacity-50 ",
        })}
      >
        <ResponsiveContainer width={"100%"} height={350}>
          <LineChart>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              className=" stroke-main-gray-200 dark:stroke-main-gray-900"
            />

            <XAxis
              tickLine={false}
              axisLine={false}
              dataKey="date"
              type="category"
              allowDuplicatedCategory={false}
              tickFormatter={(value) => format(new Date(value), "MMM yy")}
              padding={{ right: 20 }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              dataKey={"percentage"}
              orientation="right"
              tickFormatter={(value) =>
                `${appUtils.formatNumber((value || 0) as number, {
                  style: "decimal",
                })}%`
              }
            />

            <Tooltip
              cursor={{
                className: " fill-main-gray-200/20 dark:fill-white/10 ",
              }}
              content={(props) => {
                const { payload, label } = props;

                return (
                  <div className=" space-y-2 rounded bg-main-gray-700 p-2 text-main-gray-300 ">
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
                                  {appUtils.formatNumber(
                                    (value || 0) as number,
                                    { style: "decimal" }
                                  )}
                                  %
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
                  <div className=" flex flex-wrap items-center gap-x-4 pt-4  ">
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

            {percentageHistory.map((history) => (
              <Line
                dataKey="percentage"
                data={history.data}
                name={history.symbol}
                key={history.symbol}
                color={getNextColor()}
              />
            ))}
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

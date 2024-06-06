"use client";

import {
  defaultAreaSeriesOptions,
  defaultChartOptions,
} from "@/utils/chart.utils";
import { cn } from "@/lib/utils";
import { useTickerRepository } from "@/modules/ticker/hooks";
import useTheme from "@/store/theme/useTheme";
import { QuoteHistory, QuoteTimeframe } from "@/types";
import { startOfYear, subDays, subMonths, subYears } from "date-fns";
import { Time, createChart } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";

const TIMEFRAMES: { label: string; timeframe: QuoteTimeframe }[] = [
  {
    label: "1 Day",
    timeframe: "5min",
  },
  {
    label: "5 Days",
    timeframe: "15min",
  },
  {
    label: "1 Month",
    timeframe: "30min",
  },
  {
    label: "6 Months",
    timeframe: "4hour",
  },
  {
    label: "YTD",
    timeframe: "1day",
  },
  {
    label: "1 Year",
    timeframe: "1day",
  },
  {
    label: "5 Years",
    timeframe: "1week",
  },
  {
    label: "All Time",
    timeframe: "1year",
  },
];

export default function ChartSummary(props: { ticker: string }) {
  const { ticker } = props;
  const chartRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const tickerRepo = useTickerRepository();
  const [activeTab, setActiveTab] = useState(TIMEFRAMES[0]);

  async function getHistoricalData(timeframe: (typeof TIMEFRAMES)[number]) {
    let historyData: QuoteHistory[] = [];

    if (timeframe.label === "1 Day") {
      historyData = await tickerRepo.getQuoteHistory(
        ticker,
        timeframe.timeframe,
        {
          from: subDays(new Date(), 1),
          to: new Date(),
        }
      );
    } else if (timeframe.label === "5 Days") {
      historyData = await tickerRepo.getQuoteHistory(
        ticker,
        timeframe.timeframe,
        {
          from: subDays(new Date(), 5),
          to: new Date(),
        }
      );
    } else if (timeframe.label === "1 Month") {
      historyData = await tickerRepo.getQuoteHistory(
        ticker,
        timeframe.timeframe,
        {
          from: subMonths(new Date(), 1),
          to: new Date(),
        }
      );
    } else if (timeframe.label === "6 Months") {
      historyData = await tickerRepo.getQuoteHistory(
        ticker,
        timeframe.timeframe,
        {
          from: subMonths(new Date(), 6),
          to: new Date(),
        }
      );
    } else if (timeframe.label === "YTD") {
      historyData = await tickerRepo.getQuoteHistory(
        ticker,
        timeframe.timeframe,
        {
          from: startOfYear(new Date()),
          to: new Date(),
        }
      );
    } else if (timeframe.label === "1 Year") {
      historyData = await tickerRepo.getQuoteHistory(
        ticker,
        timeframe.timeframe,
        {
          from: subYears(new Date(), 1),
          to: new Date(),
        }
      );
    } else if (timeframe.label === "5 Years") {
      historyData = await tickerRepo.getQuoteHistory(
        ticker,
        timeframe.timeframe,
        {
          from: subYears(new Date(), 5),
          to: new Date(),
        }
      );
    } else {
      historyData = await tickerRepo.getQuoteHistory(
        ticker,
        timeframe.timeframe,
        {
          to: new Date(),
        }
      );
    }

    return historyData.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  function handleTimeframeChange(timeframe: (typeof TIMEFRAMES)[number]) {
    if (!chartRef.current) return;
    console.log("running change");

    getHistoricalData(timeframe)
      .then((quoteHistory) => {
        const children = chartRef.current!.childNodes;
        children.forEach((child) => {
          chartRef.current!.removeChild(child);
        });

        const newChartAPI = createChart(chartRef.current!, {
          ...defaultChartOptions(theme),
          handleScale: false,
          handleScroll: false,
          timeScale: {
            timeVisible: true,
            borderVisible: false,
          },
        });

        const areaSeries = newChartAPI.addAreaSeries({
          ...defaultAreaSeriesOptions(theme),
        });

        areaSeries.setData(
          quoteHistory.map((data) => ({
            ...data,
            value: (data.high + data.low) / 2,
            time: (new Date(data.date).getTime() / 1000) as Time,
          }))
        );

        const ts = newChartAPI.timeScale();
        ts.fitContent();
        setActiveTab(timeframe);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    handleTimeframeChange(TIMEFRAMES[0]);
  }, [theme]);

  return (
    <div className=" space-y-4 ">
      <div className=" h-72 w-full ">
        <div
          ref={chartRef}
          className={cn(`relative h-full w-full overflow-hidden `)}
        />
      </div>

      <div className=" hide-scrollbar flex w-full items-center gap-2 overflow-x-auto ">
        {TIMEFRAMES.map((tf, index) => {
          return (
            <button
              key={tf.label}
              type="button"
              className={cn(
                " w-full min-w-fit rounded-lg p-4 text-sm duration-300 ",
                {
                  " hover:bg-[#F0F3FA] dark:hover:bg-[#48494A] ":
                    tf.label !== activeTab.label,
                  " bg-[#F0F3FA] dark:bg-[#48494A] ":
                    tf.label === activeTab.label,
                }
              )}
              onClick={() => {
                handleTimeframeChange(tf);
              }}
            >
              {tf.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

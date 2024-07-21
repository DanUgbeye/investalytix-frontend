"use client";

import {
  defaultAreaSeriesOptions,
  defaultChartOptions,
} from "@/utils/chart.utils";
import { cn } from "@/lib/utils";
import { useTickerRepository } from "@/modules/ticker/hooks";
import useTheme from "@/store/theme/useTheme";
import { QuoteHistory, QuoteTimeframe } from "@/types";
import {
  getHours,
  isMonday,
  isWeekend,
  previousFriday,
  startOfDay,
  startOfYear,
  subDays,
  subMonths,
  subYears,
} from "date-fns";
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
  // const [ticker, setTicker] = useState()
  const { ticker } = props;
  const chartRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const tickerRepo = useTickerRepository();
  const [activeTab, setActiveTab] = useState(TIMEFRAMES[0]);
  const [loadingData, setLoadingData] = useState(false);
  const [quoteData, setQuoteData] = useState<QuoteHistory[]>([]);

  async function getHistoricalData(timeframe: (typeof TIMEFRAMES)[number]) {
    let historyData: QuoteHistory[] = [];
    console.log(getHours(new Date()));

    if (timeframe.label === "1 Day") {
      historyData = await tickerRepo.getQuoteHistory(
        ticker,
        timeframe.timeframe,
        {
          from:
            isWeekend(new Date()) ||
            (isMonday(new Date()) && getHours(new Date()) < 18)
              ? startOfDay(previousFriday(new Date()))
              : subDays(new Date(), 1),
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

  async function getChartData(timeframe: (typeof TIMEFRAMES)[number]) {
    setLoadingData(true);
    getHistoricalData(timeframe)
      .then((quoteHistory) => {
        setQuoteData(quoteHistory);
        setActiveTab(timeframe);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingData(false);
      });
  }

  function displayChart() {
    if (!chartRef.current) return;

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
      quoteData.map((data) => ({
        ...data,
        value: (data.high + data.low) / 2,
        time: (new Date(data.date).getTime() / 1000) as Time,
      }))
    );

    newChartAPI.timeScale().fitContent();
  }

  function handleTimeframeChange(timeframe: (typeof TIMEFRAMES)[number]) {
    if (!chartRef.current) return;
    getChartData(timeframe);
  }

  useEffect(() => {
    handleTimeframeChange(TIMEFRAMES[0]);
  }, []);

  useEffect(() => {
    displayChart();
  }, [theme, quoteData]);

  useEffect(() => {
    if (!ticker) return;
    getChartData(activeTab);
  }, [ticker]);

  return (
    <div className="space-y-4">
      <div className="relative h-72 w-full">
        <div
          ref={chartRef}
          className={cn(`relative h-full w-full overflow-hidden duration-150`, {
            "pointer-events-none opacity-50": loadingData,
          })}
        />
      </div>

      <div className="hide-scrollbar flex w-full items-center gap-2 overflow-x-auto">
        {TIMEFRAMES.map((tf, index) => {
          return (
            <button
              key={tf.label}
              type="button"
              className={cn(
                "w-full min-w-fit rounded-lg p-4 text-sm duration-300",
                {
                  "hover:bg-main-gray-100 dark:hover:bg-main-gray-700/50":
                    tf.label !== activeTab.label,
                  "bg-main-gray-200/50 dark:bg-main-gray-700":
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

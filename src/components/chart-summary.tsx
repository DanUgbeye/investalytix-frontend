"use client";

import ColoredText from "@/components/colored-text";
import { cn } from "@/lib/utils";
import { useTickerRepository } from "@/modules/ticker/hooks";
import { TickerPriceChangeSummary } from "@/modules/ticker/types";
import useTheme from "@/store/theme/useTheme";
import { QuoteHistory, QuoteTimeframe } from "@/types";
import appUtils from "@/utils/app-util";
import {
  defaultAreaSeriesOptions,
  defaultChartOptions,
} from "@/utils/chart.utils";
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

const TIMEFRAMES: {
  label: string;
  timeframe: QuoteTimeframe;
  shortName: string;
}[] = [
  {
    label: "1 Day",
    shortName: "1D",
    timeframe: "5min",
  },
  {
    label: "5 Days",
    shortName: "5D",
    timeframe: "15min",
  },
  {
    label: "1 Month",
    shortName: "1M",
    timeframe: "30min",
  },
  {
    label: "6 Months",
    shortName: "6M",
    timeframe: "4hour",
  },
  {
    label: "YTD",
    shortName: "ytd",
    timeframe: "1day",
  },
  {
    label: "1 Year",
    shortName: "1Y",
    timeframe: "1day",
  },
  {
    label: "5 Years",
    shortName: "5Y",
    timeframe: "1week",
  },
  {
    label: "All Time",
    shortName: "max",
    timeframe: "1year",
  },
];

export default function ChartSummary(props: { ticker: string }) {
  const { ticker } = props;
  const chartRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const tickerRepo = useTickerRepository();
  const [activeTab, setActiveTab] = useState(TIMEFRAMES[0]);
  const [loadingData, setLoadingData] = useState(false);
  const [quoteData, setQuoteData] = useState<QuoteHistory[]>([]);
  const [priceChangeSummary, setPriceChangeSummary] = useState<
    TickerPriceChangeSummary | undefined
  >();

  async function getHistoricalData(timeframe: (typeof TIMEFRAMES)[number]) {
    let historyData: QuoteHistory[] = [];
    // console.log(getHours(new Date()));

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

  async function getPriceChangeSummary() {
    try {
      console.log("calling summary");
      let priceChange = await tickerRepo.getPriceChangeSummary(ticker);
      setPriceChangeSummary(priceChange);
    } catch (error: any) {
      console.log(error);
    }
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
    getPriceChangeSummary();
  }, [ticker]);

  return (
    <div className="grid grid-rows-[max-content,max-content] grid-cols-1 space-y-4">
      <div className="relative h-72 w-full">
        <div
          ref={chartRef}
          className={cn(`relative h-full w-full overflow-hidden duration-150`, {
            "pointer-events-none opacity-50": loadingData,
          })}
        />
      </div>

      <div className="hide-scrollbar flex items-center gap-2 overflow-x-auto">
        {TIMEFRAMES.map((tf, index) => {
          return (
            <button
              key={tf.label}
              type="button"
              className={cn(
                "w-full min-w-fit space-y-1 rounded-lg px-4 py-4 text-sm duration-300",
                {
                  "hover:bg-main-gray-100 dark:hover:bg-main-gray-700/50":
                    tf.label !== activeTab.label,
                  "bg-main-gray-200/50 dark:bg-main-gray-700":
                    tf.label === activeTab.label,
                  "py-2": priceChangeSummary !== undefined,
                }
              )}
              onClick={() => {
                handleTimeframeChange(tf);
              }}
            >
              <span>{tf.label}</span>
              {priceChangeSummary !== undefined && (
                <ColoredText
                  isPositive={() => {
                    const percentage =
                      priceChangeSummary[
                        tf.shortName as keyof typeof priceChangeSummary
                      ];

                    if (!percentage || typeof percentage === "string")
                      return undefined;
                    if (percentage > 0) return true;
                    if (percentage < 0) return false;
                    return undefined;
                  }}
                  className={cn("text-xs")}
                >
                  {appUtils.formatNumber(
                    priceChangeSummary[
                      tf.shortName as keyof typeof priceChangeSummary
                    ] as number,
                    { style: "decimal", notation: "compact" }
                  )}
                  %
                </ColoredText>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

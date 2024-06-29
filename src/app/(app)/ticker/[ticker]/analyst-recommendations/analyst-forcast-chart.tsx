"use client";

import { cn } from "@/lib/utils";
import { TickerPriceTargetConsensus } from "@/modules/ticker/types";
import useTheme from "@/store/theme/useTheme";
import { QuoteHistory } from "@/types";
import {
  defaultAreaSeriesOptions,
  defaultChartOptions,
} from "@/utils/chart.utils";
import { createChart, Time } from "lightweight-charts";
import { useEffect, useMemo, useRef } from "react";

interface Props {
  ticker: string;
  quoteHistory: QuoteHistory[];
  priceTargetConsensus: TickerPriceTargetConsensus;
}

export default function AnalystForcastChart(props: Props) {
  const { ticker, priceTargetConsensus, quoteHistory } = props;
  const chartRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const sortedQuoteHistory = useMemo(() => {
    return quoteHistory.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [quoteHistory]);

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

    areaSeries.applyOptions({
      lastValueVisible: false,
      priceLineVisible: false,
    });

    areaSeries.setData(
      sortedQuoteHistory.map((data) => ({
        ...data,
        value: (data.high + data.low) / 2,
        time: (new Date(data.date).getTime() / 1000) as Time,
      }))
    );

    newChartAPI.timeScale().fitContent();
  }

  useEffect(() => {
    displayChart();
  }, []);

  return (
    <div
      ref={chartRef}
      className={cn(`relative h-full w-full overflow-hidden duration-150`, {
        // "pointer-events-none opacity-50": loadingData,
      })}
    />
  );
}

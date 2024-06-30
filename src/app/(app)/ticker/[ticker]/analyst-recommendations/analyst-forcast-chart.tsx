"use client";

import { cn, tailwindCSS } from "@/lib/utils";
import { TickerPriceTargetConsensus } from "@/modules/ticker/types";
import useTheme from "@/store/theme/useTheme";
import { QuoteHistory } from "@/types";
import {
  defaultAreaSeriesOptions,
  defaultChartOptions,
} from "@/utils/chart.utils";
import {
  createChart,
  CreatePriceLineOptions,
  LineStyle,
  Time,
} from "lightweight-charts";
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
  const latestPrice = useMemo(() => {
    return sortedQuoteHistory[sortedQuoteHistory.length - 1];
  }, [sortedQuoteHistory]);

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

    newChartAPI.priceScale("left").applyOptions({
      autoScale: true,
    });

    // newChartAPI.priceScale("left").applyOptions({ minValue: 90, maxValue: 130 });

    const areaSeries = newChartAPI.addAreaSeries({
      ...defaultAreaSeriesOptions(theme),
      bottomColor: "transparent",
      autoscaleInfoProvider: priceTargetConsensus
        ? () => ({
            priceRange: {
              minValue:
                priceTargetConsensus.targetLow +
                priceTargetConsensus.targetLow * 0.1,
              maxValue: priceTargetConsensus.targetHigh +
              priceTargetConsensus.targetHigh * 0.1,
            },
          })
        : undefined,
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

    const lineWidth = 2;
    const redColor =
      theme === "light"
        ? tailwindCSS().theme.colors.main.red.light
        : tailwindCSS().theme.colors.main.red.dark;
    const greenColor =
      theme === "light"
        ? tailwindCSS().theme.colors.main.green.light
        : tailwindCSS().theme.colors.main.green.dark;

    const currPrice = (latestPrice.high + latestPrice.low) / 2;
    const currPriceLine: CreatePriceLineOptions = {
      price: currPrice,
      color: tailwindCSS().theme.colors.primary.base,
      lineWidth: lineWidth,
      lineStyle: LineStyle.Solid,
      axisLabelVisible: true,
      title: "Current",
    };
    const minPriceLine: CreatePriceLineOptions = {
      price: priceTargetConsensus.targetLow,
      color: redColor,
      lineWidth: lineWidth,
      lineStyle: LineStyle.Solid,
      axisLabelVisible: true,
      title: "Min",
    };
    const avgPriceLine: CreatePriceLineOptions = {
      price: priceTargetConsensus.targetMedian,
      color:
        priceTargetConsensus.targetMedian > currPrice
          ? greenColor
          : priceTargetConsensus.targetMedian < currPrice
            ? redColor
            : tailwindCSS().theme.colors.main.gray[500],
      lineWidth: lineWidth,
      lineStyle: LineStyle.Solid,
      axisLabelVisible: true,
      title: "Avg",
    };
    const maxPriceLine: CreatePriceLineOptions = {
      price: priceTargetConsensus.targetHigh,
      color: greenColor,
      lineWidth: lineWidth,
      lineStyle: LineStyle.Solid,
      axisLabelVisible: true,
      title: "Max",
    };

    areaSeries.createPriceLine(currPriceLine);
    areaSeries.createPriceLine(minPriceLine);
    areaSeries.createPriceLine(avgPriceLine);
    areaSeries.createPriceLine(maxPriceLine);

    newChartAPI.timeScale().applyOptions({
      fixLeftEdge: true,
    });
  }

  useEffect(() => {
    displayChart();
  }, [sortedQuoteHistory, priceTargetConsensus, theme]);

  return (
    <div
      ref={chartRef}
      className={cn(`relative h-full w-full overflow-hidden duration-150`, {
        // "pointer-events-none opacity-50": loadingData,
      })}
    />
  );
}

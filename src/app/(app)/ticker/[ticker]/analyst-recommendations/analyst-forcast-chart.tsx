"use client";

import { cn, tailwindCSS } from "@/lib/utils";
import { TickerPriceTargetConsensus } from "@/modules/ticker/types";
import useTheme from "@/store/theme/useTheme";
import { QuoteHistory } from "@/types";
import {
  defaultAreaSeriesOptions,
  defaultChartOptions,
} from "@/utils/chart.utils";
import { addYears } from "date-fns";
import {
  createChart,
  CreatePriceLineOptions,
  LineData,
  LineStyle,
  LineType,
  Time,
} from "lightweight-charts";
import { useEffect, useMemo, useRef } from "react";

function generateWeeklyPriceData(range: {
  startDate: string | Date;
  endDate: string | Date;
  currentPrice: number;
  endPrice: number;
}) {
  const { startDate, endDate, currentPrice, endPrice } = range;
  const data: {
    date: Date;
    value: number;
  }[] = [];

  // Convert dates to Date objects if they are strings
  const start = typeof startDate === "string" ? new Date(startDate) : startDate;
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;

  // Calculate the number of weeks between the start and end dates
  const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
  const totalWeeks = Math.ceil(
    (end.getTime() - start.getTime()) / millisecondsPerWeek
  );

  // Calculate the price increment per week
  const priceIncrement = (endPrice - currentPrice) / totalWeeks;

  for (let i = 0; i <= totalWeeks; i++) {
    const currentDate = new Date(start.getTime() + i * millisecondsPerWeek);
    const currentValue = currentPrice + i * priceIncrement;

    data.push({
      date: currentDate,
      value: currentValue,
    });
  }

  return data;
}

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

    let timeScale = newChartAPI.timeScale();

    timeScale.applyOptions({
      fixLeftEdge: true,
    });

    const areaSeries = newChartAPI.addAreaSeries({
      ...defaultAreaSeriesOptions(theme),
      // bottomColor: "transparent",
      autoscaleInfoProvider: priceTargetConsensus
        ? () => ({
            priceRange: {
              minValue:
                priceTargetConsensus.targetLow +
                priceTargetConsensus.targetLow * 0.2,
              maxValue: priceTargetConsensus.targetHigh,
            },
          })
        : undefined,
    });

    areaSeries.applyOptions({
      lastValueVisible: false,
      priceLineVisible: false,
    });

    let seriesData = sortedQuoteHistory.map((data) => ({
      value: (data.high + data.low) / 2,
      time: (new Date(data.date).getTime() / 1000) as Time,
    }));

    areaSeries.setData(seriesData);

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
      lineVisible: false,
      axisLabelVisible: true,
      title: "Current",
    };

    // min price line
    const minPriceLine: CreatePriceLineOptions = {
      price: priceTargetConsensus.targetLow,
      color: redColor,
      lineVisible: false,
      axisLabelVisible: true,
      title: "Min",
    };

    // avarage price line
    const avgPriceLine: CreatePriceLineOptions = {
      price: priceTargetConsensus.targetMedian,
      color:
        priceTargetConsensus.targetMedian > currPrice
          ? greenColor
          : priceTargetConsensus.targetMedian < currPrice
            ? redColor
            : tailwindCSS().theme.colors.main.gray[500],
      lineVisible: false,
      axisLabelVisible: true,
      title: "Avg",
    };

    // max price line
    const maxPriceLine: CreatePriceLineOptions = {
      price: priceTargetConsensus.targetHigh,
      color: greenColor,
      lineVisible: false,
      axisLabelVisible: true,
      title: "Max",
    };

    areaSeries.createPriceLine(currPriceLine);
    areaSeries.createPriceLine(minPriceLine);
    areaSeries.createPriceLine(avgPriceLine);
    areaSeries.createPriceLine(maxPriceLine);

    const forecastLineSeries = newChartAPI.addLineSeries({
      color: tailwindCSS().theme.colors.primary.base,
      lineWidth: 1,
      lineType: LineType.Simple,
    });

    const oneYearInFuture = addYears(new Date(latestPrice.date), 1);

    const forecastData: LineData[] = [
      {
        value: currPrice,
        time: (oneYearInFuture.getTime() / 1000) as Time,
      },
      {
        value: priceTargetConsensus.targetHigh,
        time: (oneYearInFuture.getTime() / 1000 + 1) as Time,
      },
      {
        value: priceTargetConsensus.targetMedian,
        time: (oneYearInFuture.getTime() / 1000 + 2) as Time,
      },
      {
        value: priceTargetConsensus.targetLow,
        time: (oneYearInFuture.getTime() / 1000 + 3) as Time,
      },
    ].sort(
      (a, b) => (a.time as unknown as number) - (b.time as unknown as number)
    );

    forecastLineSeries.setData(forecastData);

    // Create lines for min, avg, max price forecasts
    const minLine = newChartAPI.addLineSeries({
      color: redColor,
      lineWidth: 1,
      lineStyle: LineStyle.Dashed,
    });

    minLine.setData(
      [
        {
          time: oneYearInFuture.getTime() as Time,
          value: priceTargetConsensus.targetLow,
        },
        { time: seriesData[seriesData.length - 1].time, value: currPrice },
      ].sort(
        (a, b) => (a.time as unknown as number) - (b.time as unknown as number)
      )
    );

    const avgLine = newChartAPI.addLineSeries({
      color: theme === "light" ? "#0000FF" : "#00FF00",
      lineWidth: 1,
      lineStyle: LineStyle.Dashed,
    });

    avgLine.setData(
      [
        {
          time: oneYearInFuture.getTime() as Time,
          value: priceTargetConsensus.targetMedian,
        },
        { time: seriesData[seriesData.length - 1].time, value: currPrice },
      ].sort(
        (a, b) => (a.time as unknown as number) - (b.time as unknown as number)
      )
    );

    const maxLine = newChartAPI.addLineSeries({
      color: greenColor,
      lineWidth: 1,
      lineStyle: LineStyle.Dashed,
    });

    maxLine.setData(
      [
        {
          time: oneYearInFuture.getTime() as Time,
          value: priceTargetConsensus.targetHigh,
        },
        { time: seriesData[seriesData.length - 1].time, value: currPrice },
      ].sort(
        (a, b) => (a.time as unknown as number) - (b.time as unknown as number)
      )
    );
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

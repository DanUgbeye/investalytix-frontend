"use client";

import { cn, tailwindCSS } from "@/lib/utils";
import { TickerPriceTargetConsensus } from "@/modules/ticker/types";
import useTheme from "@/store/theme/useTheme";
import { QuoteHistory } from "@/types";
import {
  defaultAreaSeriesOptions,
  defaultChartOptions,
} from "@/utils/chart.utils";
import { addWeeks, addYears, differenceInCalendarWeeks } from "date-fns";
import {
  createChart,
  CreatePriceLineOptions,
  LineData,
  LineStyle,
  LineType,
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
        fixLeftEdge: true,
        fixRightEdge: true,
        lockVisibleTimeRangeOnResize: true,
        uniformDistribution: false,
      },
    });

    let timeScale = newChartAPI.timeScale();

    const areaSeries = newChartAPI.addAreaSeries({
      ...defaultAreaSeriesOptions(theme),
      autoscaleInfoProvider: priceTargetConsensus
        ? () => ({
            priceRange: {
              minValue:
                priceTargetConsensus.targetLow +
                priceTargetConsensus.targetLow * 0.2,
              maxValue:
                priceTargetConsensus.targetHigh +
                priceTargetConsensus.targetLow * 0.2,
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
    const averageColor =
      priceTargetConsensus.targetMedian > currPrice
        ? greenColor
        : priceTargetConsensus.targetMedian < currPrice
          ? redColor
          : tailwindCSS().theme.colors.main.gray[500];

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
      color: averageColor,
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
      color: "transparent",
      lineWidth: 1,
      lineType: LineType.Curved,
      crosshairMarkerVisible: false,
      pointMarkersRadius: 0,
      pointMarkersVisible: false,
      lineVisible: false,
      priceLineVisible: false,
      lastValueVisible: false,
      baseLineVisible: false,
      visible: false,
    });

    const oneYearInFuture = addYears(new Date(latestPrice.date), 2);
    const numWeeks = differenceInCalendarWeeks(oneYearInFuture, new Date());

    const forecastData: LineData[] = Array(Math.floor(numWeeks / 3))
      .fill("_")
      .map((_, index) => ({
        value: currPrice,
        time: (addWeeks(new Date(), index + 2).getTime() / 1000) as Time,
      }))
      .sort(
        (a, b) => (a.time as unknown as number) - (b.time as unknown as number)
      );

    forecastLineSeries.setData(forecastData);

    // Create lines for min, avg, max price forecasts
    const minLine = newChartAPI.addLineSeries({
      color: redColor,
      lineWidth: 1,
      lineStyle: LineStyle.Dashed,
      lastValueVisible: false,
      priceLineVisible: false,
      crosshairMarkerVisible: false,
      pointMarkersVisible: false,
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
      color: averageColor,
      lineWidth: 1,
      lineStyle: LineStyle.Dashed,
      lastValueVisible: false,
      priceLineVisible: false,
      crosshairMarkerVisible: false,
      pointMarkersVisible: false,
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

    const currLine = newChartAPI.addLineSeries({
      color: tailwindCSS().theme.colors.primary.base,
      lineWidth: 2,
      lineStyle: LineStyle.Solid,
      lastValueVisible: false,
      priceLineVisible: false,
      crosshairMarkerVisible: false,
      pointMarkersVisible: false,
    });

    currLine.setData(
      [
        {
          time: oneYearInFuture.getTime() as Time,
          value: currPrice,
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
      lastValueVisible: false,
      priceLineVisible: false,
      crosshairMarkerVisible: false,
      pointMarkersVisible: false,
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
      className={cn(`relative h-full w-full overflow-hidden duration-150`)}
    />
  );
}

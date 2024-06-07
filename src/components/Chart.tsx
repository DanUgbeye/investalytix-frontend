"use client";
import chartData from "@/mock/chart";
import { tailwindCSS } from "@/lib/utils";
import useTheme from "@/store/theme/useTheme";
import { Time, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type ChartProps = {
  className?: HTMLElement["className"];
};

export default function Chart({ className = "" }: ChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const ref = chartRef.current;
    if (ref === null) return;

    // empty the children in parent component
    const children = ref.childNodes;
    children.forEach((child) => {
      ref.removeChild(child);
    });

    const chart = createChart(ref, {
      autoSize: true,
      layout: {
        background: { color: theme === "dark" ? "#000000" : "#ffffff" },
        textColor: theme === "dark" ? "rgba(255,255,255,0.8)" : "#000000",
      },
      grid: {
        vertLines: {
          color: theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
          visible: false,
        },
        horzLines: {
          color: theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
          visible: false,
        },
      },
      timeScale: {
        borderVisible: false,
      },
      rightPriceScale: {
        borderVisible: false,
        // tickLength: 1,
        // scaleMargins: {top: 0.9}
      },
      leftPriceScale: {
        borderVisible: false,
      },
    });
    const data = chartData.map((data) => ({
      ...data,
      value: (data.high + data.low) / 2,
      time: (new Date(data.date).getTime() / 1000) as Time,
    }));

    function initChart() {
      const color =
        theme === "dark"
          ? tailwindCSS().theme.colors.primary.base
          : tailwindCSS().theme.colors.primary.base;

      const lineSeries = chart.addAreaSeries({
        lineColor: color,
        lineWidth:1,

        topColor:
          theme === "dark"
            ? "rgba(251, 146, 60, 0.3)"
            : "rgba(251, 146, 60, 0.3)",
        bottomColor:
          theme === "dark"
            ? "rgba(255, 139, 30, 0.28)"
            : "rgba(251, 139, 30, 0.28)",
        // lineWidth: 1,
      });
      lineSeries.setData(data);
      chart.timeScale().fitContent();
    }

    initChart();

    return () => {};
  }, [theme]);

  return (
    <div
      className={twMerge(`relative h-full w-full overflow-hidden`, className)}
      ref={chartRef}
    ></div>
  );
}

"use client";
import { tailwindCSS } from "@/lib/utils";
import {
  AreaStyleOptions,
  DeepPartial,
  SeriesOptionsCommon,
  TimeChartOptions,
} from "lightweight-charts";

export function defaultChartOptions(
  theme: string
): DeepPartial<TimeChartOptions> {
  return {
    autoSize: true,
    layout: {
      background: { color: theme === "dark" ? "#000000" : "#ffffff" },
      textColor: theme === "dark" ? "rgba(255,255,255,0.8)" : "#000000",
    },
    grid: {
      vertLines: {
        visible: false,
      },
      horzLines: {
        visible: false,
      },
    },
    timeScale: {
      borderVisible: false,
    },
    rightPriceScale: {
      borderVisible: false,
    },
    leftPriceScale: {
      borderVisible: false,
    },
  };
}

export function defaultAreaSeriesOptions(
  theme: string
): DeepPartial<AreaStyleOptions & SeriesOptionsCommon> {
  return {
    lineColor: tailwindCSS().theme.colors.primary.base,
    lineWidth: 2,
    topColor:
      theme === "dark" ? "rgba(251, 146, 60, 0.1)" : "rgba(251, 146, 60, 0.1)",
    bottomColor: theme === "dark" ? "black" : "white",
  };
}

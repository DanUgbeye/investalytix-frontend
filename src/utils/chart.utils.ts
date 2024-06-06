"use client";
import { tailwindCSS } from "@/lib/utils";
import {
  AreaStyleOptions,
  DeepPartial,
  SeriesOptionsCommon,
  TimeChartOptions
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
      // tickMarkFormatter: ()
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
    topColor:
      theme === "dark" ? "rgba(251, 146, 60, 0.3)" : "rgba(251, 146, 60, 0.3)",
    bottomColor:
      theme === "dark"
        ? "rgba(255, 139, 30, 0.28)"
        : "rgba(251, 139, 30, 0.28)",
  };
}

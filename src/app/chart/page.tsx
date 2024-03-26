"use client";
import { Container } from "@/components/container";
import { Time, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import chartData from "@/mock/chart";

export default function ChartPage() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = chartRef.current;
    if (ref === null) return;

    const chart = createChart(ref, { autoSize: true });
    const data = chartData.map((data) => ({
      ...data,
      time: new Date(data.date).getTime() / 1000 as Time,
    }));

    function initChart() {
      chart.addCandlestickSeries().setData(data);
      chart.timeScale().fitContent();
    }

    initChart();

    return () => {};
  }, []);
  return (
    <>
      <div
        className="relative h-[calc(100vh_-_80px)] w-full overflow-hidden"
        ref={chartRef}
      ></div>
    </>
  );
}

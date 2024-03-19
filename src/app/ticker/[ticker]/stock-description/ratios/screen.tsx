"use client";

import chart from "@/mock/chart";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface StockDescriptionRatioScreenProps {
  ticker: string;
}

export default function StockDescriptionRatioScreen(
  props: StockDescriptionRatioScreenProps
) {
  const { ticker } = props;

  return (
    <section className="  ">
      <div className=" grid divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0 ">
        <div className=" flex lg:px-3 flex-wrap gap-x-4 py-2 lg:w-full lg:justify-center ">
          <span className="  ">Fiscal Year End</span>
          <span className=" font-bold ">09/2023</span>
        </div>

        <div className=" flex lg:px-3 flex-wrap gap-x-4 py-2 lg:w-full lg:justify-center ">
          <span className="  ">Last Quarter End</span>
          <span className=" font-bold ">09/2023 Q4</span>
        </div>

        <div className=" flex lg:px-3 flex-wrap gap-x-4 py-2 lg:w-full lg:justify-center ">
          <span className="  ">Current/T12M</span>
          <span className=" font-bold ">(USD)</span>
        </div>
      </div>
    </section>
  );
}

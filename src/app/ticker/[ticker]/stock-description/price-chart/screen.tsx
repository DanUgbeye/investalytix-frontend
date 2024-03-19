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

interface StockDescriptionPriceChartScreenProps {
  ticker: string;
}

export default function StockDescriptionPriceChartScreen(
  props: StockDescriptionPriceChartScreenProps
) {
  const { ticker } = props;

  return (
    <section className="  ">
      <div className=" grid h-full min-h-[25rem] w-full py-10 lg:min-h-[30rem] ">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="!m-0 !p-0 text-sm"
        >
          <AreaChart
            data={chart}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            className="!p-0"
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="60%" stopColor="#3354F4" stopOpacity={100} />
                {/* <stop offset="80%" stopColor="rgba(255,0,0,0.62)" stopOpacity={100} /> */}
                {/* <stop offset="80%" stopColor="#ff0000" stopOpacity={100} /> */}
                <stop
                  offset="90%"
                  stopColor="rgba(51,84,244,0.62)"
                  stopOpacity={100}
                />
              </linearGradient>
            </defs>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey={({ date }) =>
                date.split(" ")[1].split(":").slice(0, 2).join(":")
              }
            />
            <YAxis dataKey="close" />
            <Tooltip />
            <Area type="monotone" dataKey="close" fill="url(#gradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

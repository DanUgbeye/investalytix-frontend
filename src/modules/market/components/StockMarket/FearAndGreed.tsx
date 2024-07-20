"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import useFetcher from "@/hooks/useFetcher";
import moment from "moment";

type FearResponse = {
  name: string;
  data: {
    value: string;
    value_classification: string;
    timestamp: string;
    time_until_update: string;
  }[];
  metadata: {
    error: null;
  };
};

async function getData() {
  const res = await fetch(`https://api.alternative.me/fng/`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<FearResponse>;
}

export default function FearAndGreed() {
  const { loading, data, wrapper } = useFetcher<FearResponse>();
  const markets = ["U.S", "AMERICAS"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    wrapper(getData);
  }, []);

  const updateSelectedIndex = (num: number) =>
    setSelectedIndex((state) => (state === num ? -1 : num));

  if (!data) return null;

  const pieData = data.data.map((index) => ({
    name: index.value_classification,
    value: Number(index.value),
  }));

  const otherPieData = [
    { name: "Extreme Fear", value: 100 / 6 },
    { name: "Fear", value: 100 / 6 },
    { name: "Extreme Greed", value: 100 / 6 },
  ];

  const COLORS = [
    "#FF3932",
    "#F79009",
    "#60B527",
    "#038C8C",
    "#ffffff",
    "#5048E5",
  ];

  const RADIAN = Math.PI / 180;
  const cx = 120;
  const cy = 200;
  const iR = 60;
  const oR = 80;
  const value = pieData[0].value;
  //   @ts-ignore
  const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    //   @ts-ignore
    pieData.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 4;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      //   <circle
      //     cx={x0}
      //     cy={y0}
      //     r={r/3}
      //     fill={color}
      //     stroke="none"
      //     stroke-width="3"
      //   />,
      <path
        key="path"
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        fill={color}
      />,
      <circle
        key="circle"
        cx={x0}
        cy={y0}
        r={r}
        fill="#ffffff"
        stroke={color}
        stroke-width="3"
      />,
      //   <path
      //     d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      //     stroke="#none"
      //     fill={color}
      //   />,
    ];
  };

  console.log(data);

  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <h2 className="white-text text-2xl font-extrabold capitalize">
          Fear & Greed Index
        </h2>

        <div className="flex gap-2">
          {markets.map((market, index) => (
            <button
              key={market}
              className={`whitespace-nowrap rounded-full px-4 py-1 text-center text-sm capitalize ${
                selectedIndex === index
                  ? "bg-primary-base text-white"
                  : "bg-hover-focus white-text bg-main-gray-200/20 text-[#636363]"
              }`}
              onClick={() => updateSelectedIndex(index)}
            >
              {market}
            </button>
          ))}
        </div>
      </header>

      <div className="mb-2 flex items-center justify-between">
        <p className="text-xl font-medium">
          What Emotion is driving the Marker Right now?
        </p>
        <p className="text-sm">
          Last updated{" "}
          {moment(new Date(1000 * Number(data.data[0].timestamp))).format(
            "MMM D [at] h:mm:ss A"
          )}
        </p>
      </div>
      {/* <Link href="" className="text-main-blue-base dark:text-main-blue-light">
        Learn more about the index.
      </Link> */}

      <div className="mt-2 grid grid-cols-2">
        <div className="h-80 overflow-auto">
          <ResponsiveContainer width="100%" height="100%" className="!m-0 !p-0">
            <PieChart className="">
              <Pie
                data={[...pieData, ...otherPieData]}
                cx={cx}
                cy={cy}
                innerRadius={iR}
                outerRadius={oR}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {[...pieData, ...otherPieData].map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              {needle(value, data, cx, cy, iR, oR, "#D0D5DD")}
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col gap-8">
          <Stat
            reading={Number(data.data[0].value)}
            index="Greed"
            timeframe={moment(
              new Date(1000 * Number(data.data[0].timestamp))
            ).fromNow()}
          />
        </div>
      </div>
    </>
  );
}

function Stat({
  timeframe,
  index,
  reading,
}: {
  timeframe: string;
  index: string;
  reading: number;
}) {
  return (
    <div className="relative flex items-center justify-between gap-6">
      <div className="">
        <p className="mb-2 text-sm text-[#636363] dark:text-[#D9D9D9]">
          {timeframe}
        </p>
        <p className="font-bold text-[#252525] dark:text-white/80">{index}</p>
      </div>

      {/* line */}
      <div className="flex-grow border-t-2 border-dashed border-[#EAE9E9]"></div>

      <p className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2A3037] bg-white font-bold text-[#252525] dark:border-0 dark:bg-white/20 dark:text-white/80">
        {reading}
      </p>
    </div>
  );
}

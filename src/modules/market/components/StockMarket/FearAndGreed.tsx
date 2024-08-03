"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import useFetcher from "@/hooks/useFetcher";
import moment from "moment";
import { motion } from "framer-motion";
import Spinner from "@/components/spinner";

const a = {
  lastUpdated: {
    epochUnixSeconds: 1722618853,
    humanDate: "2024-08-02T17:14:13.000Z",
  },
  fgi: {
    now: {
      value: 26,
      valueText: "Fear",
    },
    previousClose: {
      value: 39,
      valueText: "Fear",
    },
    oneWeekAgo: {
      value: 45,
      valueText: "Neutral",
    },
    oneMonthAgo: {
      value: 38,
      valueText: "Fear",
    },
    oneYearAgo: {
      value: 77,
      valueText: "Extreme Greed",
    },
  },
};

type FearResponse = {
  message: string;
  data: {
    lastUpdated: {
      epochUnixSeconds: number;
      humanDate: string;
    };
    fgi: {
      now: {
        value: number;
        valueText: string;
      };
      previousClose: {
        value: number;
        valueText: string;
      };
      oneWeekAgo: {
        value: number;
        valueText: string;
      };
      oneMonthAgo: {
        value: number;
        valueText: string;
      };
      oneYearAgo: {
        value: number;
        valueText: string;
      };
    };
  };
};

/**
 * {
    "lastUpdated": {
        "epochUnixSeconds": 1722618853,
        "humanDate": "2024-08-02T17:14:13.000Z"
    },
    "fgi": {
        "now": {
            "value": 26,
            "valueText": "Fear"
        },
        "previousClose": {
            "value": 39,
            "valueText": "Fear"
        },
        "oneWeekAgo": {
            "value": 45,
            "valueText": "Neutral"
        },
        "oneMonthAgo": {
            "value": 38,
            "valueText": "Fear"
        },
        "oneYearAgo": {
            "value": 77,
            "valueText": "Extreme Greed"
        }
    }
}
 */

function mapValueToRange(value: number) {
  if (value >= 0 && value <= 20) {
    return 20; // Extreme Fear
  } else if (value >= 21 && value <= 40) {
    return 40; // Fear
  } else if (value >= 41 && value <= 60) {
    return 60; // Neutral
  } else if (value >= 61 && value <= 80) {
    return 80; // Greed
  } else {
    return 100; // Extreme Greed
  }
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/fear-greed-index`
  );
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    wrapper(getData);
  }, []);

  const otherPieData = [
    { name: "Extreme Fear", value: 20 },
    { name: "Fear", value: 20 },
    { name: "Neutral", value: 20 },
    { name: "Greed", value: 20 },
    { name: "Extreme Greed", value: 20 },
  ];

  const COLORS = [
    "#FF0000", // Extreme Fear (red)
    "#FF4500", // Fear (orange-red)
    "#FFD700", // Neutral (gold)
    "#32CD32", // Greed (lime green)
    "#00FF00", // Extreme Greed (green)
  ];

  const RADIAN = Math.PI / 180;

  const needle = (
    value: number,
    cx: number,
    cy: number,
    iR: number,
    oR: number,
    color: string
  ) => {
    const total = 100;
    const numSegments = 5; // Number of segments in your data
    const anglePerSegment = 360 / numSegments; // Each segment's angle in the chart

    // Determine which segment the value falls into and find the center angle
    const segmentIndex = Math.floor(value / (total / numSegments)) + 1;
    const segmentAngleStart = anglePerSegment * segmentIndex;
    const ang = 360 - (segmentAngleStart + anglePerSegment / 2); // Center of the segment

    const length = (iR + 2 * oR) / 5;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx;
    const y0 = cy;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
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
        strokeWidth="3"
      />,
    ];
  };

  return (
    <>
      <header className="mb-6">
        <h2 className="white-text text-2xl font-extrabold capitalize">
          Fear & Greed Index
        </h2>
      </header>

      <motion.div
        initial="rest"
        animate={loading ? "show" : "hide"}
        variants={{
          rest: {
            top: -50,
            opacity: 0,
          },
          show: {
            opacity: 1,
            y: -20,
          },
          hide: {
            opacity: 0,
            y: -50,
          },
        }}
        className="flex items-center justify-center"
      >
        <Spinner />
      </motion.div>

      {data && (
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xl font-medium">
            What Emotion is driving the Marker Right now?
          </p>
          <p className="text-sm">
            Last updated{" "}
            {moment(new Date(data.data.lastUpdated.humanDate)).format(
              "MMM D [at] h:mm:ss A"
            )}
          </p>
        </div>
      )}

      {data && (
        <div className="mt-2 grid md:grid-cols-2">
          <div className="h-80 overflow-auto">
            <ResponsiveContainer
              ref={containerRef}
              width="100%"
              height="100%"
              className="!m-0 !p-0"
            >
              <PieChart className="">
                <Pie
                  data={[...otherPieData]}
                  cx={(containerRef?.current?.clientWidth ?? 0) / 2}
                  cy={(containerRef?.current?.clientHeight ?? 0) / 2}
                  // innerRadius={iR}
                  innerRadius={(containerRef?.current?.clientHeight ?? 0) * 0.2}
                  outerRadius={(containerRef?.current?.clientHeight ?? 0) * 0.3}
                  // outerRadius={oR}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                  label={(d) => d.name}
                >
                  {[...otherPieData].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                {needle(
                  mapValueToRange(data.data.fgi.now.value),
                  (containerRef?.current?.clientWidth ?? 0) / 2,
                  (containerRef?.current?.clientHeight ?? 0) / 2,
                  (containerRef?.current?.clientHeight ?? 0) * 0.2,
                  (containerRef?.current?.clientHeight ?? 0) * 0.3,
                  "#D0D5DD"
                )}
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col gap-8">
            <Stat
              reading={Number(data.data.fgi.now.value)}
              index={data.data.fgi.now.valueText}
              timeframe="now"
            />
            <Stat
              reading={Number(data.data.fgi.oneWeekAgo.value)}
              index={data.data.fgi.oneWeekAgo.valueText}
              timeframe="one week ago"
            />
            <Stat
              reading={Number(data.data.fgi.oneMonthAgo.value)}
              index={data.data.fgi.oneMonthAgo.valueText}
              timeframe="one month ago"
            />
            <Stat
              reading={Number(data.data.fgi.oneYearAgo.value)}
              index={data.data.fgi.oneYearAgo.valueText}
              timeframe="one year ago"
            />
          </div>
        </div>
      )}
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

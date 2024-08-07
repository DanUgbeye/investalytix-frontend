"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Text,
  PieLabel,
} from "recharts";
import useFetcher from "@/hooks/useFetcher";
import moment from "moment";
import { motion } from "framer-motion";
import Spinner from "@/components/spinner";
import { useAppStore } from "@/store";
import { useMediaQuery } from "react-responsive";

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

function mapValueIndex(value: number) {
  if (value >= 0 && value <= 20) {
    return 4; // Extreme Fear
  } else if (value >= 21 && value <= 40) {
    return 3; // Fear
  } else if (value >= 41 && value <= 60) {
    return 2; // Neutral
  } else if (value >= 61 && value <= 80) {
    return 1; // Greed
  } else {
    return 0; // Extreme Greed
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
  const theme = useAppStore((s) => s.theme);
  const { loading, data, wrapper } = useFetcher<FearResponse>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const isTablet = useMediaQuery({ query: "(min-width: 500px)" });
  const isDesktop = useMediaQuery({ query: "(max-width: 1024px)" });

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

  const COLORS = useMemo(() => {
    return theme === "dark"
      ? [
          "#8B0000", // Extreme Fear (dark red)
          "#FF6347", // Fear (tomato)
          "#B8860B", // Neutral (dark goldenrod)
          "#006400", // Greed (dark green)
          "#228B22", // Extreme Greed (forest green)
        ]
      : [
          "#FF0000", // Extreme Fear (red)
          "#FF4500", // Fear (orange-red)
          "#FFD700", // Neutral (gold)
          "#32CD32", // Greed (lime green)
          "#00FF00", // Extreme Greed (green)
        ];
  }, [theme]);

  const RADIAN = Math.PI / 180;

  const needle = (
    segmentIndex: number,
    cx: number,
    cy: number,
    iR: number,
    oR: number,
    color: string
  ) => {
    const numSegments = 5; // Number of segments in your data
    const anglePerSegment = 180 / numSegments; // Each segment's angle in the chart
    const segmentAngleStart = anglePerSegment * segmentIndex;
    const ang = segmentAngleStart + anglePerSegment / 2; // Center of the segment

    const length = (iR + 1 * oR) / 5;
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

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    payload,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
    payload: { payload: (typeof otherPieData)[number] };
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const isActive =
      payload.payload.name.toLowerCase() ===
      data.data.fgi.now.valueText.toLowerCase();

    const words = payload.payload.name.split(" ");

    return (
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fill={`${isActive ? COLORS[index] : theme === "dark" ? "rgb(255 255 255 / 0.8)" : "#000000"}`}
        className="break-words max-md:text-sm"
      >
        {words.map((word, i) => (
          <tspan key={i} x={x} dy={i === 0 ? 0 : 14}>
            {word}
          </tspan>
        ))}
      </text>
    );
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
        <div className="mt-2 grid gap-10">
          <div ref={containerRef}>
            <ResponsiveContainer
              width="100%"
              height="100%"
              className="!m-0 min-h-[300px] !p-0"
              onResize={(width, height) => {
                setDimensions({
                  width,
                  height,
                });
              }}
            >
              <PieChart className="">
                <Pie
                  data={[...otherPieData]}
                  cx={dimensions.width / 2}
                  cy={dimensions.height - 10}
                  innerRadius={dimensions.height * (isTablet ? 0.5 : 0.25)}
                  outerRadius={dimensions.height * (isTablet ? 0.8 : 0.5)}
                  startAngle={180}
                  endAngle={0}
                  fill="#8884d8"
                  paddingAngle={1}
                  dataKey="value"
                  labelLine={false}
                  label={renderCustomLabel}
                >
                  {[...otherPieData].map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill="transparent"
                      stroke={
                        data.data.fgi.now.valueText === entry.name
                          ? COLORS[index]
                          : theme === "dark"
                            ? "rgb(255 255 255 / 0.8)"
                            : "#010101"
                      }
                    />
                  ))}
                </Pie>
                {needle(
                  mapValueIndex(data.data.fgi.now.value),
                  dimensions.width / 2,
                  dimensions.height - 10,
                  dimensions.height * (isTablet ? 0.5 : 0.25),
                  dimensions.height * (isTablet ? 0.8 : 0.5),
                  "#D0D5DD"
                )}
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
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

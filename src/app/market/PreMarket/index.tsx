"use client";
import chart from "@/mock/chart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Line,
  ComposedChart,
} from "recharts";
import Quotes from "../Quotes";
import { RefObject, useRef, useState } from "react";
import USMarkets from "./US";
import Americas from "./Americas";
import { createPortal } from "react-dom";

const markets = ["U.S", "AMERICAS"];

export default function PreMarket({
  portal,
}: {
  portal: RefObject<HTMLDivElement>;
}) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const updateSelectedIndex = (num: number) =>
    setSelectedIndex((state) => (state === num ? -1 : num));

  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="">
      {portal.current !== null &&
        createPortal(
          <div ref={headerRef} className="mb-14">
            <div className="mx-auto grid w-fit grid-cols-2 rounded bg-[#F9F9F9] p-3">
              {markets.map((market, index) => (
                <button
                  key={market}
                  className={`whitespace-nowrap rounded px-14 py-2 font-semibold ${
                    selectedIndex === index
                      ? "bg-primary-base text-white"
                      : "bg-[#F5F5F5] text-[#636363]"
                  }`}
                  onClick={() => updateSelectedIndex(index)}
                >
                  {market}
                </button>
              ))}
            </div>
          </div>,
          portal.current
        )}

      <div>
        {selectedIndex === 0 && <USMarkets portal={headerRef} />}
        {selectedIndex === 1 && <Americas />}
      </div>

      {selectedIndex === -1 && (
        <div className="grid gap-10 lg:grid-cols-2">
          {/* DOW (Mini) */}
          <section className="mt-11">
            <header className="mb-8">
              <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
                DOW (Mini)
              </h2>
            </header>

            <div className="h-80 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="!m-0 !p-0"
              >
                <AreaChart
                  // width={500}
                  // height={400}
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
                      <stop
                        offset="60%"
                        stopColor="#3354F4"
                        stopOpacity={100}
                      />
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

            <Futures />
            <Futures isFairValue />

            <p className="mt-4 text-sm font-bold text-[#2F3A48]">
              Last updated: Thu Dec 28, 2023 : 6:22 AM EST
            </p>
          </section>

          {/* S&P 500 (Mini) */}
          <section className="mt-11">
            <header className="mb-8">
              <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
                S&P 500 (Mini)
              </h2>
            </header>

            <div className="h-80 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="!m-0 !p-0"
              >
                <AreaChart
                  // width={500}
                  // height={400}
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
                      <stop
                        offset="60%"
                        stopColor="#3354F4"
                        stopOpacity={100}
                      />
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

            <Futures />
            <Futures isFairValue />

            <p className="mt-4 text-sm font-bold text-[#2F3A48]">
              Last updated: Thu Dec 28, 2023 : 6:22 AM EST
            </p>
          </section>

          {/* NASDAQ (Mini) */}
          <section className="mt-11">
            <header className="mb-8">
              <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
                NASDAQ (Mini)
              </h2>
            </header>

            <div className="h-80 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="!m-0 !p-0"
              >
                <ComposedChart
                  data={chart.slice(0, 10)}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                  className="!p-0"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={({ date }) =>
                      date.split(" ")[1].split(":").slice(0, 2).join(":")
                    }
                  />
                  <YAxis dataKey="close" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="close"
                    fill="#BBD5F2"
                    strokeOpacity={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="close"
                    fill="#F94144"
                    stroke="#F94144"
                    strokeWidth={2}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <Futures />
            <Futures isFairValue />

            <p className="mt-4 text-sm font-bold text-[#2F3A48]">
              Last updated: Thu Dec 28, 2023 : 6:22 AM EST
            </p>
          </section>

          {/* RUSELL (Mini) */}
          <section className="mt-11">
            <header className="mb-8">
              <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
                RUSELL (Mini)
              </h2>
            </header>

            <div className="h-80 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="!m-0 !p-0"
              >
                <ComposedChart
                  data={chart.slice(0, 10)}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                  className="!p-0"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={({ date }) =>
                      date.split(" ")[1].split(":").slice(0, 2).join(":")
                    }
                  />
                  <YAxis dataKey="close" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="close"
                    fill="#BBD5F2"
                    strokeOpacity={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="close"
                    fill="#F94144"
                    stroke="#F94144"
                    strokeWidth={2}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <Futures />
            <Futures isFairValue />

            <p className="mt-4 text-sm font-bold text-[#2F3A48]">
              Last updated: Thu Dec 28, 2023 : 6:22 AM EST
            </p>
          </section>

          {/* Asia-Pacific */}
          <section className="mt-11">
            <header className="mb-4">
              <h2 className="text-2xl font-bold">Asia-Pacific</h2>
            </header>

            <p className="mb-4 text-sm font-medium text-[#2F3A48]">
              Hang Seng Index
            </p>
            <div className="h-80 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="!m-0 !p-0"
              >
                <ComposedChart
                  data={chart.slice(10, 20)}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                  className="!p-0"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={({ date }) =>
                      date.split(" ")[1].split(":").slice(0, 2).join(":")
                    }
                  />
                  <YAxis dataKey="close" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="close"
                    fill="#BBD5F2"
                    strokeOpacity={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="close"
                    fill="#F94144"
                    stroke="#F94144"
                    strokeWidth={2}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <p className="mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
              Previous Close: 16.2k
            </p>

            <Quotes />
          </section>

          {/* Europe */}
          <section className="mt-11">
            <header className="mb-4">
              <h2 className="text-2xl font-bold">Europe</h2>
            </header>

            <p className="mb-4 text-sm font-medium text-[#2F3A48]">FTSE 100</p>
            <div className="h-80 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="!m-0 !p-0"
              >
                <ComposedChart
                  data={chart.slice(10, 20)}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                  className="!p-0"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={({ date }) =>
                      date.split(" ")[1].split(":").slice(0, 2).join(":")
                    }
                  />
                  <YAxis dataKey="close" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="close"
                    fill="#BBD5F2"
                    strokeOpacity={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="close"
                    fill="#F94144"
                    stroke="#F94144"
                    strokeWidth={2}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <p className="mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
              Previous Close: 16.2k
            </p>

            <Quotes />
          </section>

          {/* Commodities */}
          <section className="mt-11">
            <header className="mb-4">
              <h2 className="text-2xl font-bold">Commodities</h2>
            </header>

            <p className="mb-4 text-sm font-medium text-[#2F3A48]">
              Hang Seng Index
            </p>
            <div className="h-80 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="!m-0 !p-0"
              >
                <ComposedChart
                  data={chart.slice(10, 20)}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                  className="!p-0"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={({ date }) =>
                      date.split(" ")[1].split(":").slice(0, 2).join(":")
                    }
                  />
                  <YAxis dataKey="close" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="close"
                    fill="#BBD5F2"
                    strokeOpacity={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="close"
                    fill="#F94144"
                    stroke="#F94144"
                    strokeWidth={2}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <p className="mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
              Previous Close: 16.2k
            </p>

            <Quotes />
          </section>

          {/* Currencies */}
          <section className="mt-11">
            <header className="mb-4">
              <h2 className="text-2xl font-bold">Currencies</h2>
            </header>

            <p className="mb-4 text-sm font-medium text-[#2F3A48]">FTSE 100</p>
            <div className="h-80 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="!m-0 !p-0"
              >
                <ComposedChart
                  data={chart.slice(10, 20)}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                  className="!p-0"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={({ date }) =>
                      date.split(" ")[1].split(":").slice(0, 2).join(":")
                    }
                  />
                  <YAxis dataKey="close" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="close"
                    fill="#BBD5F2"
                    strokeOpacity={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="close"
                    fill="#F94144"
                    stroke="#F94144"
                    strokeWidth={2}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <p className="mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
              Previous Close: 16.2k
            </p>

            <Quotes />
          </section>

          {/* Volatility & Global Indexes */}
          <section className="mt-11">
            <header className="mb-4">
              <h2 className="text-2xl font-bold">
                Volatility & Global Indexes
              </h2>
            </header>

            <p className="mb-4 text-sm font-medium text-[#2F3A48]">
              Hang Seng Index
            </p>
            <div className="h-80 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="!m-0 !p-0"
              >
                <ComposedChart
                  data={chart.slice(10, 20)}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                  className="!p-0"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={({ date }) =>
                      date.split(" ")[1].split(":").slice(0, 2).join(":")
                    }
                  />
                  <YAxis dataKey="close" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="close"
                    fill="#BBD5F2"
                    strokeOpacity={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="close"
                    fill="#F94144"
                    stroke="#F94144"
                    strokeWidth={2}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <p className="mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
              Previous Close: 16.2k
            </p>

            <Quotes />
          </section>

          {/* U.S. Treasurys */}
          <section className="mt-11">
            <header className="mb-4">
              <h2 className="text-2xl font-bold">U.S. Treasurys</h2>
            </header>

            <p className="mb-4 text-sm font-medium text-[#2F3A48]">FTSE 100</p>
            <div className="h-80 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="!m-0 !p-0"
              >
                <ComposedChart
                  data={chart.slice(10, 20)}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                  className="!p-0"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={({ date }) =>
                      date.split(" ")[1].split(":").slice(0, 2).join(":")
                    }
                  />
                  <YAxis dataKey="close" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="close"
                    fill="#BBD5F2"
                    strokeOpacity={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="close"
                    fill="#F94144"
                    stroke="#F94144"
                    strokeWidth={2}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <p className="mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
              Previous Close: 16.2k
            </p>

            <Quotes />
          </section>

          {/* U.S. Indexes */}
          <section className="mt-11">
            <header className="mb-4">
              <h2 className="text-2xl font-bold">U.S. Indexes</h2>
            </header>

            <p className="mb-4 text-sm font-medium text-[#2F3A48]">
              Hang Seng Index
            </p>
            <div className="h-80 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="!m-0 !p-0"
              >
                <ComposedChart
                  data={chart.slice(10, 20)}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                  className="!p-0"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={({ date }) =>
                      date.split(" ")[1].split(":").slice(0, 2).join(":")
                    }
                  />
                  <YAxis dataKey="close" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="close"
                    fill="#BBD5F2"
                    strokeOpacity={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="close"
                    fill="#F94144"
                    stroke="#F94144"
                    strokeWidth={2}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <p className="mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
              Previous Close: 16.2k
            </p>

            <Quotes />
          </section>

          {/* Sectors */}
          <section className="mt-11">
            <header className="mb-4">
              <h2 className="text-2xl font-bold">Sectors</h2>
            </header>

            <p className="mb-4 text-sm font-medium text-[#2F3A48]">FTSE 100</p>
            <div className="h-80 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="!m-0 !p-0"
              >
                <ComposedChart
                  data={chart.slice(10, 20)}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                  className="!p-0"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={({ date }) =>
                      date.split(" ")[1].split(":").slice(0, 2).join(":")
                    }
                  />
                  <YAxis dataKey="close" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="close"
                    fill="#BBD5F2"
                    strokeOpacity={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="close"
                    fill="#F94144"
                    stroke="#F94144"
                    strokeWidth={2}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <p className="mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
              Previous Close: 16.2k
            </p>

            <Quotes />
          </section>
        </div>
      )}
    </div>
  );
}

function Futures({ isFairValue = false }: { isFairValue?: boolean }) {
  return (
    <div className="mt-8">
      <p className="mb-4 font-bold uppercase text-[#2F3A48]">
        {isFairValue ? "FAIR VALUE FUTURES (-27.48)" : "FUTURES"}
      </p>

      <table className="w-full table-fixed">
        <thead>
          <tr className="">
            <th className="border  border-[#E1E6EF] bg-[#020224] p-3 text-center text-sm font-bold text-[#F8F7F7]">
              {isFairValue ? "FV CLOSE" : "IND CLOSE"}
            </th>
            <th className="border  border-[#E1E6EF] bg-[#020224] p-3 text-center text-sm font-bold text-[#F8F7F7]">
              FUTURE
            </th>
            <th className="border  border-[#E1E6EF] bg-[#020224] p-3 text-center text-sm font-bold text-[#F8F7F7]">
              {isFairValue ? "IML OPEN" : "CHANGE"}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-auto">
            <td className="border border-[#E1E6EF] p-3 text-center text-sm font-bold text-[#636363]">
              37,656.52
            </td>
            <td className="border border-[#E1E6EF] p-3 text-center text-sm font-bold text-[#636363]">
              37,945
            </td>
            <td className="border border-[#E1E6EF] p-3 text-center text-sm font-bold text-[#636363]">
              -61
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

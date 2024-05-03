"use client";
import ColoredNumber from "@/components/ui/ColoredNumber";
import { tailwindCSS } from "@/lib/utils";
import useTheme from "@/store/theme/useTheme";
import { Popover } from "@headlessui/react";
import moment from "moment";
import { FiFlag } from "react-icons/fi";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const mockNews = [
  {
    country: "AU",
    time: new Date("2024-02-07T08:00:00Z"),
    name: "Employment Change",
    actual: 0,
    previous: 1,
    consensus: null,
    forecast: -1,
  },
  {
    country: "US",
    time: new Date("2024-02-07T09:30:00Z"),
    name: "Unemployment Rate",
    actual: 4.3,
    previous: 4.5,
    consensus: 4.4,
    forecast: 4.4,
  },
  {
    country: "JP",
    time: new Date("2024-02-07T03:00:00Z"),
    name: "GDP Growth Rate",
    actual: 0.6,
    previous: 0.5,
    consensus: 0.7,
    forecast: 0.7,
  },
  {
    country: "UK",
    time: new Date("2024-02-07T13:00:00Z"),
    name: "Inflation Rate",
    actual: 2.1,
    previous: 2.0,
    consensus: 2.2,
    forecast: 2.2,
  },
  {
    country: "CA",
    time: new Date("2024-02-07T10:00:00Z"),
    name: "Retail Sales",
    actual: 0.8,
    previous: 0.6,
    consensus: 0.7,
    forecast: 0.9,
  },
  {
    country: "EU",
    time: new Date("2024-02-07T14:00:00Z"),
    name: "Manufacturing PMI",
    actual: 52.5,
    previous: 52.2,
    consensus: 52.3,
    forecast: 52.4,
  },
  {
    country: "CN",
    time: new Date("2024-02-07T22:00:00Z"),
    name: "Trade Balance",
    actual: 56.2,
    previous: 55.8,
    consensus: 56.0,
    forecast: 56.5,
  },
  {
    country: "CH",
    time: new Date("2024-02-07T16:30:00Z"),
    name: "Consumer Confidence",
    actual: 103.8,
    previous: 103.5,
    consensus: 103.7,
    forecast: 103.9,
  },
  {
    country: "AU",
    time: new Date("2024-02-07T08:30:00Z"),
    name: "Trade Balance",
    actual: 7.2,
    previous: 7.1,
    consensus: 7.0,
    forecast: 7.3,
  },
  {
    country: "JP",
    time: new Date("2024-02-07T04:30:00Z"),
    name: "Industrial Production",
    actual: 1.2,
    previous: 1.0,
    consensus: 1.1,
    forecast: 1.3,
  },
];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Summary() {
  const { theme } = useTheme();
  return (
    <div className="overflow-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="white-text text-left text-[#212529]">
            <th className="whitespace-nowrap border-b border-b-[#DEE2E6] dark:border-b-[#191919]  bg-[#F5F5F5] p-2 font-normal dark:bg-transparent">
              Tuesday March 12 2024
            </th>
            <th className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  bg-[#F5F5F5] p-2 font-normal dark:bg-transparent"></th>
            <th className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  bg-[#F5F5F5] p-2 font-normal dark:bg-transparent"></th>
            <th className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  bg-[#F5F5F5] p-2 font-normal dark:bg-transparent">
              Actual
            </th>
            <th className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  bg-[#F5F5F5] p-2 font-normal dark:bg-transparent">
              Previous
            </th>
            <th className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  bg-[#F5F5F5] p-2 font-normal dark:bg-transparent">
              Consensus
            </th>
            <th className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  bg-[#F5F5F5] p-2 font-normal dark:bg-transparent">
              Forecast
            </th>
            <th className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  bg-[#F5F5F5] p-2 font-normal dark:bg-transparent"></th>
            <th className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  bg-[#F5F5F5] p-2 font-normal dark:bg-transparent"></th>
          </tr>
        </thead>

        <tbody>
          {mockNews.map((news, index) => (
            <tr key={index} className="white-text text-left text-[#212529]">
              <td className="whitespace-nowrap border-b border-b-[#DEE2E6] dark:border-b-[#191919]  p-2 font-normal">
                {moment(news.time).format("HH:MM A")}
              </td>
              <td className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  p-2 font-normal">
                <span className="flex items-center gap-1 px-10">
                  <FiFlag />
                  {news.country}
                </span>
              </td>
              <td className="border-b border-b-[#DEE2E6] dark:border-b-[#191919] p-2 font-normal">
                {news.name}
              </td>
              <td className="border-b border-b-[#DEE2E6] dark:border-b-[#191919] p-2 font-normal">
                <ColoredNumber number={news.actual} />
              </td>
              <td className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  p-2 font-normal">
                <ColoredNumber number={news.previous} />
              </td>
              <td className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  p-2 font-normal">
                {news.consensus && <ColoredNumber number={news.consensus} />}
              </td>
              <td className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  p-2 font-normal">
                <ColoredNumber number={news.forecast} colored={false} />
              </td>
              <td className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  p-2 font-normal">
                <Popover className="relative">
                  <Popover.Button>
                    <svg
                      width={41}
                      height={20}
                      viewBox="0 0 41 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        x="0.046875"
                        width={40}
                        height={20}
                        fill="url(#pattern0)"
                      />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width={1}
                          height={1}
                        >
                          <use
                            xlinkHref="#image0_1232_32255"
                            transform="scale(0.025 0.05)"
                          />
                        </pattern>
                        <image
                          id="image0_1232_32255"
                          width={40}
                          height={20}
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAYAAAD/Rn+7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABtSURBVEhL7Y7BCYBAEMSuOguzJa3HLnyfDOR1DPuSXYUN5JVPRvM3tv2cq6Rv8NrgfR1zlWSbJOcQDbgmyTlEA65Jcg7RgGuSXI+bk+R63Jwk1+PmJLkeNyfJ9bg5Sa7HzUlyPW5OkpumyWOMB45jR4wlqauuAAAAAElFTkSuQmCC"
                        />
                      </defs>
                    </svg>
                  </Popover.Button>

                  <Popover.Panel className="absolute right-0 z-10 block ">
                    <div className="grid h-full w-[30vw] bg-white p-2 shadow dark:shadow-none dark:border dark:border-[#191919] dark:bg-black ">
                      <ResponsiveContainer className="min-h-20 md:min-h-40">
                        <BarChart data={data}>
                          <XAxis
                            dataKey={"uv"}
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                          />
                          <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value}`}
                          />
                          <Bar
                            dataKey={"uv"}
                            fill={
                              theme === "dark"
                                ? tailwindCSS().theme.colors.primary.light
                                : tailwindCSS().theme.colors.primary.base
                            }
                            radius={[4, 4, 0, 0]}
                            className=""
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Popover.Panel>
                </Popover>
              </td>
              <td className="border-b border-b-[#DEE2E6] dark:border-b-[#191919]  p-2 font-normal">
                <svg
                  width={14}
                  height={16}
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.55 15.8809C7.08333 15.8809 7.53333 15.6975 7.9 15.3309C8.26667 14.9642 8.45 14.5142 8.45 13.9809H4.7C4.7 14.5142 4.875 14.9642 5.225 15.3309C5.575 15.6975 6.01667 15.8809 6.55 15.8809ZM7.5 1.93086C7.5 1.73086 7.45833 1.55586 7.375 1.40586C7.29167 1.25586 7.175 1.13086 7.025 1.03086C6.875 0.93086 6.71667 0.880859 6.55 0.880859C6.38333 0.880859 6.225 0.93086 6.075 1.03086C5.925 1.13086 5.80833 1.25586 5.725 1.40586C5.64167 1.55586 5.6 1.73086 5.6 1.93086C4.53333 2.13086 3.64167 2.66419 2.925 3.53086C2.20833 4.39753 1.85 5.39753 1.85 6.53086C1.85 6.99753 1.8 7.64753 1.7 8.48086C1.53333 9.51419 1.33333 10.4142 1.1 11.1809C0.766667 12.1475 0.4 12.7809 0 13.0809H13.1C12.7 12.7809 12.3333 12.1475 12 11.1809C11.7667 10.4142 11.5667 9.51419 11.4 8.48086C11.3 7.64753 11.25 6.98086 11.25 6.48086C11.25 5.38086 10.8917 4.39753 10.175 3.53086C9.45833 2.66419 8.56667 2.13086 7.5 1.93086Z"
                    fill="#DDDDDD"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

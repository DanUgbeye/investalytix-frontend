import chart from "@/mock/chart";
import Link from "next/link";
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

export default function InvestorSentiment() {
  const timeframes = ["1m", "5m", "15m", "1h"];
  return (
    <>
      <header className="mb-6">
        <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
          INVESTOR SENTIMENT
        </h2>
      </header>

      <p className="my-4 text-xl font-bold text-[#071939]">Level Chart</p>
      <div className="flex items-center gap-6">
        {timeframes.map((tf) => (
          <button key={tf} className="p-3 text-xs font-bold uppercase">
            {tf}
          </button>
        ))}
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%" className="!m-0 !p-0">
          <ComposedChart
            data={chart.slice(0, 30)}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            className="!p-0"
          >
            <XAxis
              tickLine={false}
              axisLine={false}
              dataKey={({ date }) =>
                date.split(" ")[1].split(":").slice(0, 2).join(":")
              }
              allowDataOverflow
            />
            <YAxis dataKey="close" tickLine={false} axisLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="close"
              fill="rgba(5,96,253,0.1)"
              strokeOpacity={0}
            />
            <Line
              type="monotone"
              dataKey="close"
              fill="#3B86FF"
              stroke="#3B86FF"
              strokeWidth={2}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* divider */}
      <div className="mb-6 mt-8 h-[6px] w-full bg-[#1D1D1D]"></div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-xl font-bold text-[#2A3037]">Historical Data</p>
        <p className="text-xl font-bold text-[#2A3037]">
          View and Export this Data back to 1987.{" "}
          <Link href="" className="text-primary-base">
            Upgrade Now
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="bg-[#1D1D1D] p-2 text-left text-sm font-extrabold uppercase text-white">
                DATE
              </th>
              <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase text-white">
                VALUE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-[#F9F9F9]">
              <td className="p-2 text-left text-sm font-bold uppercase">
                January 04, 2024
              </td>
              <td className="p-2 text-right text-sm font-bold text-black">
                48.56%
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="bg-[#1D1D1D] p-2 text-left text-sm font-extrabold uppercase text-white">
                DATE
              </th>
              <th className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase text-white">
                VALUE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-[#F9F9F9]">
              <td className="p-2 text-left text-sm font-bold uppercase">
                January 04, 2024
              </td>
              <td className="p-2 text-right text-sm font-bold text-black">
                48.56%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

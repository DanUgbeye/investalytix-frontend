import Chart from "@/components/Chart";
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
import MarketHeading from "../MarketHeading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function InvestorSentiment() {
  const timeframes = ["1m", "5m", "15m", "1h"];

  return null;
  return (
    <>
      <MarketHeading label="INVESTOR SENTIMENT" />

      <p className="my-4 text-xl font-bold">Level Chart</p>
      <div className="flex items-center gap-6">
        {timeframes.map((tf) => (
          <button
            key={tf}
            className="white-text text-hover-focus p-3 text-xs font-bold uppercase"
          >
            {tf}
          </button>
        ))}
      </div>

      <div className="h-80 w-full">
        <Chart />
        {/* <ResponsiveContainer width="100%" height="100%" className="!m-0 !p-0">
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
        </ResponsiveContainer> */}
      </div>

      {/* divider */}
      {/* <div className="mb-6 mt-8 h-[6px] w-full bg-[#1D1D1D]"></div> */}

      <div className="mb-6 mt-8 flex items-center justify-between">
        <p className="font-bold">Historical Data</p>
        <p className="font-bold">
          View and Export this Data back to 1987.{" "}
          <Link href="" className="text-primary-base">
            Upgrade Now
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <HistoricalTable />
        <HistoricalTable />
      </div>
    </>
  );
}

function HistoricalTable() {
  return (
    <Table className="w-full table-auto">
      <TableHeader>
        <TableRow className="" headerRow>
          <TableHead className="text-left capitalize">date</TableHead>
          <TableHead className="text-right capitalize">value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>January 04, 2024</TableCell>
          <TableCell className="text-right">48.56%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

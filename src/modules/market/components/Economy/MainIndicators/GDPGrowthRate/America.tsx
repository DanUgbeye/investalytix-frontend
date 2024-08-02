"use client";
import Panels from "../../Panels";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useFetcher from "@/hooks/useFetcher";
import { useEffect, useState } from "react";
import Spinner from "@/components/spinner";
import { motion } from "framer-motion";
import { calculateMedian, calculateYoY, formatCurrency } from "@/lib/utils";
import ColoredNumber from "@/components/ui/ColoredNumber";

type GDP = { date: string; value: number };

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/economy/gdp`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<{
    message: String;
    status: number;
    data: GDP[];
  }>;
}

export default function America() {
  const { wrapper, loading, data } = useFetcher<{
    message: String;
    status: number;
    data: GDP[];
  }>();
  const [yoy, setYoy] = useState<ReturnType<typeof calculateYoY>>([]);

  useEffect(() => {
    wrapper(getData);
  }, []);

  useEffect(() => {
    if (data) {
      const withYoy = calculateYoY(data.data);
      setYoy(withYoy);
    }
  }, [data]);

  return (
    <div className="grid gap-5 lg:grid-cols-[300px,1fr]">
      <Panels
        active={{ parent: "main indicators", child: "GDP Growth Rate" }}
      />
      <div className="">
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
              y: 0,
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

        {data?.data && yoy.length > 0 && (
          <>
            <div className="mb-12 w-full">
              <ResponsiveContainer
                className={"h-36 w-full lg:h-96"}
                height={400}
              >
                <AreaChart
                  data={data.data.map((a) => a).reverse()}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FFAF5F" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FFAF5F" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="date"

                    // label={(a) => new Date(a.date).getFullYear}
                  />
                  <YAxis dataKey={"value"} orientation="right" />
                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#FFAF5F"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <h2 className="font-bold">Basic info</h2>
            <p className="mb-12">
              As of {moment(data.data[0].date).format("MMMM Do YYYY")}, the
              United States Gross Domestic Product (GDP) stood at{" "}
              {formatCurrency(data.data[0].value)}, according to the Bureau of
              Economic Analysis. Historically, the GDP reached its peak at this
              record high of{" "}
              {formatCurrency(
                data.data.reduce((a, b) => (a.value > b.value ? a : b)).value
              )}
              , with the lowest recorded value being{" "}
              {formatCurrency(
                data.data.reduce((a, b) => (a.value < b.value ? a : b)).value
              )}
              . The median GDP value is{" "}
              {formatCurrency(calculateMedian(data.data.map((a) => a.value)))}.
              The Year-Over-Year growth rate is{" "}
              <ColoredNumber number={yoy[0].yoy} sign colored percent />.
            </p>

            <div className="w-full overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow headerRow>
                    <TableHead className="!py-2 !text-sm capitalize">
                      Reference
                    </TableHead>
                    <TableHead className="!py-2 text-center !text-sm capitalize">
                      Value
                    </TableHead>
                    <TableHead className="!py-2 text-right !text-sm">
                      YOY%
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {yoy.map((entry, index) => (
                    <TableRow
                      className=""
                      key={entry.date + entry.value + index}
                    >
                      <TableCell className="py-2 text-sm">
                        {moment(entry.date).format("MMM/YYYY")}
                      </TableCell>
                      <TableCell className="py-2 text-center text-sm">
                        {formatCurrency(entry.value)}
                      </TableCell>
                      <TableCell className="py-2 text-right text-sm">
                        <ColoredNumber number={entry.yoy} percent sign />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <p className="mt-14 hidden border border-[#DDDDDD] px-5 py-6">
              This page displays a table with GDP Growth Rate for a list of
              countries . This page provides values for GDP Growth Rate reported
              in several countries. The table has current values for GDP Growth
              Rate, previous releases, historical highs and record lows, release
              frequency, reported unit and currency plus links to historical
              data charts.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

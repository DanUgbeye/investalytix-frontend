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
import { useEffect } from "react";
import Spinner from "@/components/spinner";
import { motion } from "framer-motion";

type GDP = { date: string; value: number };

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/economy/initialClaims`
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

export default function Summary() {
  const { wrapper, loading, data } = useFetcher<{
    message: String;
    status: number;
    data: GDP[];
  }>();

  useEffect(() => {
    wrapper(getData);
  }, []);

  return (
    <div className="grid gap-5 lg:grid-cols-[300px,1fr]">
      <Panels active={{ parent: "labour", child: "Initial Jobless Claims" }} />
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

        {data?.data && (
          <>
            <div className="mb-12 w-full">
              <ResponsiveContainer
                className={"h-36 w-full lg:h-96"}
                height={400}
              >
                <AreaChart
                  data={data.data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FFAF5F" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FFAF5F" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" />
                  <YAxis dataKey={"value"} />
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

            <div className="w-full overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow headerRow>
                    <TableHead className="!py-2 !text-sm capitalize">
                      Reference
                    </TableHead>
                    <TableHead className="!py-2 !text-sm capitalize">
                      Value
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {data.data.map((entry, index) => (
                    <TableRow
                      className=""
                      key={entry.date + entry.value + index}
                    >
                      <TableCell className="py-2 text-sm">
                        {moment(entry.date).format("MMM/YYYY")}
                      </TableCell>
                      <TableCell className="py-2 text-sm">
                        {entry.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <p className="mt-14 border border-[#DDDDDD] px-5 py-6">
              Elevated inflation rates continue to force major central banks to
              raise borrowing costs despite signs that falling demand may
              increase recession risks. The FOMC 2-day meeting kicks off on
              Tuesday, and the Fed is expected to announce a 25bps increase in
              the fed funds rate, dialing back the size of the increase for a
              second straight meeting, but still pushing the borrowing costs to
              4.5%-4.75%, the highest since 2007. On Thursday, the Bank of
              England is set to raise the key Bank Rate by 50bps to 4%, the same
              as in December, pushing it to the highest since 2008. Meanwhile,
              the ECB is due to deliver a second straight 50bps increase on
              Thursday, pushing the deposit rate to 2.5%, also the highest since
              2008. Investors will also keep a close eye on policymakers&apos;
              next steps, especially whether they plan to keep hiking rates or
              if the tightening cycle is coming close to an end. This page
              displays a table with actual values, consensus figures, forecasts,
              statistics and historical data charts for - Interest Rate. This
              page provides values for Interest Rate reported in several
              countries. The table has current values for Interest Rate,
              previous releases, historical highs and record lows, release
              frequency, reported unit and currency plus links to historical
              data charts.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

import Image from "next/image";
import PerformanceTable from "../../PerformanceTable";
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

export default async function America() {
  const data = await getData();
  return (
    <div className="grid gap-5 lg:grid-cols-[300px,1fr]">
      <Panels open="main indicators" />
      <div className="">
        <div className="relative mb-12 h-36 overflow-hidden lg:h-96">
          <Image src="/images/map1.png" fill alt="" className="object-cover" />
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
              {data.data.map((entry) => (
                <TableRow className="" key={entry.date}>
                  <TableCell className="py-2 text-sm">
                    {moment(entry.date).format("MMM/YYYY")}
                  </TableCell>
                  <TableCell className="py-2 text-sm">{entry.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="mt-14 border border-[#DDDDDD] px-5 py-6">
          This page displays a table with GDP Growth Rate for a list of
          countries . This page provides values for GDP Growth Rate reported in
          several countries. The table has current values for GDP Growth Rate,
          previous releases, historical highs and record lows, release
          frequency, reported unit and currency plus links to historical data
          charts.
        </p>
      </div>
    </div>
  );
}

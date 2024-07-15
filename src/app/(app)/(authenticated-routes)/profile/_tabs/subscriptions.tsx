"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";

export default function SubscriptionsTab() {
  return (
    <div className="flex w-full max-w-7xl flex-col gap-2">
      {/* <h3 className="font-semibold">MY PLAN</h3> */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-10 rounded-lg border p-6 dark:border-main-gray-700">
        <div className="">
          <p className="text-xs uppercase">current plan</p>
          <p className="text-xl font-bold">Free plan</p>
        </div>

        <Button>Change plan</Button>
      </div>

      <h3 className="text-2xl font-semibold capitalize">billing history</h3>

      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow headerRow>
              <TableHead>date</TableHead>
              <TableHead>action</TableHead>
              <TableHead>transaction id</TableHead>
              <TableHead>total</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="whitespace-nowrap">
                {moment(new Date("2024/4/25")).format("MMM Do, YYYY")}
              </TableCell>
              <TableCell className="">subscription</TableCell>
              <TableCell className="">729374691937</TableCell>
              <TableCell className="">$10,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="whitespace-nowrap">
                {moment(new Date("2024/4/25")).format("MMM Do, YYYY")}
              </TableCell>
              <TableCell className="">subscription</TableCell>
              <TableCell className="">729374691937</TableCell>
              <TableCell className="">$10,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="whitespace-nowrap">
                {moment(new Date("2024/4/25")).format("MMM Do, YYYY")}
              </TableCell>
              <TableCell className="">subscription</TableCell>
              <TableCell className="">729374691937</TableCell>
              <TableCell className="">$10,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

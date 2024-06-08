"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { QuoteHistory } from "@/types";
import React, { useState } from "react";

export default function QuoteHistoryTable(props: {
  quoteHistory: QuoteHistory[];
  showAll?: boolean;
}) {
  const { quoteHistory } = props;

  return (
    <div className=" overflow-x-auto border-b dark:border-main-gray-600 ">
      <Table className=" w-full min-w-[45rem] text-sm ">
        <TableHeader className="  ">
          <TableRow className=" font-semibold hover:bg-transparent dark:hover:bg-transparent ">
            <TableHead className=" px-2 py-3 ">Date</TableHead>
            <TableHead className=" px-2 py-3 text-right ">Open</TableHead>
            <TableHead className=" px-2 py-3 text-right ">High</TableHead>
            <TableHead className=" px-2 py-3 text-right ">Low</TableHead>
            <TableHead className=" px-2 py-3 text-right ">Close*</TableHead>
            {/* <TableHead className=" px-2 py-3 text-right ">Adj Close**</TableHead> */}
            <TableHead className=" px-2 py-3 text-right ">Volume</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="  ">
          {quoteHistory.map((item, index) => {
            return (
              <TableRow
                key={`historical-data${index}`}
                className=" "
                colorMode="odd"
              >
                <TableCell className=" px-2 py-3 ">
                  {item.date.toDateString()}
                </TableCell>

                <TableCell className=" px-2 py-3 text-right ">
                  {item.open.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>

                <TableCell className=" px-2 py-3 text-right ">
                  {item.high.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>

                <TableCell className=" px-2 py-3 text-right ">
                  {item.low.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>

                <TableCell className=" px-2 py-3 text-right ">
                  {item.close.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>

                {/* <TableCell className=" px-2 py-3 text-right ">
                  {item.adjClose.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell> */}

                <TableCell className=" px-2 py-3 text-right ">
                  {item.volume.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

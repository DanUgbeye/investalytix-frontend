"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CLIENT_CONFIG from "@/config/client/app";
import userUtils from "@/modules/user/utils";
import { useAppStore } from "@/store";
import { QuoteHistory } from "@/types";
import { differenceInCalendarYears } from "date-fns";
import React, { useMemo, useState } from "react";

export default function QuoteHistoryTable(props: {
  quoteHistory: QuoteHistory[];
  showAll?: boolean;
}) {
  const { quoteHistory } = props;
  const isPremiumUser = useAppStore(
    ({ user }) => user !== undefined && userUtils.isPremiumPlanUser(user)
  );

  const quotesHistoryToDisplay = useMemo(() => {
    return quoteHistory.filter((history) => {
      if (isPremiumUser) {
        return (
          differenceInCalendarYears(new Date(), new Date(history.date)) <=
          CLIENT_CONFIG.FREE_YEARS_DATA
        );
      }
      return true;
    });
  }, [quoteHistory]);

  return (
    <div className="overflow-x-auto">
      <Table className="w-full min-w-[45rem] text-sm">
        <TableHeader className=" ">
          <TableRow headerRow className=" ">
            <TableHead className=" ">Date</TableHead>
            <TableHead className="text-center">Open</TableHead>
            <TableHead className="text-center">High</TableHead>
            <TableHead className="text-center">Low</TableHead>
            <TableHead className="text-center">Close*</TableHead>
            {/* <TableHead className=" text-center ">Adj Close**</TableHead> */}
            <TableHead className="text-right">Volume</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className=" ">
          {quotesHistoryToDisplay.map((item, index) => {
            return (
              <TableRow
                key={`historical-data-${index}`}
                className=" "
                highlightPattern="odd"
              >
                <TableCell className=" ">{item.date.toDateString()}</TableCell>

                <TableCell className="text-center">
                  {item.open.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>

                <TableCell className="text-center">
                  {item.high.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>

                <TableCell className="text-center">
                  {item.low.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>

                <TableCell className="text-center">
                  {item.close.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>

                {/* <TableCell className=" text-center ">
                  {item.adjClose.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell> */}

                <TableCell className="text-right">
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

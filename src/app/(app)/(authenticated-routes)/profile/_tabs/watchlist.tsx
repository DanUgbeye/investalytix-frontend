"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";

export default function WatchlistTab() {
  return (
    <div>
      {/* <h3 className="text-2xl font-semibold capitalize">watchlist</h3> */}

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
                {moment("2024/4/25").format("MMM Do, YYYY")}
              </TableCell>
              <TableCell className="">subscription</TableCell>
              <TableCell className="">729374691937</TableCell>
              <TableCell className="">$10,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="whitespace-nowrap">
                {moment("2024/4/25").format("MMM Do, YYYY")}
              </TableCell>
              <TableCell className="">subscription</TableCell>
              <TableCell className="">729374691937</TableCell>
              <TableCell className="">$10,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="whitespace-nowrap">
                {moment("2024/4/25").format("MMM Do, YYYY")}
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

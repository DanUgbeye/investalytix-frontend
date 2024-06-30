"use client";
import { EconomicCalendar } from "@/modules/market/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ColoredNumber from "@/components/ui/ColoredNumber";
import { FiCheck } from "react-icons/fi";
import moment from "moment";
import Flag from "react-world-flags";
import { useState } from "react";

type DayTableProps = {
  calendar: EconomicCalendar[];
  date: string;
};

export default function DayTable({ calendar, date }: DayTableProps) {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen((s) => !s);
    console.log("Here");
  };
  return (
    <Table className="border-b-4 border-b-white dark:border-b-black">
      <TableHeader className="">
        <TableRow
          className="dark:!bg-white/10"
          tabIndex={0}
          onClick={toggleOpen}
        >
          <TableHead className="whitespace-nowrap">
            {moment(date).format("dddd, MMMM Do")}
            {/* {new Date(to).getTime() > new Date(from).getTime()
          ? `${moment(from).format("dddd, MMMM Do")} - ${moment(to).format("dddd, MMMM Do")}`
          : moment(from).format("dddd, MMMM Do")} */}
          </TableHead>
          <TableHead className={open ? "opacity-1" : "opacity-0"}>
            Prior
          </TableHead>
          <TableHead className={open ? "opacity-1" : "opacity-0"}>
            Forecast
          </TableHead>
          <TableHead className={open ? "opacity-1" : "opacity-0"}>
            Actual
          </TableHead>
          {/* <TableHead className={open?"opacity-1":"opacity-0"}>Consensus</TableHead> */}
          <TableHead className={open ? "opacity-1" : "opacity-0"}>Impact</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className={`${open ? "table-row-group" : "hidden"}`}>
        {calendar.map((news, index) => (
          <TableRow
            key={date + index}
            className="white-text w-full border-b border-b-black/10 !bg-transparent text-[#212529]"
          >
            <TableCell className="w-fit whitespace-nowrap lg:max-w-[400px] lg:overflow-hidden">
              <div className="max-mdgap-10 grid grid-cols-[max-content,100px,auto] place-content-start md:gap-5">
                <p>{moment(news.date).format("HH:mm")}</p>

                <p className="flex items-center justify-between gap-1 place-self-center">
                  <Flag code={news.country} className="h-auto w-6 shrink-0" />

                  <span>{news.country}</span>
                </p>

                <p className="lg:truncate"> {news.event}</p>
              </div>
            </TableCell>

            <TableCell className="text-base">
              <ColoredNumber number={news?.previous ?? null} />
            </TableCell>
            <TableCell className="text-base">
              <ColoredNumber number={news.estimate} />
            </TableCell>
            <TableCell className="text-base">
              <ColoredNumber number={news.actual} />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <FiCheck
                  className={`size-3 xl:size-5 ${["Low", "Medium", "High"].includes(news.impact) ? "text-primary-base dark:text-primary-light" : "text-gray-500"}`}
                />
                <FiCheck
                  className={`size-3 xl:size-5 ${["Medium", "High"].includes(news.impact) ? "text-primary-base dark:text-primary-light" : "text-gray-500"}`}
                />
                <FiCheck
                  className={`size-3 xl:size-5 ${news.impact === "High" ? "text-primary-base dark:text-primary-light" : "text-gray-500"}`}
                />
                {/* {["Low", "Medium", "High"].includes(news.impact) && (
                <FiCheck
                  className={` ${["Low", "Medium", "High"].includes(news.impact) ? "text-primary-base dark:text-primary-light" : "text-gray-500"}`}
                />
              )}
              {["Medium", "High"].includes(news.impact) && (
                <FiCheck
                  className={` ${["Medium", "High"].includes(news.impact) ? "text-primary-base dark:text-primary-light" : "text-gray-500"}`}
                />
              )}
              {["High"].includes(news.impact) && (
                <FiCheck
                  className={` ${news.impact === "High" ? "text-primary-base dark:text-primary-light" : "text-gray-500"}`}
                />
              )} */}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

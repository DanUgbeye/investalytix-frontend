"use client";
import ColoredNumber from "@/components/ui/ColoredNumber";
import { tailwindCSS } from "@/lib/utils";
import useTheme from "@/store/theme/useTheme";
import { Popover } from "@headlessui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { FiCalendar, FiFlag } from "react-icons/fi";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetcher from "@/hooks/useFetcher";
import { EconomyMarketRepository } from "@/modules/market/repository/economy";
import { clientAPI } from "@/config/client/api";
import { EconomicCalendar } from "@/modules/market/types";
import Calendar from "react-calendar";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import Spinner from "@/components/spinner";

enum FILTERS {
  YESTERDAY = "YESTERDAY",
  TODAY = "TODAY",
  TOMORROW = "TOMORROW",
  THIS_WEEK = "THIS_WEEK",
}

function thisWeek() {
  // Create a new Date object for the current date and time
  const today = new Date();

  // Get the current day of the week (0-6) where 0 is Sunday and 6 is Saturday
  const dayOfWeek = today.getDay();

  // Calculate the start and end dates of the current week
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - dayOfWeek); // Subtract days to get to Sunday

  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + (6 - dayOfWeek)); // Add days to get to Saturday

  return { from: startOfWeek, to: endOfWeek };
}

const groupByDate = (events: EconomicCalendar[]) => {
  return events.reduce(
    (acc: Record<string, EconomicCalendar[]>, event: EconomicCalendar) => {
      // Format date to a consistent string representation (e.g., YYYY-MM-DD)
      const dateKey = event.date.split("T")[0];

      // If the date is not already a key in the accumulator, add it
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }

      // Add the current event to the array for that date
      acc[dateKey].push(event);

      return acc;
    },
    {}
  );
};

export default function Summary() {
  const [filter, setFilter] = useState<FILTERS>(FILTERS["TODAY"]);
  const { theme } = useTheme();
  const [calendar, setCalendar] = useState<
    Record<string, EconomicCalendar[]> | undefined
  >();
  const [from, setFrom] = useState(new Date().toString());
  const [to, setTo] = useState(new Date().toString());

  const { wrapper, loading, data, error } =
    useFetcher<EconomicCalendar[]>(null);

  // update from and to anytime filter changes
  useEffect(() => {
    const date = new Date();
    switch (filter) {
      case FILTERS["TODAY"]:
        const today = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            0,
            0,
            0,
            0
          )
        );
        setFrom(today.toString());
        setTo(today.toString());
        break;
      case FILTERS["YESTERDAY"]:
        const yesterdaysDate = new Date(date.getTime() - 24 * 60 * 60 * 1000);
        const yesterday = new Date(
          Date.UTC(
            yesterdaysDate.getUTCFullYear(),
            yesterdaysDate.getUTCMonth(),
            yesterdaysDate.getUTCDate(),
            0,
            0,
            0,
            0
          )
        );
        setFrom(yesterday.toString());
        setTo(yesterday.toString());
        break;
      case FILTERS["TOMORROW"]:
        const tomorrow = new Date(
          date.setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000
        );

        setFrom(tomorrow.toString());
        setTo(tomorrow.toString());
        break;
      case FILTERS["THIS_WEEK"]:
        const currentWeek = thisWeek();
        setFrom(currentWeek.from.toString());
        setTo(currentWeek.to.toString());
        break;
    }
  }, [filter]);

  // when from and to changes, update the table
  useEffect(() => {
    if (!from && !to) return;
    const repo = new EconomyMarketRepository(clientAPI);
    wrapper(() =>
      repo.getEconomicCalendar({
        from,
        to,
      })
    );
  }, [from, to]);

  // set calendar and filter out extra days returned
  useEffect(() => {
    if (loading || !data) return;
    const filtered = data
      .filter(
        (a) =>
          new Date(a.date).getTime() >= new Date(from).setHours(0,0,0,0) &&
          new Date(a.date).getTime() <= new Date(to).setHours(23, 59, 59)
      )
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    setCalendar(groupByDate(filtered));
  }, [loading, data]);

  useEffect(() => {
    if (!error) return;
    console.log(error);
  }, [error]);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  function updateFilter(filter: FILTERS) {
    setFilter(filter);
  }

  function calendarOnChangeHandler(arr: any) {
    if (Array.isArray(arr)) {
      arr[0] && setFrom(arr[0].toString());
      arr[1] && setTo(arr[1].toString());
    }
  }

  return (
    <div className="mt-12">
      <div className="mb-12 flex w-full flex-wrap items-center justify-between gap-5 md:gap-2">
        <Swiper
          spaceBetween={24}
          slidesPerView={"auto"}
          freeMode
          className="!m-0"
        >
          {Object.keys(FILTERS).map((entry) => {
            const isActive = entry === filter;
            return (
              <SwiperSlide
                key={entry}
                className={`z-[1] !w-fit !flex-shrink grow-0 border-b-2 py-2 ${
                  isActive
                    ? "border-primary-base "
                    : // : "border-primary-base"
                      "border-transparent"
                }`}
              >
                <button
                  key={entry}
                  onClick={() => updateFilter(entry as FILTERS)}
                  className={`whitespace-nowrap rounded-full px-4 py-1 text-center text-sm capitalize ${
                    isActive ? "text-primary-base" : "bg-hover-focus"
                  }`}
                >
                  {entry.toLowerCase().replace("_", " ")}
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <DateRangePicker
          className={""}
          onChange={calendarOnChangeHandler}
          value={[new Date(from), new Date(to)]}
          calendarIcon={FiCalendar}
          clearIcon={null}
        />
      </div>

      {loading ? (
        <Spinner className="mx-auto" />
      ) : calendar ? (
        <>
          {Object.keys(calendar).map((date) => (
            <div className="w-full overflow-auto">
              <Table key={date}>
                <TableHeader>
                  <TableRow headerRow>
                    <TableHead className="whitespace-nowrap">
                      {moment(date).format("dddd, MMMM Do")}
                      {/* {new Date(to).getTime() > new Date(from).getTime()
                      ? `${moment(from).format("dddd, MMMM Do")} - ${moment(to).format("dddd, MMMM Do")}`
                      : moment(from).format("dddd, MMMM Do")} */}
                    </TableHead>
                    <TableHead>Prior</TableHead>
                    <TableHead>Forecast</TableHead>
                    <TableHead>Actual</TableHead>
                    {/* <TableHead>Consensus</TableHead> */}
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {calendar[date].map((news, index) => (
                    <TableRow
                      key={index}
                      className="white-text w-full text-[#212529]"
                    >
                      <TableCell className="w-fit whitespace-nowrap">
                        <div className="max-mdgap-10 grid grid-cols-[max-content,100px,auto] place-content-start md:gap-5 ">
                          <p>{moment(news.date).format("HH:mm")}</p>

                          <p className="flex items-center gap-1 place-self-center">
                            <FiFlag />
                            {news.country}
                          </p>

                          <p> {news.event}</p>
                        </div>
                      </TableCell>

                      <TableCell>
                        {news.previous && (
                          <ColoredNumber number={news.previous} />
                        )}
                      </TableCell>
                      <TableCell>
                        <ColoredNumber number={news.estimate} />
                      </TableCell>
                      <TableCell>
                        <ColoredNumber number={news.actual} />
                      </TableCell>
                      {/* <TableCell>
   <ColoredNumber number={news.impact} colored={false} />
 </TableCell> */}
                      <TableCell className="flex items-center gap-5">
                        {/* 
 <Popover className="relative">
   <Popover.Button>
     <svg
       width={41}
       height={20}
       viewBox="0 0 41 20"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
       xmlnsXlink="http://www.w3.org/1999/xlink"
     >
       <rect
         x="0.046875"
         width={40}
         height={20}
         fill="url(#pattern0)"
       />
       <defs>
         <pattern
           id="pattern0"
           patternContentUnits="objectBoundingBox"
           width={1}
           height={1}
         >
           <use
             xlinkHref="#image0_1232_32255"
             transform="scale(0.025 0.05)"
           />
         </pattern>
         <image
           id="image0_1232_32255"
           width={40}
           height={20}
           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAYAAAD/Rn+7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABtSURBVEhL7Y7BCYBAEMSuOguzJa3HLnyfDOR1DPuSXYUN5JVPRvM3tv2cq6Rv8NrgfR1zlWSbJOcQDbgmyTlEA65Jcg7RgGuSXI+bk+R63Jwk1+PmJLkeNyfJ9bg5Sa7HzUlyPW5OkpumyWOMB45jR4wlqauuAAAAAElFTkSuQmCC"
         />
       </defs>
     </svg>
   </Popover.Button>

   <Popover.Panel className="absolute right-0 z-10 block ">
     <div className="grid h-full w-[30vw] bg-white p-2 shadow dark:border dark:border-[#191919] dark:bg-black dark:shadow-none ">
       <ResponsiveContainer className="min-h-20 md:min-h-40">
         <BarChart data={data}>
           <XAxis
             dataKey={"uv"}
             stroke="#888888"
             fontSize={12}
             tickLine={false}
             axisLine={false}
           />
           <YAxis
             stroke="#888888"
             fontSize={12}
             tickLine={false}
             axisLine={false}
             tickFormatter={(value) => `$${value}`}
           />
           <Bar
             dataKey={"uv"}
             fill={
               theme === "dark"
                 ? tailwindCSS().theme.colors.primary.light
                 : tailwindCSS().theme.colors.primary.base
             }
             radius={[4, 4, 0, 0]}
             className=""
           />
         </BarChart>
       </ResponsiveContainer>
     </div>
   </Popover.Panel>
 </Popover>
  */}

                        <svg
                          width={14}
                          height={16}
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.55 15.8809C7.08333 15.8809 7.53333 15.6975 7.9 15.3309C8.26667 14.9642 8.45 14.5142 8.45 13.9809H4.7C4.7 14.5142 4.875 14.9642 5.225 15.3309C5.575 15.6975 6.01667 15.8809 6.55 15.8809ZM7.5 1.93086C7.5 1.73086 7.45833 1.55586 7.375 1.40586C7.29167 1.25586 7.175 1.13086 7.025 1.03086C6.875 0.93086 6.71667 0.880859 6.55 0.880859C6.38333 0.880859 6.225 0.93086 6.075 1.03086C5.925 1.13086 5.80833 1.25586 5.725 1.40586C5.64167 1.55586 5.6 1.73086 5.6 1.93086C4.53333 2.13086 3.64167 2.66419 2.925 3.53086C2.20833 4.39753 1.85 5.39753 1.85 6.53086C1.85 6.99753 1.8 7.64753 1.7 8.48086C1.53333 9.51419 1.33333 10.4142 1.1 11.1809C0.766667 12.1475 0.4 12.7809 0 13.0809H13.1C12.7 12.7809 12.3333 12.1475 12 11.1809C11.7667 10.4142 11.5667 9.51419 11.4 8.48086C11.3 7.64753 11.25 6.98086 11.25 6.48086C11.25 5.38086 10.8917 4.39753 10.175 3.53086C9.45833 2.66419 8.56667 2.13086 7.5 1.93086Z"
                            fill="#DDDDDD"
                          />
                        </svg>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

"use client";
import useTheme from "@/store/theme/useTheme";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  FiCalendar,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiFlag,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useFetcher from "@/hooks/useFetcher";
import { EconomyMarketRepository } from "@/modules/market/repository/economy";
import { clientAPI } from "@/config/client/api";
import { EconomicCalendar } from "@/modules/market/types";
import Calendar from "react-calendar";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import Spinner from "@/components/spinner";
import Link from "next/link";
import DayTable from "./DayTable";

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

function getPreviousWeekDates(fromDate: string, toDate: string) {
  let startOfPreviousWeek = new Date(fromDate);
  let endOfPreviousWeek = new Date(toDate);

  // Set the dates to the previous week
  startOfPreviousWeek.setDate(startOfPreviousWeek.getDate() - 7);
  endOfPreviousWeek.setDate(endOfPreviousWeek.getDate() - 7);

  // Adjust to the start of the week (Sunday)
  startOfPreviousWeek.setDate(
    startOfPreviousWeek.getDate() - startOfPreviousWeek.getDay()
  );

  // Adjust to the end of the week (Saturday)
  endOfPreviousWeek.setDate(
    endOfPreviousWeek.getDate() + (6 - endOfPreviousWeek.getDay())
  );

  // Set the time to the start of the day for the start of the week
  startOfPreviousWeek.setHours(0, 0, 0, 0);

  // Set the time to the end of the day for the end of the week
  endOfPreviousWeek.setHours(23, 59, 59, 999);

  return {
    from: startOfPreviousWeek,
    to: endOfPreviousWeek,
  };
}
function getNextWeekDates(fromDate: string, toDate: string) {
  let startOfNextWeek = new Date(fromDate);
  let endOfNextWeek = new Date(toDate);

  // Set the dates to the next week
  startOfNextWeek.setDate(startOfNextWeek.getDate() + 7);
  endOfNextWeek.setDate(endOfNextWeek.getDate() + 7);

  // Adjust to the start of the week (Sunday)
  startOfNextWeek.setDate(startOfNextWeek.getDate() - startOfNextWeek.getDay());

  // Adjust to the end of the week (Saturday)
  endOfNextWeek.setDate(endOfNextWeek.getDate() + (6 - endOfNextWeek.getDay()));

  // Set the time to the start of the day for the start of the week
  startOfNextWeek.setHours(0, 0, 0, 0);

  // Set the time to the end of the day for the end of the week
  endOfNextWeek.setHours(23, 59, 59, 999);

  return {
    from: startOfNextWeek,
    to: endOfNextWeek,
  };
}

export default function Summary() {
  const [filter, setFilter] = useState<FILTERS | null>(null);
  const { theme } = useTheme();
  const [calendar, setCalendar] = useState<
    Record<string, EconomicCalendar[]> | undefined
  >();
  const [from, setFrom] = useState(() => {
    let now = new Date();
    let startOfWeek = new Date(now);

    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    return startOfWeek.toString();
  });
  const [to, setTo] = useState(() => {
    let now = new Date();
    let endOfWeek = new Date(now);

    endOfWeek.setDate(now.getDate() + (6 - now.getDay()));
    endOfWeek.setHours(23, 59, 59, 999);

    return endOfWeek.toString();
  });

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
    setCalendar(undefined);
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
          new Date(a.date).getTime() >= new Date(from).setHours(0, 0, 0, 0) &&
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

  function prevWeek() {
    const week = getPreviousWeekDates(from, to);
    setFilter(null);
    setFrom(week.from.toString());
    setTo(week.to.toString());
  }
  function nextWeek() {
    const week = getNextWeekDates(from, to);
    setFilter(null);
    setFrom(week.from.toString());
    setTo(week.to.toString());
  }

  return (
    <div className="">
      <div className="mb-12 flex w-full flex-wrap items-center justify-start gap-4">
        {Object.keys(FILTERS).map((entry) => {
          const isActive = entry === filter;
          return (
            <button
              key={entry}
              onClick={() => updateFilter(entry as FILTERS)}
              className={`whitespace-nowrap rounded-md border px-4 py-2 text-center text-sm capitalize ${
                isActive
                  ? "border-primary-base text-primary-base dark:border-primary-light dark:text-primary-light"
                  : "border-black hover:border-primary-light hover:text-primary-light focus:border-primary-light focus:text-primary-light dark:border-white/40"
              }`}
            >
              {entry.toLowerCase().replace("_", " ")}
            </button>
          );
        })}

        <DateRangePicker
          className={"economy__calendar"}
          onChange={calendarOnChangeHandler}
          value={[new Date(from), new Date(to)]}
          calendarIcon={FiCalendar}
          clearIcon={null}
          
        />

        <button
          className={`group whitespace-nowrap rounded-md border border-black px-3 py-2 text-center text-sm capitalize hover:border-primary-light focus:border-primary-light dark:border-white/40`}
          onClick={prevWeek}
        >
          <FiChevronLeft className="size-5 group-hover:text-primary-light group-focus:text-primary-light" />
        </button>

        <button
          className={`group whitespace-nowrap rounded-md border border-black px-3 py-2 text-center text-sm capitalize hover:border-primary-light focus:border-primary-light dark:border-white/40`}
          onClick={nextWeek}
        >
          <FiChevronRight className="size-5 group-hover:text-primary-light group-focus:text-primary-light" />
        </button>

        <div className="flex gap-3">
          {from && to != from && (
            <p className="">{moment(from).format("Do MMMM")}</p>
          )}
          {to && to != from && <p className="">-</p>}
          {to && to != from && (
            <p className="">{moment(to).format("Do MMMM")}</p>
          )}
        </div>
      </div>

      {loading ? (
        <Spinner className="mx-auto" />
      ) : calendar && Object.keys(calendar).length > 0 ? (
        <>
          {Object.keys(calendar).map((date) => (
            <div className="w-full overflow-auto">
              <DayTable calendar={calendar[date]} date={date} key={date} />
            </div>
          ))}
        </>
      ) : calendar && Object.keys(calendar).length === 0 ? (
        <p className="text-center">No economic activities present</p>
      ) : null}
    </div>
  );
}

function Notification() {
  return (
    <div className="">
      <header className="bg-[#191919] p-2 text-left text-white/80">
        <p className="">Apple Notifications</p>
      </header>

      <section className="">
        <News />
        <News />
        <News />
      </section>

      <footer className="flex justify-between bg-[#191919] p-2 text-white/80">
        <Link href="" className="text-hover-focus">
          Analysis
        </Link>
        <Link href="" className="text-hover-focus">
          Forecast
        </Link>
        <Link href="" className="text-hover-focus">
          Chart
        </Link>
        <Link href="" className="text-hover-focus">
          News
        </Link>
      </footer>
    </div>
  );
}

function News() {
  return (
    <Link
      href=""
      className="group inline-block border-b border-dashed border-black/20 p-2 text-xs font-light dark:border-b-white/10"
    >
      <p className="">April 01, 2024</p>
      <p className="white-text py-1 font-normal group-hover:text-primary-base group-focus:text-primary-base dark:group-hover:text-primary-light dark:group-focus:text-primary-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="">Investalytix News</p>
    </Link>
  );
}

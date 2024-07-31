"use client";

import { Button } from "@/components/ui/button";
import { QuoteTimeframe } from "@/types";
import { QuoteTimeframeSchema } from "@/validation";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import { cva } from "class-variance-authority";
import { isValid, subYears } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import "react-calendar/dist/Calendar.css";
import { Controller, useForm } from "react-hook-form";
import { FiCalendar } from "react-icons/fi";
import { z } from "zod";
import { HistoricalPageData } from "./page";
import QuoteHistoryTable from "./quote-history-table";
import { useAppStore } from "@/store";
import userUtils from "@/modules/user/utils";

function validatePeriod(period: unknown): QuoteTimeframe {
  let valid = QuoteTimeframeSchema.safeParse(period);
  if (valid.error) {
    return "1day";
  }
  return valid.data;
}

function validateShow(show: unknown) {
  let valid = z.enum(["price", "splits"]).safeParse(show);
  if (valid.error) {
    return "price";
  }
  return valid.data;
}

interface HistoricalDataScreenProps extends HistoricalPageData {
  ticker: string;
}

export default function HistoricalDataScreen(props: HistoricalDataScreenProps) {
  const { ticker, quoteHistory, currency } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isPremiumUser = useAppStore(
    ({ user }) => user !== undefined && userUtils.isPremiumPlanUser(user)
  );

  const defaultValues = useMemo(() => {
    let from = subYears(new Date(), 1);
    let fromParam = searchParams.get("from");
    if (fromParam && isValid(new Date(fromParam))) {
      from = new Date(fromParam);
    }

    let to = new Date();
    let toParam = searchParams.get("to");
    if (toParam && isValid(new Date(toParam))) {
      to = new Date(toParam);
    }

    return {
      period: validatePeriod(searchParams.get("period")),
      show: validateShow(searchParams.get("show")),
      from,
      to,
    };
  }, [searchParams]);

  const { control, setValue, watch, handleSubmit } = useForm<
    typeof defaultValues
  >({
    defaultValues,
  });

  const from = watch("from");
  const to = watch("to");

  function handleDateIput(range: any) {
    const fromDate = range[0] as Date;
    const toDate = range[1] as Date;

    setValue("from", fromDate || undefined);
    setValue("to", toDate || undefined);
  }

  function onSubmit(data: typeof defaultValues) {
    let searchParams = new URLSearchParams();

    Object.keys(data).forEach((key) => {
      let formData: any = data[key as keyof typeof defaultValues];

      if (formData instanceof Date) {
        formData = formData.toLocaleDateString("en-CA");
      }
      searchParams.append(key, String(formData));
    });

    router.push(`${pathname}?${searchParams.toString()}`);
  }

  return (
    <section className="space-y-6 pb-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between gap-3 rounded md:flex-row md:flex-wrap"
      >
        <div className="historical-data-container flex flex-wrap gap-2 md:flex-row md:items-center">
          <DateRangePicker
            className={"economy__calendar text-sm"}
            onChange={handleDateIput}
            value={[from!, to!]}
            calendarIcon={FiCalendar}
            clearIcon={null}
            minDate={isPremiumUser ? undefined : subYears(new Date(), 5)}
          />

          <div className="flex flex-wrap items-center gap-x-3">
            <Controller
              name="show"
              control={control}
              render={({ field }) => {
                return (
                  <select
                    {...field}
                    id="show"
                    className="rounded-full border border-main-gray-400 bg-transparent px-4 py-1.5 text-sm outline-0 dark:border-main-gray-500"
                  >
                    <option className="text-black" value={"price"}>
                      Historical Prices
                    </option>
                    {/* <option className="text-black" value={"splits"}>Stock Splits</option> */}
                  </select>
                );
              }}
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-3">
            <Controller
              name="period"
              control={control}
              render={({ field }) => {
                return (
                  <select
                    {...field}
                    id="period"
                    className="rounded-full border border-main-gray-400 bg-transparent px-4 py-1.5 text-sm outline-0 dark:border-main-gray-500"
                  >
                    <option className="text-black" value={"1day"}>
                      Daily
                    </option>
                    <option className="text-black" value={"1week"}>
                      Weekly
                    </option>
                    <option className="text-black" value={"1month"}>
                      Monthly
                    </option>
                  </select>
                );
              }}
            />
          </div>
        </div>

        <Button className="ml-auto h-9 px-6 md:px-8">Apply</Button>
      </form>

      <div className="mx-auto grid space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">Currency: {currency}</span>

          {/* <Button variant={"outline-orange"} className=" border-none ">
            Download
          </Button> */}
        </div>

        {defaultValues.show === "price" && quoteHistory && (
          <QuoteHistoryTable quoteHistory={quoteHistory} />
        )}
      </div>
    </section>
  );
}

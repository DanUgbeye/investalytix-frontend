"use client";

import { Button } from "@/components/ui/button";
import { QuoteHistory, QuoteTimeframe } from "@/types";
import { QuoteTimeframeSchema } from "@/validation";
import { isValid, subYears } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import QuoteHistoryTable from "./quote-history-table";

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

interface HistoricalDataScreenProps {
  ticker: string;
  quoteHistory?: QuoteHistory[];
  currency: string;
}

export default function HistoricalDataScreen(props: HistoricalDataScreenProps) {
  const { ticker, quoteHistory, currency } = props;
  const searchParams = useSearchParams();
  const period = useMemo(
    () => validatePeriod(searchParams.get("period")),
    [searchParams]
  );
  const show = useMemo(
    () => validateShow(searchParams.get("show")),
    [searchParams]
  );
  const from = useMemo(() => {
    let param = searchParams.get("from");
    if (param && isValid(new Date(param))) {
      return new Date(param);
    }
    return subYears(new Date(), 1);
  }, [searchParams]);

  const to = useMemo(() => {
    let param = searchParams.get("to");
    if (param && isValid(new Date(param))) {
      return new Date(param);
    }
    return new Date();
  }, [searchParams]);

  const { control } = useForm<{
    period: string;
    show: string;
    from?: Date;
    to?: Date;
  }>({
    defaultValues: {
      period,
      show,
      from,
      to,
    },
  });

  return (
    <section className=" space-y-6 pb-12 ">
      <form className=" flex flex-col justify-between gap-3 rounded md:flex-row md:flex-wrap ">
        <div className=" flex flex-wrap gap-2 md:flex-row md:items-center ">
          {/* <div className=" flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center "> */}
          {/* <span className=" font-semibold ">Time Period:</span> */}

          {/* <div className=" flex flex-col sm:flex-row gap-2 "> */}
          <Controller
            name="from"
            control={control}
            render={({ field: { value, onChange, ...rest } }) => {
              return (
                <div className=" relative flex items-center gap-1 ">
                  {/* <span className=" font-main-bg-gray-600 w-10 text-sm sm:hidden ">
                        From:
                      </span> */}

                  <input
                    {...rest}
                    id="from"
                    type="date"
                    className=" date-input w-full max-w-[10rem] rounded-full border border-main-gray-400 bg-transparent px-4 py-1 text-sm outline-0 dark:border-main-gray-500 "
                    value={value?.toLocaleDateString("en-CA")}
                    onChange={(e) => {
                      onChange(new Date(e.target.value));
                    }}
                  />
                </div>
              );
            }}
          />

          {/* <span className=" hidden text-xl font-bold sm:flex">-</span> */}

          <Controller
            name="to"
            control={control}
            render={({ field: { value, onChange, ...rest } }) => {
              return (
                <div className=" relative flex items-center gap-1 ">
                  {/* <span className=" font-main-bg-gray-600 w-10 text-sm sm:hidden ">
                        To:
                      </span> */}

                  <input
                    {...rest}
                    id="to"
                    type="date"
                    className=" date-input w-full max-w-[10rem] rounded-full border border-main-gray-400 bg-transparent px-4 py-1 text-sm outline-0 dark:border-main-gray-500 "
                    value={value?.toLocaleDateString("en-CA")}
                    onChange={(e) => {
                      onChange(new Date(e.target.value));
                    }}
                  />
                </div>
              );
            }}
          />
          {/* </div> */}
          {/* </div> */}

          <div className=" flex flex-wrap items-center gap-x-3 ">
            {/* <span className=" font-semibold ">Show:</span> */}

            <Controller
              name="show"
              control={control}
              render={({ field }) => {
                return (
                  <select
                    {...field}
                    id="show"
                    className=" rounded-full border border-main-gray-400 bg-transparent px-4 py-1 text-sm outline-0 dark:border-main-gray-500 "
                  >
                    <option value={"price"}>Historical Prices</option>
                    {/* <option value={"splits"}>Stock Splits</option> */}
                  </select>
                );
              }}
            />
          </div>

          <div className=" flex flex-wrap items-center gap-x-3 ">
            {/* <span className=" font-semibold ">Frequency:</span> */}

            <Controller
              name="period"
              control={control}
              render={({ field }) => {
                return (
                  <select
                    {...field}
                    id="period"
                    className=" rounded-full border border-main-gray-400 bg-transparent px-4 py-1 text-sm outline-0 dark:border-main-gray-500 "
                  >
                    <option value={"1day"}>Daily</option>
                    <option value={"1week"}>Weekly</option>
                    <option value={"1month"}>Monthly</option>
                  </select>
                );
              }}
            />
          </div>
        </div>

        <Button className=" h-9 ml-auto px-6 md:px-8 ">
          Apply
        </Button>
      </form>

      <div className=" mx-auto grid space-y-3 ">
        <div className=" flex items-center justify-between ">
          <span className=" font-semibold text-sm ">Currency: {currency}</span>

          {/* <Button variant={"outline-orange"} className=" border-none ">
            Download
          </Button> */}
        </div>

        {show === "price" && quoteHistory && (
          <QuoteHistoryTable quoteHistory={quoteHistory} />
        )}
      </div>
    </section>
  );
}

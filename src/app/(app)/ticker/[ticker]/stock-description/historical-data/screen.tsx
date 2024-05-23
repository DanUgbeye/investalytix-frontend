"use client";

import { Button } from "@/components/ui/button";
import { QuoteHistory, QuoteHistoryTimeframe } from "@/types";
import { QuoteHistoryTimeframeSchema } from "@/validation";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { z } from "zod";
import QuoteHistoryTable from "./quote-history-table";
import { Controller, useForm } from "react-hook-form";
import { isValid, subYears } from "date-fns";

function validatePeriod(period: unknown): QuoteHistoryTimeframe {
  let valid = QuoteHistoryTimeframeSchema.safeParse(period);
  if (valid.error) {
    return "1week";
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
}

export default function HistoricalDataScreen(props: HistoricalDataScreenProps) {
  const { ticker, quoteHistory } = props;
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
    let param = searchParams.get("from");
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
    <section className=" space-y-12 pb-12 ">
      <form className=" flex flex-col justify-between gap-3 rounded border border-primary-base bg-[#FFF3E9] p-6 md:flex-row md:flex-wrap dark:bg-primary-base/20 ">
        <div className=" flex flex-col gap-x-4 gap-y-2 md:flex-row md:items-center ">
          <div className=" flex flex-col flex-wrap gap-x-3 sm:flex-row sm:items-center ">
            <span className=" font-semibold ">Time Period:</span>

            <div className=" flex flex-col sm:flex-row sm:gap-2 ">
              <Controller
                name="from"
                control={control}
                render={({ field: { value, onChange, ...rest } }) => {
                  return (
                    <div className=" flex items-center gap-1 ">
                      <span className=" w-10 sm:hidden font-main-bg-gray-600 text-sm ">
                        From:
                      </span>

                      <input
                        {...rest}
                        id="from"
                        type="date"
                        className=" w-full max-w-[7.5rem] bg-transparent text-primary-base outline-0 "
                        value={value?.toLocaleDateString("en-CA")}
                        onChange={(e) => {
                          onChange(new Date(e.target.value));
                        }}
                      />
                    </div>
                  );
                }}
              />

              <span className=" hidden text-xl font-bold sm:flex">-</span>

              <Controller
                name="to"
                control={control}
                render={({ field: { value, onChange, ...rest } }) => {
                  return (
                    <div className=" flex items-center gap-1 ">
                      <span className=" w-10 sm:hidden font-main-bg-gray-600 text-sm ">
                        To:
                      </span>

                      <input
                        {...rest}
                        id="to"
                        type="date"
                        className=" w-full max-w-[7.5rem] bg-transparent text-primary-base outline-0 "
                        value={value?.toLocaleDateString("en-CA")}
                        onChange={(e) => {
                          onChange(new Date(e.target.value));
                        }}
                      />
                    </div>
                  );
                }}
              />
            </div>
          </div>

          <div className=" flex flex-wrap items-center gap-x-3 ">
            <span className=" font-semibold ">Show:</span>

            <Controller
              name="show"
              control={control}
              render={({ field }) => {
                return (
                  <select
                    {...field}
                    id="show"
                    className=" bg-transparent text-primary-base outline-0 "
                  >
                    <option value={"price"}>Historical Prices</option>
                    <option value={"split"}>Stock Splits</option>
                  </select>
                );
              }}
            />
          </div>

          <div className=" flex flex-wrap items-center gap-x-3 ">
            <span className=" font-semibold ">Frequency:</span>

            <Controller
              name="period"
              control={control}
              render={({ field }) => {
                return (
                  <select
                    {...field}
                    id="period"
                    className=" bg-transparent text-primary-base outline-0 "
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

        <Button size={"sm"} className=" ml-auto px-6 md:px-4 ">
          Apply
        </Button>
      </form>

      <div className=" mx-auto grid space-y-5 ">
        <div className=" flex items-center justify-between ">
          <span className=" font-semibold ">Currency in USD</span>

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

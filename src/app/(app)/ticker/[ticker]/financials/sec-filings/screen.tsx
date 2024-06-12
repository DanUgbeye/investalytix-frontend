"use client";

import { cn } from "@/lib/utils";
import { SecFiling } from "@/modules/ticker/types";
import { format } from "date-fns";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { z } from "zod";

export const SEC_TYPE_SORT = [
  {
    label: "All",
    value: "",
  },
  {
    label: "Periodic Financial Report",
    value: "10-K",
  },
  {
    label: "Periodic Financial Report",
    value: "10-Q",
  },
  {
    label: "Corporate Changes & Voting Matters",
    value: "8-K",
  },
  {
    label: "Corporate Changes & Voting Matters",
    value: "DEF 14A",
  },
  {
    label: "Proxy Statements",
    value: "DEF 14A",
  },
  {
    label: "Offering Registration",
    value: "S-1",
  },
  // {
  //   label: "Tender Offer/Acquisition Reports",
  //   value: "",
  // },
];

type SecFilingType = (typeof SEC_TYPE_SORT)[number]["value"];

function verifySecFilingType(type: unknown) {
  const validation = z
    .enum([
      SEC_TYPE_SORT[0].value,
      SEC_TYPE_SORT[1].value,
      SEC_TYPE_SORT[2].value,
      SEC_TYPE_SORT[3].value,
      SEC_TYPE_SORT[4].value,
      SEC_TYPE_SORT[5].value,
    ])
    .safeParse(type);

  if (validation.error) return SEC_TYPE_SORT[0].value;
  return validation.data;
}

function getSecFilingNameFromType(type: string) {
  // TODO input appropriate
  return SEC_TYPE_SORT.find((sec) => sec.value === type)?.label || type;
}

interface RatioScreenProps {
  ticker: string;
  SECFilings: SecFiling[];
  filters?: {
    type?: string;
    page?: number;
    limit?: number;
  };
}

export default function RatioScreen(props: RatioScreenProps) {
  const { ticker, SECFilings, filters } = props;
  const searchParams = useSearchParams();

  function getSortUrl(sort: string) {
    let params = new URLSearchParams(searchParams);
    if (sort) {
      params.set("sort", sort);
    } else {
      params.delete("sort");
    }
    return params.toString();
  }

  console.log(filters);

  return (
    <section className=" space-y-12 pb-12 ">
      <div className=" flex gap-2 overflow-x-auto md:flex-wrap ">
        {SEC_TYPE_SORT.map((sorting, index) => {
          const url = getSortUrl(sorting.value);

          return (
            <Link
              key={`sorting.label-${index}`}
              href={`?${url}`}
              className={cn(
                " min-w-fit h-fit rounded-full border px-4 py-2 text-xs duration-300 hover:border-primary-base hover:text-primary-base dark:border-main-gray-700",
                (filters?.type || "") === sorting.value &&
                  " border-primary-base text-primary-base dark:border-primary-base  "
              )}
            >
              {sorting.label}
            </Link>
          );
        })}
      </div>

      <div className=" grid place-items-center gap-8 sm:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] ">
        {SECFilings.map((filing, index) => {
          return (
            <div
              key={index}
              className=" w-full max-w-xs rounded-lg border text-sm sm:max-w-sm dark:border-main-gray-700 "
            >
              <div className=" space-y-10 p-3 text-center ">
                <div className=" space-y-1 pt-4 ">
                  <h5 className=" font-bold ">
                    {getSecFilingNameFromType(filing.type)}
                  </h5>
                  <p className=" font-light italic ">Form {filing.type}</p>
                </div>

                <div className=" font-light italic  ">
                  {format(filing.fillingDate, "MMMM dd, yyyy")}
                </div>
              </div>

              <div className=" border-t p-3 text-center dark:border-main-gray-700 ">
                <Link
                  href={filing.finalLink}
                  target={"_blank"}
                  className=" text-primary-base underline decoration-transparent underline-offset-4 duration-300 hover:decoration-primary-base "
                >
                  View Filing
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

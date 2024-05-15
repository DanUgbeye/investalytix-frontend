"use client";

import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { SEC_FILINGS_SAMPLE } from "./sample";
import { z } from "zod";
import { format } from "date-fns";

const SEC_TYPE_SORT = [
  {
    label: "All",
    value: "",
    types: [],
  },
  {
    label: "Periodic Financial Report",
    value: "periodic-financial-report",
    types: ["10-K", "10-Q"],
  },
  {
    label: "Corporate Changes & Voting Matters",
    value: "corporate-voting-matters",
    types: ["8-K", "DEF 14A"],
  },
  {
    label: "Proxy Statements",
    value: "proxy-statements",
    types: ["DEF 14A"],
  },
  {
    label: "Offering Registration",
    value: "offering-registration",
    types: ["S-1"],
  },
  {
    label: "Tender Offer/Acquisition Reports",
    value: "tender-acquisition-reports",
    types: [""],
  },
] as const;

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
  return "10-K Periodic Financial Report";
}

interface RatioScreenProps {
  ticker: string;
}

export default function RatioScreen(props: RatioScreenProps) {
  const { ticker } = props;
  const searchParams = useSearchParams();
  const activeSecType = verifySecFilingType(searchParams.get("sort"));

  const secFilings = useMemo(() => {
    if (!activeSecType) return SEC_FILINGS_SAMPLE;
    return SEC_FILINGS_SAMPLE.filter((secFiling) => {
      const typeValues = SEC_TYPE_SORT.find(
        (filing) => filing.value === activeSecType
      );

      if (!typeValues) return SEC_FILINGS_SAMPLE;
      return SEC_FILINGS_SAMPLE.filter((filing) => {
        return ([...typeValues.types] as string[]).includes(
          filing.type as string
        );
      });
    });
  }, [activeSecType]);

  function getSortUrl(sort: string) {
    let params = new URLSearchParams(searchParams);
    if (sort) {
      params.set("sort", sort);
    } else {
      params.delete("sort");
    }
    return params.toString();
  }

  return (
    <section className=" space-y-12 pb-12 ">
      <div className=" flex gap-2 overflow-x-auto md:flex-wrap ">
        {SEC_TYPE_SORT.map((sorting, index) => {
          const url = getSortUrl(sorting.value);

          return (
            <Link
              key={sorting.label}
              href={`?${url}`}
              className={cn(
                buttonVariants({ variant: "outline" }),
                (activeSecType || "") === sorting.value &&
                  buttonVariants({ variant: "default" })
              )}
            >
              {sorting.label}
            </Link>
          );
        })}
      </div>

      <div className=" grid place-items-center gap-8 sm:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] ">
        {secFilings.map((filing, index) => {
          return (
            <div
              key={index}
              className=" w-full max-w-xs border text-sm sm:max-w-sm dark:border-main-gray-600 "
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

              <div className=" border-t p-3 text-center dark:border-main-gray-600 ">
                <Link
                  href={filing.link}
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

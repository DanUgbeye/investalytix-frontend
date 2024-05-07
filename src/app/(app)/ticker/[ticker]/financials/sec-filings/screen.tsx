"use client";

import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const secSorting = [
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

interface RatioScreenProps {
  ticker: string;
}

export default function RatioScreen(props: RatioScreenProps) {
  const { ticker } = props;
  const searchParams = useSearchParams();
  const activeSort = searchParams.get("sort");

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
        {secSorting.map((sorting, index) => {
          const url = getSortUrl(sorting.value);

          return (
            <Link
              key={sorting.label}
              href={`?${url}`}
              className={cn(
                buttonVariants({ variant: "outline" }),
                (activeSort || "") === sorting.value &&
                  buttonVariants({ variant: "default" })
              )}
            >
              {sorting.label}
            </Link>
          );
        })}
      </div>

      <div className=" grid place-items-center gap-8 sm:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] ">
        {Array(12)
          .fill("")
          .map((_, index) => {
            return (
              <div
                key={index}
                className=" w-full max-w-xs border text-sm sm:max-w-sm dark:border-main-gray-600 "
              >
                <div className=" space-y-10 p-3 text-center ">
                  <div className=" space-y-1 pt-4 ">
                    <h5 className=" font-bold ">
                      10-K Periodic Financial Report
                    </h5>
                    <p className=" font-light italic ">
                      Periodic Financial Reports
                    </p>
                  </div>

                  <div className=" font-light italic  ">November 03, 2023</div>
                </div>

                <div className=" border-t p-3 text-center dark:border-main-gray-600 ">
                  <Link
                    href={""}
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

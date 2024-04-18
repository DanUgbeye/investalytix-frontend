"use client";

import { useState } from "react";
import ChartSample from "./chart-sample";
import { cn } from "@/lib/utils";

interface IndustrySectorComparisonScreenProps {
  ticker: string;
}

export default function IndustrySectorComparisonScreen(
  props: IndustrySectorComparisonScreenProps
) {
  const { ticker } = props;
  const [tab, setTab] = useState<"Industry" | "Sector">("Industry");

  function handleTabChange(change: typeof tab) {
    setTab(change);
  }

  return (
    <section className=" space-y-10 py-10 ">
      <div className=" flex w-fit gap-2 rounded bg-[#F5F5F5] p-2 dark:bg-gray-800 ">
        <button
          type="button"
          className={cn(
            `flex h-8 items-center justify-center whitespace-nowrap rounded px-4 text-center  text-sm font-medium tracking-wider duration-300 hover:bg-gray-200 sm:px-7 dark:hover:bg-gray-700`,
            {
              "bg-primary-base text-white hover:bg-primary-base hover:text-white dark:hover:bg-primary-base ":
                tab === "Industry",
            }
          )}
          onClick={(e) => handleTabChange("Industry")}
        >
          INDUSTRY
        </button>

        <button
          type="button"
          className={cn(
            `flex h-8 items-center justify-center whitespace-nowrap rounded px-4 text-center text-sm font-medium tracking-wider duration-300 hover:bg-gray-200 sm:px-7 dark:hover:bg-gray-700 `,
            {
              "bg-primary-base text-white hover:bg-primary-base hover:text-white dark:hover:bg-primary-base ":
                tab === "Sector",
            }
          )}
          onClick={(e) => handleTabChange("Sector")}
        >
          SECTOR
        </button>
      </div>

      <div className=" overflow-x-auto ">
        <table className=" w-full min-w-[50rem] border ">
          <thead>
            <tr className=" divide-x text-sm font-bold ">
              <th className=" min-w-28 border p-2 text-left ">Name</th>

              <th className=" border p-2 text-left ">Price</th>

              <th className=" border p-2 text-right ">Market Cap</th>

              <th className=" border p-2 text-right ">P/E Ratio</th>

              <th className=" border p-2 text-right ">Yearly Gain</th>

              <th className=" border p-2 text-right ">Analyst Consensus</th>

              <th className=" border p-2 text-right ">Analyst Price Target</th>

              <th className=" border p-2 text-right ">
                Top Analyst Price Target
              </th>

              <th className=" border p-2 text-right ">Smart Score</th>
            </tr>
          </thead>

          <tbody>
            {Array(10)
              .fill("_")
              .map((_, index) => {
                return (
                  <tr key={`forecast-${index}`} className=" text-sm ">
                    <td className=" border p-2 text-left text-[#333333] white-text">
                      <div className=" flex flex-col space-y-1 ">
                        <span className=" font-semibold text-[#125BD4] ">
                          AAPL
                        </span>

                        <span className=" font-bold ">Apple</span>
                      </div>
                    </td>

                    <td className={` border p-2 text-left`}>$185.92</td>

                    <td className=" border p-2 text-right ">$2.89T</td>

                    <td className=" border p-2 text-right">30.32</td>

                    <td className=" border p-2 text-right text-green-700 ">
                      38.73%
                    </td>

                    <td className=" border p-2 text-right text-[#125BD4] ">
                      Moderate Buy
                    </td>

                    <td className=" border p-2 text-right text-[#125BD4]">
                      9.38% Upside
                    </td>

                    <td className=" border p-2 text-right text-[#125BD4]">
                      9.65% Upside
                    </td>

                    <td className=" border p-2 text-right text-green-700 ">
                      8
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className=" border ">
        <div className=" overflow-x-auto py-5 ">
          <ChartSample />
        </div>

        <p className=" bg-gray-100 p-3 text-xs dark:bg-primary-base/10 border-t ">
          Compare key indicators and discover each stock&apos;s average analyst
          price target, as well as the latest recommendations by top Wall Street
          experts
        </p>
      </div>
    </section>
  );
}

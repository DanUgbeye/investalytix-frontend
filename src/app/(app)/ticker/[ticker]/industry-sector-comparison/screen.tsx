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
      <div className=" flex w-fit gap-2 rounded bg-[#F5F5F5] p-2 dark:bg-[#13151D] ">
        <button
          type="button"
          className={cn(
            `flex h-8 items-center justify-center whitespace-nowrap rounded px-4 text-center text-sm font-medium tracking-wider duration-300 hover:bg-gray-200 sm:px-7 dark:hover:bg-white/10`,
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
            `flex h-8 items-center justify-center whitespace-nowrap rounded px-4 text-center text-sm font-medium tracking-wider duration-300 hover:bg-gray-200 sm:px-7 dark:hover:bg-white/10 `,
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
        <table className=" dark-mode-border w-full min-w-[50rem] border ">
          <thead>
            <tr className=" dark-mode-border border-y text-sm font-bold dark:bg-white/20 ">
              <th className=" min-w-28 px-2 py-4 text-left ">Name</th>

              <th className=" px-2 py-4 text-left ">Price</th>

              <th className=" px-2 py-4 text-right ">Market Cap</th>

              <th className=" px-2 py-4 text-right ">P/E Ratio</th>

              <th className=" px-2 py-4 text-right ">Yearly Gain</th>

              <th className=" px-2 py-4 text-right ">Analyst Consensus</th>

              <th className=" px-2 py-4 text-right ">Analyst Price Target</th>

              <th className=" px-2 py-4 text-right ">Top Analyst Price Target</th>

              <th className=" px-2 py-4 text-right ">Smart Score</th>
            </tr>
          </thead>

          <tbody>
            {Array(10)
              .fill("_")
              .map((_, index) => {
                return (
                  <tr
                    key={`forecast-${index}`}
                    className=" dark-mode-border border-y text-sm "
                  >
                    <td className=" white-text p-2 text-left text-[#333333]">
                      <div className=" flex flex-col space-y-1 ">
                        <span className=" font-semibold text-[#125BD4] ">
                          AAPL
                        </span>

                        <span className=" font-bold ">Apple</span>
                      </div>
                    </td>

                    <td className={` p-2 text-left`}>$185.92</td>

                    <td className=" p-2 text-right ">$2.89T</td>

                    <td className=" p-2 text-right">30.32</td>

                    <td className=" p-2 text-right text-green-700 ">38.73%</td>

                    <td className=" p-2 text-right text-[#125BD4] ">
                      Moderate Buy
                    </td>

                    <td className=" p-2 text-right text-[#125BD4]">
                      9.38% Upside
                    </td>

                    <td className=" p-2 text-right text-[#125BD4]">
                      9.65% Upside
                    </td>

                    <td className=" p-2 text-right text-green-700 ">8</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className=" dark-mode-border border ">
        <div className=" overflow-x-auto py-5 ">
          <ChartSample />
        </div>

        <p className=" dark-mode-border border-t bg-gray-100 p-3 text-xs dark:bg-white/10 ">
          Compare key indicators and discover each stock&apos;s average analyst
          price target, as well as the latest recommendations by top Wall Street
          experts
        </p>
      </div>
    </section>
  );
}

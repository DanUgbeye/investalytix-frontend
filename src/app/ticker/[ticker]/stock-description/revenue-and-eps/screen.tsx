"use client";

import Mapper from "@/components/mapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const FINANCIAL_HISTORY_DATA = {
  reportDate: new Date(),
  fiscalQuarter: "2024(Q1)",
  forecast: 2.09,
  current: 1.46,
  lastYear: 1.88,
  yoyChange: 0.17,
  yoyChangePercentage: 13.18,
};

interface RevenueAndEPSScreenProps {
  ticker: string;
}

export default function RevenueAndEPSScreen(props: RevenueAndEPSScreenProps) {
  const { ticker } = props;

  const [chartTab, setChartTab] = useState<"Earnings" | "Revenue">("Earnings");

  return (
    <section className=" space-y-12 ">
      <div className=" space-y-6 px-6 ">
        <div className=" flex gap-x-10 ">
          <Button
            variant={"link"}
            className={cn(
              " rounded-none border-b-2 px-0 font-bold hover:no-underline ",
              {
                " border-b-primary-base ": chartTab === "Earnings",
                " border-transparent hover:border-primary-base ":
                  chartTab !== "Earnings",
              }
            )}
            onClick={() => setChartTab("Earnings")}
          >
            Earnings
          </Button>

          <Button
            variant={"link"}
            className={cn(
              " rounded-none border-b-2 px-0 font-bold hover:no-underline ",
              {
                " border-b-primary-base ": chartTab === "Revenue",
                " border-transparent hover:border-primary-base ":
                  chartTab !== "Revenue",
              }
            )}
            onClick={() => setChartTab("Revenue")}
          >
            Revenue
          </Button>
        </div>

        <div className="  ">
          <Image
            src={"/images/chart2.png"}
            width={925}
            height={165}
            className=" w-full object-cover "
            alt="placeholder"
          />
        </div>
      </div>

      {/* EARNINGS SECTION */}
      <div className=" space-y-6 ">
        <h3 className=" text-2xl font-bold ">Earning History</h3>

        <div className=" space-y-6 ">
          <div className=" ">
            <div className=" overflow-y-auto ">
              <table className="w-full  min-w-[50rem] ">
                <thead>
                  <tr className=" divide-x border-b border-b-[#DEE2E6] text-sm font-bold text-[#212529] dark:text-white ">
                    <th className=" px-2 py-4 text-left dark:bg-transparent">
                      Report Date
                    </th>

                    <th className=" px-2 py-4 text-right dark:bg-transparent">
                      Fiscal Quarter
                    </th>

                    <th className=" px-2 py-4 text-right dark:bg-transparent">
                      Forecast/EPS
                    </th>

                    <th className=" px-2 py-4 text-right dark:bg-transparent">
                      Last Year&apos;s EPS
                    </th>

                    <th className=" px-2 py-4 text-right dark:bg-transparent">
                      EPS YoY Change
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <Mapper
                    list={Array<typeof FINANCIAL_HISTORY_DATA>(10).fill(
                      FINANCIAL_HISTORY_DATA
                    )}
                    component={(props) => {
                      const { item } = props;

                      return (
                        <tr className=" text-sm ">
                          <td className=" font-bold px-2 py-4 text-left text-[#333333] dark:text-white">
                            {item.reportDate.toDateString()}
                          </td>

                          <td
                            className={` px-2 py-4 text-right text-[#212529] dark:text-white`}
                          >
                            {item.fiscalQuarter}
                          </td>

                          <td className=" px-2 py-4 text-right text-[#212529] dark:text-white">
                            <span className=" ">{item.forecast}</span>/
                            <span
                              className={cn({
                                " text-green-600 ":
                                  item.current && item.current > item.forecast,
                                " text-red-600 ":
                                  item.current && item.current < item.forecast,
                              })}
                            >
                              {item.current ? Math.abs(item.current) : "-"}
                            </span>
                          </td>

                          <td className=" px-2 py-4 text-right text-[#212529] dark:text-white">
                            {item.lastYear}
                          </td>

                          <td className=" px-2 py-4 text-right text-[#212529] dark:text-white">
                            {item.yoyChangePercentage.toPrecision(2)}% (
                            {item.yoyChange > 0 && "+"}
                            {item.yoyChange.toPrecision(2)})
                          </td>
                        </tr>
                      );
                    }}
                  />
                </tbody>
              </table>
            </div>

            <div className="  flex flex-wrap items-center gap-x-10 gap-y-2 bg-[#F9FAFB] px-4 py-4 text-xs dark:bg-[#262626]  ">
              <div className="  ">
                The table shows recent earnings report dates and whether the
                forecast was beat or missed. See the change in forecast and EPS
                from the previous year.
              </div>

              <div className=" flex items-center gap-x-5 ">
                <span className=" flex items-center gap-x-2 ">
                  <span className=" size-3 rounded-sm bg-green-600 " />
                  Beat
                </span>

                <span className=" flex items-center gap-x-2 ">
                  <span className=" size-3 rounded-sm bg-red-600 " />
                  Missed
                </span>
              </div>
            </div>
          </div>

          <div className=" flex justify-center ">
            <Button className=" gap-x-3 ">+ Show More</Button>
          </div>
        </div>
      </div>

      {/* REVENUE SECTION */}
      <div className=" space-y-6 ">
        <h3 className=" text-2xl font-bold ">Revenue History</h3>

        <div className=" space-y-6 ">
          <div className=" ">
            <div className=" overflow-y-auto ">
              <table className="w-full  min-w-[50rem] ">
                <thead>
                  <tr className=" divide-x border-b border-b-[#DEE2E6] text-sm font-semibold text-[#212529] dark:text-white ">
                    <th className=" px-2 py-4 text-left dark:bg-transparent">
                      Report Date
                    </th>

                    <th className=" px-2 py-4 text-right dark:bg-transparent">
                      Fiscal Quarter
                    </th>

                    <th className=" px-2 py-4 text-right dark:bg-transparent">
                      Revenue
                    </th>

                    <th className=" px-2 py-4 text-right dark:bg-transparent">
                      Last Year&apos;s Revenue
                    </th>

                    <th className=" px-2 py-4 text-right dark:bg-transparent">
                      Revenue YoY Change
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <Mapper
                    list={Array<typeof FINANCIAL_HISTORY_DATA>(10).fill(
                      FINANCIAL_HISTORY_DATA
                    )}
                    component={(props) => {
                      const { item } = props;

                      return (
                        <tr className=" text-sm ">
                          <td className=" px-2 py-4 text-left text-[#333333] dark:text-white font-semibold">
                            {item.reportDate.toDateString()}
                          </td>

                          <td
                            className={` px-2 py-4 text-right text-[#212529] dark:text-white`}
                          >
                            {item.fiscalQuarter}
                          </td>

                          <td className=" px-2 py-4 text-right text-[#212529] dark:text-white">
                            {item.current || "-"}
                          </td>

                          <td className=" px-2 py-4 text-right text-[#212529] dark:text-white">
                            {item.lastYear}
                          </td>

                          <td className=" px-2 py-4 text-right text-[#212529] dark:text-white">
                            {item.yoyChangePercentage.toPrecision(2)}% (
                            {item.yoyChange > 0 && "+"}
                            {item.yoyChange.toPrecision(2)})
                          </td>
                        </tr>
                      );
                    }}
                  />
                </tbody>
              </table>
            </div>

            <div className="  flex flex-wrap items-center gap-x-10 gap-y-2 bg-[#F9FAFB] px-4 py-4 text-xs dark:bg-[#262626]  ">
              <div className="  ">
                The table shows recent earnings report dates and whether the
                forecast was beat or missed. See the change in forecast and EPS
                from the previous year.
              </div>

              {/* <div className=" flex items-center gap-x-5 ">
                <span className=" flex items-center gap-x-2 ">
                  <span className=" size-3 rounded-sm bg-green-600 " />
                  Beat
                </span>

                <span className=" flex items-center gap-x-2 ">
                  <span className=" size-3 rounded-sm bg-red-600 " />
                  Missed
                </span>
              </div> */}
            </div>
          </div>

          <div className=" flex justify-center ">
            <Button className=" gap-x-3 ">+ Show More</Button>
          </div>
        </div>
      </div>

      <div className=" space-y-4 ">
        <h4 className=" text-xl font-bold ">Earning Estimate Graph</h4>

        <div className="  ">
          <Image
            src={"/images/chart1.png"}
            width={925}
            height={293}
            className=" object-contain "
            alt="placeholder"
          />
        </div>
      </div>
    </section>
  );
}

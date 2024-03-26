"use client";

import Mapper from "@/components/mapper";
import { Button } from "@/components/ui/button";

interface HistoricalDataScreenProps {
  ticker: string;
}

export default function HistoricalDataScreen(props: HistoricalDataScreenProps) {
  const { ticker } = props;

  return (
    <section className=" space-y-12 pb-12 ">
      <div className=" flex flex-wrap justify-between gap-3 rounded bg-[#FFF3E9] p-6 ">
        <div className=" flex flex-col gap-x-4 gap-y-2 md:flex-row md:items-center ">
          <div className=" flex flex-wrap items-center gap-x-3 ">
            <span className=" dark:text-black ">Time Period:</span>
            <span className=" text-primary-base ">
              Dec 22, 2022 - Dec 22, 2023
            </span>
          </div>

          <div className=" flex flex-wrap items-center gap-x-3 ">
            <span className=" dark:text-black ">Show:</span>
            <span className=" text-primary-base ">Historical Prices</span>
          </div>

          <div className=" flex flex-wrap items-center gap-x-3 ">
            <span className=" dark:text-black ">Frequency:</span>
            <span className=" text-primary-base ">Daily</span>
          </div>
        </div>

        <Button size={"sm"} className=" px-4 ">
          Apply
        </Button>
      </div>

      <div className=" mx-auto grid max-w-[60rem] space-y-5 ">
        <div className=" flex justify-between ">
          <span className=" ">Currency in USD</span>

          <Button variant={"outline-orange"} className=" border-none ">
            Download
          </Button>
        </div>

        <div className=" overflow-x-auto ">
          <table className=" w-full min-w-[50rem] ">
            <thead className="  ">
              <tr className=" border-b ">
                <td className=" px-2 py-3 ">Date</td>
                <td className=" px-2 py-3 text-right ">Open</td>
                <td className=" px-2 py-3 text-right ">High</td>
                <td className=" px-2 py-3 text-right ">Low</td>
                <td className=" px-2 py-3 text-right ">Close*</td>
                <td className=" px-2 py-3 text-right ">Adj Close**</td>
                <td className=" px-2 py-3 text-right ">Volume</td>
              </tr>
            </thead>

            <tbody className="  ">
              <Mapper
                list={Array(10).fill("")}
                component={() => {
                  return (
                    <tr className=" border-b ">
                      <td className=" px-2 py-3 ">Dec 22, 2023</td>
                      <td className=" px-2 py-3 text-right ">195.18</td>
                      <td className=" px-2 py-3 text-right ">195.18</td>
                      <td className=" px-2 py-3 text-right ">195.18</td>
                      <td className=" px-2 py-3 text-right ">195.18</td>
                      <td className=" px-2 py-3 text-right ">195.18</td>
                      <td className=" px-2 py-3 text-right ">13,029,843</td>
                    </tr>
                  );
                }}
              />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

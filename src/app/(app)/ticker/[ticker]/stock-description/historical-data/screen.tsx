"use client";

import { Button } from "@/components/ui/button";

const HISTORICAL_DATA = {
  date: new Date(),
  open: 195.18,
  high: 195.18,
  low: 195.18,
  close: 195.18,
  adjClose: 195.18,
  volume: 13_029_843,
};

interface HistoricalDataScreenProps {
  ticker: string;
}

export default function HistoricalDataScreen(props: HistoricalDataScreenProps) {
  const { ticker } = props;

  return (
    <section className=" space-y-12 pb-12 ">
      <div className=" flex flex-wrap justify-between gap-3 rounded bg-[#FFF3E9] p-6 dark:bg-primary-base/20 ">
        <div className=" flex flex-col gap-x-4 gap-y-2 md:flex-row md:items-center ">
          <div className=" flex flex-wrap items-center gap-x-3 ">
            <span className=" ">Time Period:</span>
            <span className=" text-primary-base ">
              Dec 22, 2022 - Dec 22, 2023
            </span>
          </div>

          <div className=" flex flex-wrap items-center gap-x-3 ">
            <span className=" ">Show:</span>
            <span className=" text-primary-base ">Historical Prices</span>
          </div>

          <div className=" flex flex-wrap items-center gap-x-3 ">
            <span className=" ">Frequency:</span>
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
          <table className=" w-full min-w-[45rem] text-sm ">
            <thead className="  ">
              <tr className=" border-b font-semibold ">
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
              {Array<typeof HISTORICAL_DATA>(10)
                .fill(HISTORICAL_DATA)
                .map((item, index) => {
                  return (
                    <tr key={`historical-data${index}`} className=" border-b ">
                      <td className=" px-2 py-3 ">
                        {item.date.toDateString()}
                      </td>

                      <td className=" px-2 py-3 text-right ">
                        {item.open.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>

                      <td className=" px-2 py-3 text-right ">
                        {item.high.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>

                      <td className=" px-2 py-3 text-right ">
                        {item.low.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>

                      <td className=" px-2 py-3 text-right ">
                        {item.close.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>

                      <td className=" px-2 py-3 text-right ">
                        {item.adjClose.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>

                      <td className=" px-2 py-3 text-right ">
                        {item.volume.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

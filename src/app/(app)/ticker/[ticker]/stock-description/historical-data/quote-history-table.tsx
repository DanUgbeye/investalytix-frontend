import { QuoteHistory } from "@/types";
import React from "react";

export default function QuoteHistoryTable(props: {
  quoteHistory: QuoteHistory[];
}) {
  const { quoteHistory } = props;

  return (
    <div className=" overflow-x-auto border dark:border-main-gray-600 ">
      <table className=" w-full min-w-[45rem] text-sm ">
        <thead className="  ">
          <tr className=" th font-semibold even:bg-main-gray-100  dark:bg-white/20 dark:even:bg-main-gray-900">
            <td className=" px-2 py-3 ">Date</td>
            <td className=" px-2 py-3 text-right ">Open</td>
            <td className=" px-2 py-3 text-right ">High</td>
            <td className=" px-2 py-3 text-right ">Low</td>
            <td className=" px-2 py-3 text-right ">Close*</td>
            {/* <td className=" px-2 py-3 text-right ">Adj Close**</td> */}
            <td className=" px-2 py-3 text-right ">Volume</td>
          </tr>
        </thead>

        <tbody className="  ">
          {quoteHistory.map((item, index) => {
            return (
              <tr
                key={`historical-data${index}`}
                className=" even:bg-main-gray-100  dark:even:bg-main-gray-900 "
              >
                <td className=" px-2 py-3 ">{item.date.toDateString()}</td>

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

                {/* <td className=" px-2 py-3 text-right ">
                  {item.adjClose.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </td> */}

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
  );
}

import { TickerChange } from "@/modules/ticker/types";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { twMerge } from "tailwind-merge";

export default function Quote({
  quote,
  className = "",
}: {
  quote: TickerChange;
  className?: HTMLDivElement["className"];
}) {
  const isPositive = (quote.changesPercentage || 0) >= 0;

  return (
    <div
      className={twMerge(
        "white-text w-fit rounded-md px-3 py-0 text-sm font-bold text-[#252525]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-5">
        <p className="">{quote.symbol}</p>
        <div
          className={`flex items-center justify-between py-3 ${
            isPositive
              ? "text-main-green-light dark:text-main-green-dark"
              : "text-main-red-light dark:text-main-red-dark"
          }`}
        >
          <p className="">{quote.price}</p>
          <div className="">
            {isPositive ? (
              <TiArrowSortedUp className="size-6" />
            ) : (
              <TiArrowSortedDown className="size-6" />
            )}
          </div>
          <p className="">
            {/* {isPositive && "+"} */}
            {quote.changesPercentage}%
          </p>
        </div>
      </div>
    </div>
  );

  //   return (
  //     <div
  //       className={twMerge(
  //         "white-text w-[220px] rounded-md bg-primary-light/10 px-3 py-2 text-sm font-bold text-[#252525] dark:bg-[#191919]",
  //         className
  //       )}
  //     >
  //       <div className="flex items-center justify-between gap-24">
  //         <p className="">{quote.symbol}</p>
  //         <p className="">{quote.price}</p>
  //       </div>
  //       <div
  //         className={`flex items-center justify-between py-3 ${
  //           isPositive
  //             ? "text-main-green-light dark:text-main-green-dark"
  //             : "text-main-red-light dark:text-main-red-dark"
  //         }`}
  //       >
  //         <div className="">
  //           {isPositive ? (
  //             <TiArrowSortedUp className="size-6" />
  //           ) : (
  //             <TiArrowSortedDown className="size-6" />
  //           )}
  //         </div>
  //         <p className="">
  //           {isPositive && "+"}
  //           {quote.change} {isPositive && "+"}
  //           {quote.changesPercentage}%
  //         </p>
  //       </div>
  //       <p className="text-xs">LAST | {quote.timestamp && formatTimestamp(quote.timestamp!)}</p>
  //     </div>
  //   );
}

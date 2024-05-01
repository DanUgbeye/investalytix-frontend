import { formatTimestamp } from "@/lib/utils";
import quotes from "@/mock/quotes";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

export default function Quote({ quote }: { quote: (typeof quotes)[number] }) {
  const isPositive = quote.changesPercentage >= 0;
  return (
    <div className="white-text w-[220px] rounded-md bg-primary-light/10 px-3 py-2 text-sm font-bold text-[#252525] dark:bg-[#191919]">
      <div className="flex items-center justify-between gap-24">
        <p className="">{quote.symbol}</p>
        <p className="">{quote.price}</p>
      </div>
      <div
        className={`flex items-center justify-between py-3 ${
          isPositive
            ? "text-main-green-light dark:text-main-green-dark"
            : "text-main-red-light dark:text-main-red-dark"
        }`}
      >
        <div className="">
          {isPositive ? (
            <TiArrowSortedUp className="size-6" />
          ) : (
            <TiArrowSortedDown className="size-6" />
          )}
        </div>
        <p className="">
          {isPositive && "+"}
          {quote.change} {isPositive && "+"}
          {quote.changesPercentage}%
        </p>
      </div>
      <p className="text-xs">LAST | {formatTimestamp(quote.timestamp)}</p>
    </div>
  );
}

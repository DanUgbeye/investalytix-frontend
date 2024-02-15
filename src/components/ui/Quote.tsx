import { formatTimestamp } from "@/lib/utils";
import quotes from "@/mock/quotes";

export default function Quote({ quote }: { quote: (typeof quotes)[number] }) {
    const isPositive = quote.changesPercentage >= 0;
    return (
      <div className="w-[220px] border-r border-[#B3B3B3] px-3 py-2 text-sm font-bold text-[#252525]">
        <div className="flex items-center justify-between gap-24">
          <p className="">{quote.symbol}</p>
          <p className="">{quote.price}</p>
        </div>
        <div
          className={`flex justify-between py-3 ${
            isPositive ? "text-[#DC0000]" : "text-[#008133]"
          }`}
        >
          <p className=""></p>
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
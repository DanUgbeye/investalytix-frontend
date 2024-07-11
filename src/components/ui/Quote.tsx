"use client";

import { cn } from "@/lib/utils";
import { TickerChange } from "@/modules/ticker/types";
import { getTickerStockDescriptionRoute } from "@/route";
import Link, { LinkProps } from "next/link";
import { HTMLAttributes, memo } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface Props extends Pick<HTMLAttributes<LinkProps>, "className"> {
  quote: TickerChange;
}

const Quote = memo(({ quote, className = "" }: Props) => {
  const isPositive = (quote.changesPercentage || 0) >= 0;

  return (
    <div
      className={cn("w-fit rounded-md px-3 py-0 text-sm font-bold", className)}
    >
      <Link
        href={getTickerStockDescriptionRoute(quote.symbol)}
        className="flex items-center justify-between gap-5"
      >
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
      </Link>
    </div>
  );
});

export default Quote;

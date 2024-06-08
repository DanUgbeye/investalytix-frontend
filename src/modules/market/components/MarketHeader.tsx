"use client";
import Link from "next/link";
import { MouseEvent, useRef } from "react";

const markets = [
  { label: "PRE-MKT", href: "/markets/pre-market" },
  { label: "STOCK MARKET", href: "/markets/stock-market" },
  { label: "FX", href: "/markets/fx" },
  { label: "CRYPTOCURRENCY", href: "/markets/cryptocurrency" },
  { label: "COMMODITIES", href: "/markets/commodities" },
  { label: "BONDS", href: "/markets/bonds" },
  { label: "ECONOMY", href: "/markets/economy" },
] as const;

export default function MarketHeader({
  name,
  active,
}: {
  name: string;
  active?: (typeof markets)[number]["label"];
}) {
  const ref = useRef<HTMLDivElement>(null);

  function hoverHandler(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    const current = ref.current;
    if (current === null) return;
    e.preventDefault();
    current.style.left = `${e.currentTarget.offsetLeft}px`;
    current.style.width = `${e.currentTarget.clientWidth}px`;
  }
  function hoverLeaveHandler(
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) {
    const current = ref.current;
    if (current === null) return;
    e.preventDefault();
    current.style.width = `0px`;
    current.style.left = `0px`;
  }

  return (
    <div className="mb-10">
      {active && (
        <p className="white-text mb-2 text-center text-3xl font-extrabold uppercase">
          MARKETS
        </p>
      )}
      <h1 className="white-text mb-7 pb-2 text-center text-3xl md:text-4xl font-extrabold">
        {name}
      </h1>

      <div
        className={
          "relative flex items-center justify-center gap-10 overflow-auto"
        }
      >
        <div className="absolute bottom-0 left-0 right-0 h-[2px] w-full bg-black/10"></div>
        <div
          className="absolute bottom-0 left-0 z-[2] h-[2px] w-[0px] bg-primary-base duration-150"
          ref={ref}
        ></div>
        {markets.map((mkt) => (
          <div
          key={mkt.href}
            className={`z-[1] border-b-2 py-2 ${
              mkt.label === active
                ? "border-primary-base "
                : // : "border-primary-base"
                  "border-transparent"
            }`}
            onMouseOver={hoverHandler}
            onMouseLeave={hoverLeaveHandler}
          >
            <Link
              href={mkt.href}
              className={`bg-hover-focus white-text text-hover-focus whitespace-nowrap rounded-full  px-3 text-sm font-bold capitalize`}
            >
              {mkt.label.toLowerCase()}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

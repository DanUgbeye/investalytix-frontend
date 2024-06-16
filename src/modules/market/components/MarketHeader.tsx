"use client";
import Link from "next/link";
import { MouseEvent, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
    <div className="mb-10 overflow-hidden">
      {active && (
        <p className="white-text mb-2 text-center text-6xl font-extrabold capitalize">
          Markets
        </p>
      )}
      <h1 className="white-text mb-7 pb-2 text-center text-3xl font-extrabold capitalize">
        {name.toLowerCase()}
      </h1>

      <div className="relative isolate" onMouseLeave={hoverLeaveHandler}>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/10 -z-[1]"></div>

        <div className="relative md:mx-auto md:w-fit z-10">
          <div
            className="absolute bottom-0 left-0 z-[2] h-[2px] w-[0px] bg-primary-base duration-150"
            ref={ref}
          ></div>

          <Swiper spaceBetween={24} slidesPerView={"auto"} freeMode>
            {markets.map((mkt) => {
              const isActive = mkt.label === active;
              return (
                <SwiperSlide
                  key={mkt.href}
                  className={`z-[1] w-fit !flex-shrink grow-0 border-b-2 py-2 ${
                    isActive
                      ? "border-primary-base "
                      : // : "border-primary-base"
                        "border-transparent"
                  }`}
                  onMouseOver={hoverHandler}
                >
                  <Link
                    href={mkt.href}
                    className={`bg-hover-focus text-hover-focus whitespace-nowrap rounded-md px-3 py-1 text-sm font-bold capitalize ${isActive ? "text-primary-base" : ""}`}
                  >
                    {mkt.label.toLowerCase()}
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

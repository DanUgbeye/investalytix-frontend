"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type MarketSubLinksProps = {
  className?: HTMLDivElement["className"];
  markets: {
    label: string;
    href: string;
  }[];
};

export default function MarketSubLinks({
  markets,
  className = "",
}: MarketSubLinksProps) {
  const pathname = usePathname();
  return (
    <div
      className={twMerge(
        `sticky top-[84px] z-10 mb-14 bg-white dark:bg-black md:top-[88px] ${className}`
      )}
    >
      <div className="mx-auto w-full items-center justify-center gap-2 sm:w-fit">
        <Swiper spaceBetween={24} slidesPerView={"auto"} freeMode>
          {markets.map((market) => {
            const isActive = market.href === pathname;
            return (
              <SwiperSlide
                key={market.href}
                className={`z-[1] !w-fit !flex-shrink grow-0 border-b-2 py-2 ${
                  isActive
                    ? "border-primary-base "
                    : // : "border-primary-base"
                      "border-transparent"
                }`}
              >
                <Link
                  key={market.href}
                  href={market.href}
                  className={`bg-hover-focus whitespace-nowrap rounded-full px-4 py-1 text-center text-sm capitalize ${
                    market.href === pathname ? "text-primary-base" : ""
                  }`}
                >
                  {market.label.toLowerCase()}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

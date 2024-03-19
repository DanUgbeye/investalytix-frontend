"use client";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import quotes from "@/mock/quotes";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { RiStarSLine } from "react-icons/ri";
import Quote from "@/components/ui/Quote";

export const TICKER_NAV_TABS = {
  STOCK_DESCRIPTION: "stock-description",
  ANALYST_RECOMMENDATIONS: "analyst-recommendation",
  CHARTS: "charts",
  FINANCIALS: "financials",
  INDIVIDUAL_COMPANY_NEWS: "individual-company-news",
  DIVIDENDS: "dividends",
  INDUSTRY_SECTOR_COMPARISON: "industry-sector-comparison",
} as const;

export type TickerNavTab =
  (typeof TICKER_NAV_TABS)[keyof typeof TICKER_NAV_TABS];
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { DesktopTickerNav, MobileTickerNav } from "../../components/ticker-nav";

export interface SearchTickerLayoutProps extends HTMLAttributes<HTMLElement> {
  ticker: string;
}

export default function SearchTickerLayout(props: SearchTickerLayoutProps) {
  const { className, children, ticker, ...rest } = props;

  return (
    <section {...rest} className={cn("  ", className)}>
      <Container className=" relative grid min-h-[calc(100dvh-5rem)] max-w-[110rem] grid-cols-1 grid-rows-[auto,1fr] p-0 sm:p-0 md:grid-rows-1 xl:p-0 ">
        <DesktopTickerNav
          ticker={ticker}
          className=" top-0 col-start-1 row-start-1 hidden w-[15rem] lg:flex "
        />

        <MobileTickerNav ticker={ticker} className=" flex lg:hidden " />

        <main className=" col-start-1 lg:row-start-1 lg:ml-[15rem] ">
          <Container className=" pl-6 sm:pl-6 xl:pl-6 ">
            <section className="  ">
              <div className="mb-4 py-8">
                <Swiper spaceBetween={0} slidesPerView={"auto"} loop freeMode>
                  {quotes.map((quote) => (
                    <SwiperSlide className="!flex-shrink" key={quote.symbol}>
                      <Quote quote={quote} key={quote.symbol} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="relative mb-4 h-[170px] w-full lg:mb-12">
                <Image
                  src={"/images/ad1.png"}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </section>

            <section className=" grid grid-cols-[1fr,auto] grid-rows-[auto,auto,auto] gap-x-10 gap-y-6 xl:grid-cols-[auto,auto,auto] xl:grid-rows-1 ">
              <div className=" col-start-1 space-y-3 ">
                <div className=" text-3xl font-bold ">Apple INC</div>
                <div className=" text-sm ">
                  NasdaqCM - NasdaqCM Real Time Price. Currency in USD
                </div>
              </div>

              <div className=" col-span-full row-start-2 grid w-full grid-cols-[auto,auto,auto] xl:col-span-1 xl:col-start-2 xl:row-start-1 ">
                <div className=" space-y-1 md:space-y-3 ">
                  <div className=" flex flex-wrap items-center space-x-1.5 ">
                    <span className=" text-base font-bold md:text-3xl ">
                      19.88
                    </span>
                    <span className=" text-xs font-bold text-[#079516] md:text-lg ">
                      +1.59 (+8.69%)
                    </span>
                  </div>

                  <div className=" text-xs text-gray-400 md:text-sm ">
                    At close: December 18 04:00 PM EST
                  </div>
                </div>

                <Separator orientation="vertical" className=" mx-4 h-full " />

                <div className=" space-y-1 md:space-y-3 ">
                  <div className=" flex flex-wrap items-center space-x-1.5 ">
                    <span className=" text-base font-bold md:text-3xl ">
                      20.56
                    </span>
                    <span className=" text-xs font-bold text-red-500 md:text-lg ">
                      +0.68 (+3.42%)
                    </span>
                  </div>

                  <div className=" text-xs text-gray-400 md:text-sm ">
                    At close: December 18 04:00 PM EST
                  </div>
                </div>
              </div>

              <div className=" row-start-3 sm:col-start-2 sm:row-start-1 xl:col-start-3 ">
                <Button
                  variant={"ghost"}
                  size={"lg"}
                  className=" gap-x-1.5 px-3 text-sm "
                >
                  <RiStarSLine className=" size-6" />
                  <span className="  ">Add to Favourite</span>
                </Button>
              </div>
            </section>

            <section className="  ">{children}</section>
          </Container>
        </main>
      </Container>
    </section>
  );
}

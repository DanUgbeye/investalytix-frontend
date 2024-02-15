import { Quote } from "@/app/page";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Quote as TQuote } from "@/features/market/market.types";
import { cn } from "@/lib/utils";
import quotes from "@/mock/quotes";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { RiStarSLine } from "react-icons/ri";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import TickerSideNav from "../../components/ticker-sidenav";

export interface SearchTickerLayoutProps extends HTMLAttributes<HTMLElement> {
  ticker: string;
  isLoading: boolean;
  data?: TQuote;
}

export default function SearchTickerLayout(props: SearchTickerLayoutProps) {
  const { data, isLoading, className, children, ticker, ...rest } = props;

  return (
    <section {...rest} className={cn("  ", className)}>
      <Container className=" relative grid min-h-[calc(100dvh-5rem)] max-w-[110rem] grid-cols-1 grid-rows-1 p-0 sm:p-0 xl:p-0 ">
        <TickerSideNav
          loading={isLoading}
          quote={data}
          ticker={ticker}
          className=" top-0 col-start-1 row-start-1 w-[15rem] "
        />

        <main className=" col-start-1 row-start-1 ml-[15rem] ">
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

            <section className=" grid grid-cols-[1fr,auto] grid-rows-2 gap-x-10 gap-y-6 xl:grid-cols-[auto,auto,auto] xl:grid-rows-1 ">
              <div className=" col-start-1 space-y-3 ">
                <div className=" text-3xl font-bold ">Apple INC</div>
                <div className=" text-sm ">
                  NasdaqCM - NasdaqCM Real Time Price. Currency in USD
                </div>
              </div>

              <div className=" col-span-full row-start-2 flex xl:col-span-1 xl:col-start-2 xl:row-start-1 ">
                <div className=" space-y-3 ">
                  <div className=" flex items-center space-x-1.5 ">
                    <span className=" text-3xl font-bold ">19.88</span>
                    <span className=" text-lg font-bold text-[#079516] ">
                      +1.59 (+8.69%)
                    </span>
                  </div>

                  <div className=" text-sm text-gray-400 ">
                    At close: December 18 04:00 PM EST
                  </div>
                </div>

                <Separator orientation="vertical" className=" mx-4 h-full " />

                <div className=" space-y-3 ">
                  <div className=" flex items-center space-x-1.5 ">
                    <span className=" text-3xl font-bold ">20.56</span>
                    <span className=" text-lg font-bold text-red-500 ">
                      +0.68 (+3.42%)
                    </span>
                  </div>

                  <div className=" text-sm text-gray-400 ">
                    At close: December 18 04:00 PM EST
                  </div>
                </div>
              </div>

              <div className=" col-start-2 row-start-1 xl:col-start-3 ">
                <Button
                  variant={"ghost"}
                  size={"lg"}
                  className=" gap-x-1.5 text-sm border-b "
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

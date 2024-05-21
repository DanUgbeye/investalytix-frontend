"use client";

import { Container } from "@/components/container";
import ColoredNumber from "@/components/ui/ColoredNumber";
import QuotesBoard from "@/components/ui/QuotesBoard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  DesktopTickerNav,
  MobileTickerNav,
} from "@/modules/ticker/components/ticker-nav";
import { CompanyOutlook } from "@/modules/ticker/types";
import { Quote } from "@/types";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import { HTMLAttributes } from "react";
import { RiStarSLine } from "react-icons/ri";
import "swiper/css";

export interface TickerLayoutProps extends HTMLAttributes<HTMLElement> {
  ticker: string;
  data: { quote: Quote; outlook: CompanyOutlook };
}

export default function TickerLayout(props: TickerLayoutProps) {
  const { className, children, ticker, data, ...rest } = props;

  return (
    <section {...rest} className={cn("  ", className)}>
      <Container className=" grid min-h-[calc(100dvh-5rem)] max-w-[110rem] grid-cols-1 grid-rows-[auto,1fr] p-0 sm:p-0 md:grid-rows-1 xl:p-0 ">
        <DesktopTickerNav
          quote={data.quote}
          ticker={ticker}
          className=" sticky top-[88px] col-start-1 row-start-1 mb-8 hidden h-[calc(100dvh-88px)] w-[15rem] overflow-y-auto lg:flex "
        />

        <MobileTickerNav
          ticker={ticker}
          className=" sticky top-[85px] z-40 flex md:top-[89px] lg:hidden "
        />

        <main className=" col-start-1 lg:row-start-1 lg:ml-[15rem] ">
          <Container className=" lg:pl-6 xl:pl-6 ">
            <QuotesBoard />

            <section className=" grid grid-rows-[auto,auto,auto] gap-x-10 gap-y-6 sm:grid-cols-[1fr,auto] sm:grid-rows-1 xl:grid-cols-[auto,1fr,auto] ">
              <div className=" col-start-1 space-y-3 ">
                <div className=" text-3xl font-bold ">
                  {data.quote.name}
                </div>

                <div className=" text-sm ">{data.outlook.profile.exchange}</div>
              </div>

              <div className=" col-span-full row-start-2 grid w-full grid-cols-[auto,auto,auto] xl:col-span-1 xl:col-start-2 xl:row-start-1 ">
                <div className=" space-y-1 md:space-y-3 ">
                  <div className=" flex flex-wrap items-center space-x-1.5 ">
                    <span className=" text-base font-bold md:text-3xl ">
                      {appUtils.formatCurrency(data.quote.open || undefined)}
                    </span>

                    <span className=" text-xs font-bold md:text-lg ">
                      {data.quote.change && (
                        <>
                          {data.quote.change > 0 && "+"}
                          <ColoredNumber number={data.quote.change} />
                        </>
                      )}{" "}
                      (
                      {data.quote.changesPercentage && (
                        <>
                          {data.quote.changesPercentage > 0 && "+"}
                          <ColoredNumber
                            percent
                            number={Number(
                              data.quote.changesPercentage.toFixed(2)
                            )}
                          />
                        </>
                      )}
                      )
                    </span>
                  </div>

                  {data.quote.timestamp && (
                    <div className=" text-xs text-main-gray-400 md:text-sm ">
                      At close:{" "}
                      {format(
                        new Date(data.quote.timestamp),
                        "MMMM dd hh:mm a"
                      )}
                    </div>
                  )}
                </div>

                {/* <Separator orientation="vertical" className=" mx-4 h-full " />

                <div className=" space-y-1 md:space-y-3 ">
                  <div className=" flex flex-wrap items-center space-x-1.5 ">
                    <span className=" text-base font-bold md:text-3xl ">
                      {appUtils.formatCurrency(data.quote.dayLow || undefined)}
                    </span>

                    <span className=" text-xs font-bold md:text-lg ">
                      {data.quote.change && (
                        <>
                          {data.quote.change > 0 && "+"}
                          <ColoredNumber number={data.quote.change} />
                        </>
                      )}{" "}
                      (
                      {data.quote.changesPercentage && (
                        <>
                          {data.quote.changesPercentage > 0 && "+"}
                          <ColoredNumber
                            percent
                            number={Number(
                              data.quote.changesPercentage.toFixed(2)
                            )}
                          />
                        </>
                      )}
                      )
                    </span>
                  </div>

                  {data.quote.timestamp && (
                    <div className=" text-xs text-main-gray-400 md:text-sm ">
                      At close:{" "}
                      {format(
                        new Date(data.quote.timestamp),
                        "MMMM dd hh:mm a"
                      )}
                    </div>
                  )}
                </div> */}
              </div>

              <div className=" row-start-3 sm:col-start-2 sm:row-start-1 xl:col-start-3 ">
                <Button
                  variant={"outline"}
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

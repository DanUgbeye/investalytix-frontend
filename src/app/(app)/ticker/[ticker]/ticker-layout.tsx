"use client";

import { Container } from "@/components/container";
import ColoredNumber from "@/components/ui/ColoredNumber";
import QuotesBoard from "@/components/ui/QuotesBoard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { QUERY_KEYS } from "@/data/query-keys";
import { cn } from "@/lib/utils";
import {
  DesktopTickerNav,
  MobileTickerNav,
} from "@/modules/ticker/components/ticker-nav";
import { useTickerRepository } from "@/modules/ticker/hooks";
import { CompanyOutlook } from "@/modules/ticker/types";
import { Quote } from "@/types";
import appUtils from "@/utils/app-util";
import { useInViewport } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { HTMLAttributes } from "react";
import { RiStarSLine } from "react-icons/ri";
import "swiper/css";

export interface TickerLayoutProps extends HTMLAttributes<HTMLElement> {
  ticker: string;
  quote: Quote;
  outlook: CompanyOutlook;
  currency: string;
}

export default function TickerLayout(props: TickerLayoutProps) {
  const { className, children, ticker, quote, outlook, currency, ...rest } =
    props;
  const tickerRepo = useTickerRepository();
  const { ref, inViewport } = useInViewport();

  const { data: tickerQuote } = useQuery({
    queryKey: [QUERY_KEYS.GET_TICKER_QUOTE, ticker],
    queryFn: ({ signal }) => tickerRepo.getQuote(ticker, { signal }),
    initialData: quote,
    refetchInterval: 10_000,
  });

  return (
    <section {...rest} className={cn(" ", className)}>
      <Container className=" px-0 sm:px-0 sm:pb-8 xl:px-0 ">
        <QuotesBoard />

        <section
          id={"ticker-stats"}
          className=" flex flex-col gap-5 px-6 sm:grid sm:grid-cols-[auto,1fr] md:grid-cols-[auto,1fr,auto] md:grid-rows-[auto,auto] md:gap-x-8 "
        >
          <Avatar className="hidden size-20 place-items-center bg-main-gray-200/40 p-2 sm:grid md:row-span-full md:size-40 md:p-6 dark:bg-main-gray-800 ">
            <AvatarImage
              src={outlook.profile.image}
              className=" h-full w-full p-2 "
            />

            <AvatarFallback className=" grid h-full w-full bg-transparent p-2 text-2xl font-bold dark:bg-transparent ">
              <span className=" truncate ">{outlook.profile.symbol}</span>
            </AvatarFallback>
          </Avatar>

          <div
            ref={ref}
            className=" col-span-2 col-start-1 space-y-2 sm:col-start-2 lg:col-span-1 "
          >
            <div className=" text-3xl font-bold md:text-4xl ">
              {tickerQuote.name}
            </div>

            <div className=" flex w-fit flex-wrap items-center gap-2 rounded-lg bg-main-gray-200/40 px-4 py-2 text-sm font-medium dark:bg-main-gray-800 ">
              <span className="  ">{outlook.profile.symbol}</span>
              <span className=" size-1 rounded-full bg-primary-base " />
              <span className="  ">{outlook.profile.exchange}</span>
            </div>
          </div>

          <div className="  col-span-2 col-start-1 row-start-2 grid w-full grid-cols-[auto,auto,auto] md:col-start-2 md:row-start-2 ">
            <div className=" space-y-1 md:space-y-3 ">
              <div className=" flex flex-wrap items-end space-x-1.5 ">
                <span className=" text-3xl font-semibold md:text-5xl ">
                  {appUtils.formatNumber(tickerQuote.price || undefined, {
                    currency,
                  })}
                </span>

                <span className=" flex items-center gap-2 text-base font-bold md:text-lg ">
                  {tickerQuote.change && (
                    <div>
                      {tickerQuote.change > 0 && "+"}
                      <ColoredNumber
                        number={Number(tickerQuote.change.toFixed(2))}
                      />
                    </div>
                  )}

                  {tickerQuote.changesPercentage && (
                    <div>
                      {tickerQuote.changesPercentage > 0 && "+"}
                      <ColoredNumber
                        percent
                        number={Number(
                          tickerQuote.changesPercentage.toFixed(2)
                        )}
                      />
                    </div>
                  )}
                </span>
              </div>

              {tickerQuote.timestamp && (
                <div className=" text-sm text-main-gray-400 ">
                  At close:{" "}
                  {format(
                    new Date(tickerQuote.timestamp * 1000),
                    "MMMM dd hh:mm a"
                  )}
                </div>
              )}
            </div>

            {/* <Separator orientation="vertical" className=" mx-4 h-full " />

            <div className=" space-y-1 md:space-y-3 ">
              <div className=" flex flex-wrap items-center space-x-1.5 ">
                <span className=" text-base font-bold md:text-3xl ">
                  {appUtils.formatNumber(tickerQuote.dayLow || undefined)}
                </span>

                <span className=" text-xs font-bold md:text-lg ">
                  {tickerQuote.change && (
                    <>
                      {tickerQuote.change > 0 && "+"}
                      <ColoredNumber number={tickerQuote.change} />
                    </>
                  )}{" "}
                  (
                  {tickerQuote.changesPercentage && (
                    <>
                      {tickerQuote.changesPercentage > 0 && "+"}
                      <ColoredNumber
                        percent
                        number={Number(
                          tickerQuote.changesPercentage.toFixed(2)
                        )}
                      />
                    </>
                  )}
                  )
                </span>
              </div>

              {tickerQuote.timestamp && (
                <div className=" text-xs text-main-gray-400 md:text-sm ">
                  At close:{" "}
                  {format(
                    new Date(tickerQuote.timestamp),
                    "MMMM dd hh:mm a"
                  )}
                </div>
              )}
            </div> */}
          </div>

          <div className=" col-start-3 row-start-2 lg:row-span-2 lg:row-start-1 lg:my-auto">
            <Button
              variant={"outline"}
              size={"lg"}
              className=" gap-x-1.5 px-3 text-base "
            >
              <RiStarSLine className=" size-6" />
              <span className="  ">Add to Favourite</span>
            </Button>
          </div>
        </section>
      </Container>

      <Container className=" grid min-h-[calc(100dvh-5rem)] grid-cols-1 grid-rows-[auto,1fr] px-0 pt-8 sm:px-0 md:grid-rows-1 xl:px-0 ">
        <DesktopTickerNav
          quote={tickerQuote}
          statsVisible={inViewport}
          ticker={ticker}
          className=" sticky top-[88px] col-start-1 row-start-1 mb-8 hidden h-fit max-h-[calc(100dvh-5rem)] w-[18rem] overflow-y-auto lg:flex "
        />

        <MobileTickerNav
          quote={tickerQuote}
          statsVisible={inViewport}
          ticker={ticker}
          className=" sticky top-[84px] z-40 flex h-fit md:top-[88px] lg:hidden "
        />

        <main className=" col-start-1 lg:row-start-1 lg:ml-[18rem] ">
          <Container className=" lg:px-10 xl:px-10 ">
            <section className="  ">{children}</section>
          </Container>
        </main>
      </Container>
    </section>
  );
}

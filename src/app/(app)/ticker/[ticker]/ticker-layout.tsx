"use client";

import ColoredText from "@/components/colored-text";
import { Container } from "@/components/container";
import Spinner from "@/components/spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { clientAPI } from "@/config/client/api";
import { QUERY_KEYS } from "@/data/query-keys";
import { cn } from "@/lib/utils";
import { MarketRepository } from "@/modules/market/repository";
import { SUBSCRIPTION_TYPE } from "@/modules/socket/types";
import {
  DesktopTickerNav,
  MobileTickerNav,
} from "@/modules/ticker/components/ticker-nav";
import { useTickerRepository } from "@/modules/ticker/hooks";
import { CompanyOutlook } from "@/modules/ticker/types";
import WatchlistRepository from "@/modules/watchlist/repository";
import { NewWatchlist } from "@/modules/watchlist/types";
import { useAppStore } from "@/store";
import { Quote, StockSocketData } from "@/types";
import appUtils from "@/utils/app-util";
import { useDebouncedCallback, useInViewport } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { HTMLAttributes, useEffect, useMemo, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";
import "swiper/css";

export interface TickerLayoutProps extends HTMLAttributes<HTMLElement> {
  ticker: string;
  quote: Quote;
  outlook: CompanyOutlook;
  currency?: string;
}

export default function TickerLayout(props: TickerLayoutProps) {
  const { className, children, ticker, quote, outlook, currency, ...rest } =
    props;
  const watchlistRepo = new WatchlistRepository(clientAPI);
  const marketRepo = new MarketRepository(clientAPI);
  const socketService = useAppStore(({ socketService }) => socketService);
  const watchlist = useAppStore(({ watchlist }) => watchlist);
  const isAuthenticated = useAppStore(({ auth }) => auth !== undefined);
  const {
    addToWatchList: addToWatchListStore,
    removeFromWatchlist: removeFromWatchListStore,
    toggleLoginModal,
  } = useAppStore();
  const tickerRepo = useTickerRepository();
  const { ref, inViewport } = useInViewport();
  const [isLoading, setIsLoading] = useState(false);

  const isSavedToWatchlist = useMemo(() => {
    return (
      watchlist.find(
        (wt) => wt.symbol.toLowerCase() === ticker.toLowerCase()
      ) !== undefined
    );
  }, [watchlist]);

  const { data: isMarketOpen } = useQuery({
    enabled: quote !== undefined,
    queryKey: [QUERY_KEYS.IS_MARKET_OPEN, ticker],
    queryFn: ({ signal }) =>
      marketRepo.isStockMarketOpen(quote.exchange || "", { signal }),
    refetchInterval: 60_000 + Math.floor(Math.random() * 5_000),
  });

  const { data: afterMarketQuoteData } = useQuery({
    enabled: isMarketOpen !== undefined && !isMarketOpen.isTheStockMarketOpen,
    queryKey: [QUERY_KEYS.AFTER_MARKET_QUOTE, ticker],
    queryFn: ({ signal }) => tickerRepo.getAfterMarketQuote(ticker, { signal }),
    refetchInterval: (query) => {
      const {
        state: { fetchFailureCount, fetchFailureReason },
      } = query;

      if (
        fetchFailureCount >= 2 &&
        fetchFailureReason?.message.toLowerCase().includes("not found")
      ) {
        // stop fetching after 2 tries and response is not found
        return false;
      }
      return 5_000 + Math.floor(Math.random() * 5_000);
    },
  });

  // const { data: tickerQuote } = useQuery({
  //   enabled:
  //     isMarketOpen !== undefined ? isMarketOpen.isTheStockMarketOpen : true,
  //   queryKey: [QUERY_KEYS.GET_TICKER_QUOTE, ticker],
  //   queryFn: ({ signal }) => tickerRepo.getQuote(ticker, { signal }),
  //   initialData: quote,
  //   refetchInterval: 5_000 + Math.floor(Math.random() * 5_000),
  // });

  const [tickerQuote, setTickerQuote] = useState(quote);

  const afterMarketQuote = useMemo(() => {
    if (isMarketOpen?.isTheStockMarketOpen || !afterMarketQuoteData) {
      return undefined;
    }
    let originalPrice = (quote.price || 0) - (quote.change || 0);
    let currentPrice =
      (afterMarketQuoteData.ask + afterMarketQuoteData.bid) / 2;
    let change = currentPrice - originalPrice;
    let changePercentage = (change / originalPrice) * 100;

    return {
      price: currentPrice,
      change: change,
      changesPercentage: changePercentage,
      timestamp: afterMarketQuoteData.timestamp,
    };
  }, [afterMarketQuoteData, quote, isMarketOpen]);

  async function addToWatchList() {
    try {
      if (!outlook) return;

      if (!isAuthenticated) {
        return toggleLoginModal();
      }

      setIsLoading(true);

      const watchlistData: NewWatchlist = {
        stockExchange: outlook.profile.exchange,
        name: outlook.profile.companyName || "",
        symbol: outlook.profile.symbol,
        exchangeShortName: outlook.profile.exchangeShortName || "",
        currency: outlook.profile.currency || "",
        industry: outlook.profile.industry || "",
        sector: outlook.profile.sector || "",
      };

      const watchlist = await watchlistRepo.addToWatchlist(watchlistData);
      addToWatchListStore(watchlist);
      toast.success("added to watchlist");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function removeFromWatchList() {
    try {
      if (!isAuthenticated) {
        return toggleLoginModal();
      }

      const savedEntry = watchlist.find(
        (wt) => wt.symbol.toLowerCase() === ticker.toLowerCase()
      );
      if (!savedEntry) return;
      setIsLoading(true);

      await watchlistRepo.removeFromWatchlist(savedEntry.id);
      removeFromWatchListStore(savedEntry.id);
      toast.success("removed from watchlist");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSocketUpdate = useDebouncedCallback((data: StockSocketData) => {
    setTickerQuote((prev) => {
      let update = { ...prev };

      if (data.lp) {
        update.price = data.lp;
      } else if (!data.lp) {
        if (data.ap && data.bp) {
          update.price = (data.ap + data.bp) / 2;
        }
      }

      if (prev.price !== update.price) {
        let originalPrice = (prev.price || 0) - (prev.change || 0);
        let currentPrice = update.price;
        update.change = (currentPrice || 0) - originalPrice;
        update.changesPercentage = (update.change / originalPrice) * 100;
      }

      if (data.t) {
        update.timestamp = Math.floor(data.t / 1_000_000_000);
      }

      return update;
    });
  }, 1_500);

  useEffect(() => {
    if (
      isMarketOpen === undefined ||
      (isMarketOpen && isMarketOpen.isTheStockMarketOpen)
    ) {
      console.log("subscribed to ticker", ticker);
      socketService.subscribe(
        SUBSCRIPTION_TYPE.STOCK,
        ticker,
        handleSocketUpdate
      );
    }

    return () => {
      console.log("unsubscribed to ticker", ticker);
      socketService.unsubscribe(
        SUBSCRIPTION_TYPE.STOCK,
        ticker,
        handleSocketUpdate
      );
    };
  }, [isMarketOpen, ticker]);

  return (
    <section {...rest} className={cn(" ", className)}>
      <Container className="px-0 sm:px-0 sm:pb-8 xl:px-0">
        <section
          id={"ticker-stats"}
          className="flex flex-col gap-5 px-6 sm:grid sm:grid-cols-[auto,1fr] md:grid-cols-[auto,1fr,auto] md:grid-rows-[auto,auto] md:gap-x-8"
        >
          <Avatar className="hidden size-20 place-items-center bg-main-gray-200/40 p-2 sm:grid md:row-span-full md:size-40 md:p-6 dark:bg-main-gray-800">
            <AvatarImage
              src={outlook.profile.image || undefined}
              className="h-full w-full p-2"
            />

            <AvatarFallback className="grid h-full w-full bg-transparent p-2 text-2xl font-bold dark:bg-transparent">
              <span className="truncate">{outlook.profile.symbol}</span>
            </AvatarFallback>
          </Avatar>

          <div
            ref={ref}
            className="col-span-2 col-start-1 space-y-2 sm:col-start-2 lg:col-span-1"
          >
            <div className="text-3xl font-bold md:text-4xl">
              {tickerQuote.name}
            </div>

            <div className="flex w-fit flex-wrap items-center gap-2 rounded-lg bg-main-gray-200/40 px-4 py-2 text-sm font-medium dark:bg-main-gray-800">
              <span className=" ">{outlook.profile.symbol}</span>
              <span className="size-1 rounded-full bg-primary-base" />
              <span className=" ">{outlook.profile.exchange}</span>
            </div>
          </div>

          <div className="col-span-2 col-start-1 row-start-2 flex w-full flex-wrap items-end gap-5 md:col-span-1 md:col-start-2 md:row-start-2">
            <div className="space-y-1 md:space-y-1">
              <div className="flex flex-wrap items-end space-x-1.5">
                <span className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  {appUtils.formatNumber(tickerQuote.price || undefined, {
                    currency,
                  })}
                </span>

                <span className="flex items-center gap-2 text-sm font-bold sm:text-base lg:text-lg">
                  {tickerQuote.change && (
                    <ColoredText
                      isPositive={() => {
                        if (!tickerQuote.change) return undefined;
                        if (tickerQuote.change > 0) return true;
                        if (tickerQuote.change < 0) return false;
                        return undefined;
                      }}
                    >
                      {tickerQuote.change > 0 && "+"}
                      {appUtils.formatNumber(tickerQuote.change, {
                        style: "decimal",
                      })}
                    </ColoredText>
                  )}

                  {tickerQuote.changesPercentage && (
                    <ColoredText
                      isPositive={() => {
                        if (!tickerQuote.changesPercentage) return undefined;
                        if (tickerQuote.changesPercentage > 0) return true;
                        if (tickerQuote.changesPercentage < 0) return false;
                        return undefined;
                      }}
                    >
                      {tickerQuote.changesPercentage > 0 && "+"}
                      {appUtils.formatNumber(tickerQuote.changesPercentage, {
                        style: "decimal",
                      })}
                      %
                    </ColoredText>
                  )}
                </span>
              </div>

              {tickerQuote.timestamp && (
                <div className="text-sm text-main-gray-400">
                  At close:{" "}
                  {format(
                    new Date(tickerQuote.timestamp * 1000),
                    "MMM dd hh:mm a"
                  )}
                </div>
              )}
            </div>

            {/* if stock market is closed */}
            {afterMarketQuote && (
              <div className="space-y-1 md:space-y-1">
                <div className="flex flex-wrap items-end space-x-1.5">
                  <span className="text-xl font-semibold sm:text-3xl lg:text-4xl">
                    {appUtils.formatNumber(
                      afterMarketQuote.price || undefined,
                      { currency }
                    )}
                  </span>

                  <span className="flex items-center gap-2 text-sm font-bold lg:text-base">
                    {afterMarketQuote.change && (
                      <ColoredText
                        isPositive={() => {
                          if (!afterMarketQuote.change) return undefined;
                          if (afterMarketQuote.change > 0) return true;
                          if (afterMarketQuote.change < 0) return false;
                          return undefined;
                        }}
                      >
                        {afterMarketQuote.change > 0 && "+"}
                        {appUtils.formatNumber(afterMarketQuote.change, {
                          style: "decimal",
                        })}
                      </ColoredText>
                    )}

                    {afterMarketQuote.changesPercentage && (
                      <ColoredText
                        isPositive={() => {
                          if (!afterMarketQuote.changesPercentage)
                            return undefined;
                          if (afterMarketQuote.changesPercentage > 0)
                            return true;
                          if (afterMarketQuote.changesPercentage < 0)
                            return false;
                          return undefined;
                        }}
                      >
                        {afterMarketQuote.changesPercentage > 0 && "+"}
                        {appUtils.formatNumber(
                          afterMarketQuote.changesPercentage,
                          { style: "decimal" }
                        )}
                        %
                      </ColoredText>
                    )}
                  </span>
                </div>

                {afterMarketQuote.timestamp && (
                  <div className="text-xs text-main-gray-400">
                    After Market:{" "}
                    {format(
                      new Date(afterMarketQuote.timestamp),
                      "MMM dd hh:mm a"
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="col-start-2 row-start-3 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:my-auto">
            {isSavedToWatchlist ? (
              <Button
                variant={"outline"}
                size={"lg"}
                disabled={isLoading}
                className="gap-x-1.5 px-3 text-base"
                onClick={removeFromWatchList}
              >
                {!isLoading ? (
                  <FaStar className="size-5 fill-yellow-500" />
                ) : (
                  <Spinner className="size-5" />
                )}
                <span className=" ">Saved</span>
              </Button>
            ) : (
              <Button
                variant={"outline"}
                size={"lg"}
                disabled={isLoading}
                className="gap-x-2 px-3 text-base"
                onClick={addToWatchList}
              >
                {!isLoading ? (
                  <FaRegStar className="size-5" />
                ) : (
                  <Spinner className="size-5" />
                )}
                <span className=" ">Add to Watchlist</span>
              </Button>
            )}
          </div>
        </section>
      </Container>

      <Container className="flex min-h-[calc(100dvh-5rem)] grid-cols-1 flex-col px-0 pt-8 sm:px-0 lg:grid lg:grid-rows-1 xl:px-0">
        <DesktopTickerNav
          quote={tickerQuote}
          afterMarketQuote={afterMarketQuote}
          statsVisible={inViewport}
          ticker={ticker}
          className="sticky top-[88px] col-start-1 row-start-1 mb-8 hidden h-fit max-h-[calc(100dvh-5rem)] w-[18rem] overflow-y-auto lg:flex"
        />

        <MobileTickerNav
          quote={tickerQuote}
          afterMarketQuote={afterMarketQuote}
          statsVisible={inViewport}
          ticker={ticker}
          className="sticky top-[84px] z-40 flex h-fit md:top-[88px] lg:hidden dark:border-y dark:border-main-gray-700"
        />

        <section className="col-start-1 lg:row-start-1 lg:ml-[18rem]">
          <Container className="lg:px-10 xl:px-10">
            <div className=" ">{children}</div>
          </Container>
        </section>
      </Container>
    </section>
  );
}

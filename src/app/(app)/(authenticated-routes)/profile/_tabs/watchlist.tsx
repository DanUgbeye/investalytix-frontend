"use client";

import ColoredText from "@/components/colored-text";
import Spinner from "@/components/spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { clientAPI } from "@/config/client/api";
import { QUERY_KEYS } from "@/data/query-keys";
import useExecuteOnce from "@/hooks/use-execute-once";
import { cn } from "@/lib/utils";
import { TickerRepository } from "@/modules/ticker/repository";
import tickerUtils from "@/modules/ticker/utils";
import WatchlistRepository from "@/modules/watchlist/repository";
import { Watchlist } from "@/modules/watchlist/types";
import { getTickerStockDescriptionRoute } from "@/route";
import { useAppStore } from "@/store";
import { Quote } from "@/types";
import appUtils from "@/utils/app-util";
import { useQuery } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

export default function WatchlistTab() {
  const user = useAppStore(({ user }) => user);
  const watchlist = useAppStore(({ watchlist }) => watchlist);
  const { setWatchlist } = useAppStore();
  const { executeOnce, reset } = useExecuteOnce();
  const tickerRepo = useMemo(() => new TickerRepository(clientAPI), []);
  const watchlistRepo = useMemo(() => new WatchlistRepository(clientAPI), []);
  const [watchlistQuotes, setWatchlistQuotes] = useState<
    (Watchlist & { quote: Quote })[]
  >([]);
  const [deletingWatclistIds, setDeletingWatclistIds] = useState<string[]>([]);

  const { data, isLoading, error } = useQuery({
    enabled: user !== undefined,
    queryKey: [QUERY_KEYS.GET_WATCHLIST, user?.id],
    queryFn: ({ signal }) => {
      return watchlistRepo
        .getUserWatchlist({
          signal,
        })
        .then(async (savedWatchlists) => {
          setWatchlist(savedWatchlists);
          const quotes = await Promise.all(
            savedWatchlists.map((wl) =>
              tickerRepo
                .getQuote(wl.symbol, { signal })
                .then((quote) => ({ ...wl, quote }))
            )
          );
          return quotes;
        });
    },
    // refetchInterval: false,
  });

  async function handleDeleteWatchlist(watchlistId: string) {
    if (deletingWatclistIds.includes(watchlistId)) {
      return;
    }

    try {
      setDeletingWatclistIds((prev) => Array.from([...prev, watchlistId]));
      await watchlistRepo.removeFromWatchlist(watchlistId);
      setWatchlistQuotes((prev) =>
        prev.filter((wlQuote) => wlQuote.id !== watchlistId)
      );
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setDeletingWatclistIds((prev) => prev.filter((id) => id !== watchlistId));
    }
  }

  useEffect(() => {
    executeOnce(() => {
      if (data) {
        setWatchlistQuotes(data);
      }
    });

    return reset;
  }, [data]);

  return (
    <section>
      {isLoading ? (
        <center className="py-5">
          <Spinner />
        </center>
      ) : (
        <>
          {watchlistQuotes.length > 0 ? (
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow headerRow>
                    <TableHead>Symbol</TableHead>

                    <TableHead>Exchange</TableHead>

                    <TableHead className="text-left">Sector</TableHead>

                    <TableHead className="">Price</TableHead>

                    <TableHead className="">Change</TableHead>

                    <TableHead className="">Change %</TableHead>

                    <TableHead className="text-right">Market Cap</TableHead>

                    <TableHead className="text-right"></TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {watchlistQuotes.map((wlQuote) => {
                    const isDeleting = deletingWatclistIds.includes(wlQuote.id);

                    return (
                      <TableRow
                        key={wlQuote.symbol}
                        className={cn({
                          "pointer-events-none opacity-50": isDeleting,
                        })}
                      >
                        <TableCell className="whitespace-nowrap">
                          <div className="flex items-center gap-4">
                            <Avatar className="size-10 rounded-full bg-main-gray-200/50 p-2 text-xxs dark:bg-main-gray-800">
                              <AvatarImage
                                crossOrigin="anonymous"
                                className="rounded-full"
                                src={tickerUtils.getTickerLogoUrl(
                                  wlQuote.symbol
                                )}
                              />

                              <AvatarFallback className="truncate bg-transparent p-2">
                                {wlQuote.symbol.slice(0, 4)}
                              </AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col space-y-1">
                              <Link
                                href={getTickerStockDescriptionRoute(
                                  wlQuote.symbol
                                )}
                                className="w-fit text-base font-semibold text-[#125BD4] underline-offset-2 hover:underline"
                              >
                                {wlQuote.symbol}
                              </Link>

                              <span className="text-sm font-semibold">
                                {wlQuote.name}
                              </span>
                            </div>
                          </div>
                        </TableCell>

                        <TableCell className="">
                          {wlQuote.quote?.exchange}
                        </TableCell>

                        <TableCell className="text-left">
                          {wlQuote.sector}
                        </TableCell>

                        <TableCell className="">
                          {wlQuote.quote.price}
                        </TableCell>

                        <TableCell className="">
                          <ColoredText
                            isPositive={() => {
                              if (!wlQuote.quote.change) return undefined;
                              if (wlQuote.quote.change > 0) return true;
                              if (wlQuote.quote.change < 0) return false;
                              return undefined;
                            }}
                          >
                            {wlQuote.quote.change
                              ? `${wlQuote.quote.change}`
                              : "-"}
                          </ColoredText>
                        </TableCell>

                        <TableCell className="">
                          <ColoredText
                            isPositive={() => {
                              if (!wlQuote.quote.changesPercentage)
                                return undefined;
                              if (wlQuote.quote.changesPercentage > 0)
                                return true;
                              if (wlQuote.quote.changesPercentage < 0)
                                return false;
                              return undefined;
                            }}
                          >
                            {wlQuote.quote.changesPercentage
                              ? `${wlQuote.quote.changesPercentage}%`
                              : "-"}
                          </ColoredText>
                        </TableCell>

                        <TableCell className="text-right">
                          {appUtils.formatNumber(wlQuote.quote.marketCap, {
                            style: "decimal",
                            notation: "compact",
                          })}
                        </TableCell>

                        <TableCell className="text-right">
                          <Button
                            variant={"ghost"}
                            className="hover:bg-red-600 hover:text-white dark:hover:bg-red-600"
                            onClick={() => handleDeleteWatchlist(wlQuote.id)}
                          >
                            {isDeleting ? (
                              <Spinner className="size-4 text-inherit" />
                            ) : (
                              <Trash2 className="size-4" />
                            )}
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center text-2xl text-main-gray-300 dark:text-main-gray-600">
              You have no Watchlist
            </div>
          )}
        </>
      )}
    </section>
  );
}

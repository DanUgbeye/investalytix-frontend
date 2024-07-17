"use client";

import ColoredText from "@/components/colored-text";
import Spinner from "@/components/spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { TickerRepository } from "@/modules/ticker/repository";
import tickerUtils from "@/modules/ticker/utils";
import WatchlistRepository from "@/modules/watchlist/repository";
import { getTickerStockDescriptionRoute } from "@/route";
import { useAppStore } from "@/store";
import { Quote } from "@/types";
import appUtils from "@/utils/app-util";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function WatchlistTab() {
  const user = useAppStore(({ user }) => user);
  const watchlist = useAppStore(({ watchlist }) => watchlist);
  const { setWatchlist } = useAppStore();
  const { executeOnce, reset } = useExecuteOnce();
  const tickerRepo = useMemo(() => new TickerRepository(clientAPI), []);
  const watchlistRepo = useMemo(() => new WatchlistRepository(clientAPI), []);
  const [watchlistQuotes, setWatchlistQuotes] = useState<Quote[]>([]);

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
              tickerRepo.getQuote(wl.symbol, { signal })
            )
          );
          return quotes;
        });
    },
    refetchInterval: false,
  });

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
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow headerRow>
                <TableHead>Symbol</TableHead>

                <TableHead>Exchange</TableHead>

                <TableHead className="text-right">Price</TableHead>

                <TableHead className="text-right">Change</TableHead>

                <TableHead className="text-right">Change %</TableHead>

                <TableHead className="text-right">Market Cap</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {watchlistQuotes.map((quote) => {
                return (
                  <TableRow key={quote.symbol}>
                    <TableCell className="whitespace-nowrap">
                      <div className="flex items-center gap-4">
                        <Avatar className="size-10 rounded-full bg-main-gray-200/50 p-2 text-xxs dark:bg-main-gray-800">
                          <AvatarImage
                            crossOrigin="anonymous"
                            className="rounded-full"
                            src={tickerUtils.getTickerLogoUrl(quote.symbol)}
                          />

                          <AvatarFallback className="truncate bg-transparent p-2">
                            {quote.symbol.slice(0, 4)}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col space-y-1">
                          <Link
                            href={getTickerStockDescriptionRoute(quote.symbol)}
                            className="w-fit text-base font-semibold text-[#125BD4] underline-offset-2 hover:underline"
                          >
                            {quote.symbol}
                          </Link>

                          <span className="text-sm font-semibold">
                            {quote.name}
                          </span>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="">{quote.exchange}</TableCell>

                    <TableCell className="text-right">{quote.price}</TableCell>

                    <TableCell className="text-right">
                      <ColoredText
                        isPositive={() => {
                          if (!quote.change) return undefined;
                          if (quote.change > 0) return true;
                          if (quote.change < 0) return false;
                          return undefined;
                        }}
                      >
                        {quote.change ? `${quote.change}` : "-"}
                      </ColoredText>
                    </TableCell>

                    <TableCell className="text-right">
                      <ColoredText
                        isPositive={() => {
                          if (!quote.changesPercentage) return undefined;
                          if (quote.changesPercentage > 0) return true;
                          if (quote.changesPercentage < 0) return false;
                          return undefined;
                        }}
                      >
                        {quote.changesPercentage
                          ? `${quote.changesPercentage}%`
                          : "-"}
                      </ColoredText>
                    </TableCell>

                    <TableCell className="text-right">
                      {appUtils.formatNumber(quote.marketCap, {
                        style: "decimal",
                        notation: "compact",
                      })}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </section>
  );
}

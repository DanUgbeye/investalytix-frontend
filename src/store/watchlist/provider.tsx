"use client";

import { clientAPI } from "@/config/client/api";
import { QUERY_KEYS } from "@/data/query-keys";
import WatchlistRepository from "@/modules/watchlist/repository";
import { useQuery } from "@tanstack/react-query";
import React, { PropsWithChildren, useEffect } from "react";
import { useAppStore } from "..";

interface Props extends PropsWithChildren {}

export default function WatchlistProvider(props: Props) {
  const { children } = props;
  const { setWatchlist } = useAppStore();
  const isAuthenticated = useAppStore(({ auth }) => auth !== undefined);
  const watchlistRepo = new WatchlistRepository(clientAPI);

  const { data } = useQuery({
    enabled: isAuthenticated,
    queryKey: [QUERY_KEYS.GET_WATCHLIST],
    queryFn: ({ signal }) => watchlistRepo.getUserWatchlist({ signal }),
  });

  useEffect(() => {
    if (data) {
      setWatchlist(data);
    }
  }, [data]);

  return <>{children}</>;
}

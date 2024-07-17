"use client";

import { clientAPI } from "@/config/client/api";
import { QUERY_KEYS } from "@/data/query-keys";
import WatchlistRepository from "@/modules/watchlist/repository";
import { useQuery } from "@tanstack/react-query";
import React, { PropsWithChildren, useEffect, useMemo } from "react";
import { useAppStore } from "..";

interface Props extends PropsWithChildren {}

export default function WatchlistProvider(props: Props) {
  const { children } = props;
  const { setWatchlist } = useAppStore();
  const user = useAppStore(({ user }) => user);
  const isAuthenticated = useAppStore(({ auth }) => auth !== undefined);
  const watchlistRepo = useMemo(() => new WatchlistRepository(clientAPI), []);

  const { data } = useQuery({
    enabled: isAuthenticated,
    queryKey: [QUERY_KEYS.GET_WATCHLIST, user?.id],
    queryFn: ({ signal }) => watchlistRepo.getUserWatchlist({ signal }),
    refetchInterval: 180_000 + Math.floor(Math.random() * 120_000),
  });

  useEffect(() => {
    if (data) {
      setWatchlist(data);
    }
  }, [data]);

  return <>{children}</>;
}

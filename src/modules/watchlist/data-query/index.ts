import "server-only";

import { serverAPI } from "@/config/server/api";
import { RequestOptions } from "@/types";
import { cache } from "react";
import WatchlistRepository from "../repository";

export const getUserWatchlist = cache(async (options?: RequestOptions) => {
  const watchlistRepo = new WatchlistRepository(serverAPI);
  return await watchlistRepo.getUserWatchlist();
});

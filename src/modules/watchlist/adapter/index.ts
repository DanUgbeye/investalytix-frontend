import { ServerWatchlist, Watchlist } from "../types";

export function transformWatchlistToClient(data: ServerWatchlist): Watchlist;
export function transformWatchlistToClient(
  data: Partial<ServerWatchlist>
): Partial<Watchlist>;
export function transformWatchlistToClient(
  data: ServerWatchlist | Partial<ServerWatchlist>
): Watchlist | Partial<Watchlist> {
  const { _id, ...rest } = data;

  return {
    id: _id,
    ...rest,
  };
}

export function transformWatchlistToServer(data: ServerWatchlist): Watchlist;
export function transformWatchlistToServer(
  data: Partial<ServerWatchlist>
): Partial<Watchlist>;
export function transformWatchlistToServer(
  data: ServerWatchlist | Partial<ServerWatchlist>
): Watchlist | Partial<Watchlist> {
  const { _id, ...rest } = data;

  return {
    id: _id,
    ...rest,
  };
}

import { StateCreator } from "zustand";
import { AppStore } from "..";
import { Watchlist } from "@/modules/watchlist/types";
import { UserData } from "@/modules/user/types";

export type WatchlistState = {
  watchlist: Watchlist[];
};

export type WatchlistActions = {
  setWatchlist: (data: Watchlist[]) => void;
  addToWatchList: (data: Watchlist) => void;
  removeFromWatchlist: (watchlistId: string) => boolean;
  resetWatchlist: () => void;
};

export type WatchlistStore = WatchlistState & WatchlistActions;

export const createWatchlistStore: StateCreator<
  AppStore,
  [],
  [],
  WatchlistStore
> = (set, get) => ({
  watchlist: [],
  setWatchlist: (watchlist) => set({ watchlist }),
  addToWatchList: (newWatchlist) => {
    const { watchlist } = get();
    set({
      watchlist: [
        ...watchlist.filter((watchlist) => watchlist.id !== newWatchlist.id), //ensure no duplicate watchlist
        newWatchlist,
      ],
    });
  },
  removeFromWatchlist(watchlistId) {
    const { watchlist } = get();
    const found = watchlist.find((watchlist) => watchlist.id == watchlistId);
    set({
      watchlist: [
        ...watchlist.filter((watchlist) => watchlist.id !== watchlistId),
      ],
    });

    return found !== undefined;
  },
  resetWatchlist: () => set({ watchlist: [] }),
});

import { create } from "zustand";
import { AuthState, AuthStore, createAuthStore } from "./auth";
import { GeneralStore, createGeneralStore } from "./general";
import { NewsStore, createNewsStore } from "./news";
import { WatchlistStore, createWatchlistStore } from "./watchlist";

export type StoreInitialState = AuthState;

export type BaseStore = {
  initialised: boolean;
  initialiseStore: (state: StoreInitialState) => void;
  reset: () => void;
};

export type AppStore = BaseStore &
  AuthStore &
  GeneralStore &
  NewsStore &
  WatchlistStore;

export const useAppStore = create<AppStore>((...a) => ({
  ...{
    // BASE STORE
    initialised: false,
    initialiseStore(state) {
      const [set] = a;
      set({
        ...state,
        initialised: true,
      });
    },
    reset() {
      const [set] = a;
      set({
        auth: undefined,
        user: undefined,
        watchlist: [],
      });
    },
  },
  ...createGeneralStore(...a),
  ...createAuthStore(...a),
  ...createNewsStore(...a),
  ...createWatchlistStore(...a),
}));

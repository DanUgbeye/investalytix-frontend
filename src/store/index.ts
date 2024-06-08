import { create } from "zustand";
import { AuthState, AuthStore, createAuthStore } from "./auth";

export type Theme = "light" | "dark";

export type StoreInitialState = AuthState;

export type BaseStore = {
  initialised: boolean;
  initialiseStore: (state: StoreInitialState) => void;
  reset: () => void;
};

export type GeneralStore = {
  // SEARCH MODAL
  searchOpen: boolean;
  toggleSearch(state?: boolean): void;

  // THEME
  theme: Theme;
  toggleTheme(theme?: Theme): void;
};

export type AppStore = BaseStore & AuthStore & GeneralStore;

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
      });
    },

    // SEARCH MODAL
    searchOpen: false,
    toggleSearch(state) {
      const [set, get] = a;
      const newState = state !== undefined ? state : !get().searchOpen;
      set({ searchOpen: newState });
    },

    // THEME
    theme: "light",
    toggleTheme(theme) {
      const [set, get] = a;

      let newTheme: Theme;
      if (theme !== undefined) {
        newTheme = theme;
      } else {
        let currentTheme = get().theme;
        if (currentTheme === "light") {
          newTheme = "dark";
        } else {
          newTheme = "light";
        }
      }
      set({ theme: newTheme });
    },
  },
  ...createAuthStore(...a),
}));

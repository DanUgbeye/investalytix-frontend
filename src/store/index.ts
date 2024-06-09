import { create } from "zustand";
import { AuthState, AuthStore, createAuthStore } from "./auth";
import { NewsStore, createNewsStore } from "./news";
import { LOCALSTORAGE_KEYS } from "@/data/storage-keys";

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

export type AppStore = BaseStore & AuthStore & GeneralStore & NewsStore;

function getSavedTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const theme = localStorage.getItem(LOCALSTORAGE_KEYS.THEME) as Theme;

  if (!theme) {
    return "light";
  }
  if (theme === "dark") {
    return "dark";
  }

  localStorage.removeItem(LOCALSTORAGE_KEYS.THEME);
  return "light";
}

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
    theme: getSavedTheme(),
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
  ...createNewsStore(...a),
}));

import { LOCALSTORAGE_KEYS } from "@/data/storage-keys";
import { Theme } from "@/types";
import { StateCreator } from "zustand";
import { AppStore } from "..";

export type GeneralStore = {
  // SEARCH MODAL
  searchModalOpen: boolean;
  toggleSearchModal(state?: boolean): void;

  // LOGIN MODAL
  loginModalOpen: boolean;
  loginModalLocked: boolean;
  toggleLoginModal(state?: boolean): void;
  toggleLoginModalLock(state?: boolean): void;

  // UPGRADE PLAN
  upgradePlanModalOpen: boolean;
  toggleUpgradePlanModal(state?: boolean): void;

  // THEME
  theme: Theme;
  toggleTheme(theme?: Theme): void;
};

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

export const createGeneralStore: StateCreator<
  AppStore,
  [],
  [],
  GeneralStore
> = (set, get) => ({
  // SEARCH MODAL
  searchModalOpen: false,
  toggleSearchModal(state) {
    const newState = state !== undefined ? state : !get().searchModalOpen;
    set({ searchModalOpen: newState });
  },

  // LOGIN MODAL
  loginModalOpen: false,
  loginModalLocked: false,
  toggleLoginModal(state) {
    const { loginModalLocked } = get();

    if (loginModalLocked) return;

    const newState = state !== undefined ? state : !get().loginModalOpen;
    set({ loginModalOpen: newState });
  },
  toggleLoginModalLock(state) {
    const newState = state !== undefined ? state : !get().loginModalLocked;
    set({ loginModalLocked: newState });
  },

  // UPGRADE PLAN MODAL
  upgradePlanModalOpen: false,
  toggleUpgradePlanModal(state) {
    const newState = state !== undefined ? state : !get().upgradePlanModalOpen;
    set({ upgradePlanModalOpen: newState });
  },

  // THEME
  theme: getSavedTheme(),
  toggleTheme(theme) {
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
});

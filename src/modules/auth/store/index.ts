import { create } from "zustand";
import { AuthStore } from "./types";

export const useAuthStore = create<AuthStore>((set, get) => {
  return {
    initialised: false,
    auth: undefined,
    user: undefined,

    initialiseStore(data) {
      return set({ ...data, initialised: true });
    },
    set(data) {
      return set(data);
    },
    reset() {
      set({ auth: undefined, user: undefined });
    },
  };
});

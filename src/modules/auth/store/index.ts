import { create } from "zustand";
import { AuthStore } from "./types";

const useAuthStore = create<AuthStore>((set, get) => {
  return {
    initialised: false,
    auth: undefined,
    user: undefined,

    initialiseStore(data) {
      return set({ ...data, initialised: true });
    },
    set(data) {
      if (typeof data === "function") {
        return set(data(get()));
      }
      return set(data);
    },
    reset() {
      set({ auth: undefined, user: undefined });
    },
  };
});

export default useAuthStore;

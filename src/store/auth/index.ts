import { StateCreator } from "zustand";
import { AppStore } from "..";
import { AuthData } from "@/modules/auth/types";
import { UserData } from "@/modules/user/types";

export type AuthState = {
  auth: AuthData | undefined;
  user: UserData | undefined;
};

export type AuthActions = {
  setAuth: (data: Partial<AuthState>) => void;
  resetAuth: () => void;
};

export type AuthStore = AuthState & AuthActions;

export const createAuthStore: StateCreator<AppStore, [], [], AuthStore> = (
  set
) => ({
  auth: undefined,
  user: undefined,
  setAuth: (data) => set({ ...data }),
  resetAuth: () => set({ auth: undefined, user: undefined }),
});

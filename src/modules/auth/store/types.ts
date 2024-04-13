import { AuthData } from "../auth.types";

export type AuthState = {
  initialised: boolean;
  auth?: AuthData;
  user?: any;
};

export type AuthActions = {
  initialiseStore(store: Omit<AuthState, "initialised">): void;
  set(data: Omit<AuthState, "initialised">): void;
  reset(): void;
};

export type AuthStore = AuthState & AuthActions;

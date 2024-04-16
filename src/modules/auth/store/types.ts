import { UserData } from "@/modules/user/user.types";
import { AuthData } from "../auth.types";

export type AuthState = {
  auth?: AuthData;
  user?: UserData;
};

export type AuthActions = {
  initialiseStore(store: AuthState): void;
  set(
    data: AuthState | ((state: AuthState) => AuthState | Partial<AuthState>)
  ): void;
  reset(): void;
};

export type AuthStore = { initialised: boolean } & AuthState & AuthActions;

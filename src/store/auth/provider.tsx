"use client";

import { clientAPI } from "@/config/client/api";
import CLIENT_CONFIG from "@/config/client/app";
import { QUERY_KEYS } from "@/data/query-keys";
import { cn } from "@/lib/utils";
import useLogout from "@/modules/auth/hooks/use-logout";
import { AuthRepository } from "@/modules/auth/repository";
import { UserRepository } from "@/modules/user/repository";
import { StoreInitialState, useAppStore } from "@/store";
import { createAPIInstance } from "@/utils/api-utils";
import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren, useEffect, useMemo } from "react";

export default function ClientAuthProvider(
  props: PropsWithChildren & { initialState: StoreInitialState }
) {
  const { children, initialState } = props;
  const { initialiseStore, reset, setAuth } = useAppStore();
  const initialised = useAppStore(({ initialised }) => initialised);
  const auth = useAppStore(({ auth }) => auth);
  const user = useAppStore(({ user }) => user);
  const userRepo = useMemo(() => new UserRepository(clientAPI), []);
  const authRepo = useMemo(() => new AuthRepository(clientAPI), []);
  const logout = useLogout();
  // const appStore = useAppStore();
  // console.log("appStore", appStore);

  const { data } = useQuery({
    enabled: user !== undefined && auth !== undefined,
    queryKey: [QUERY_KEYS.GET_USER_PROFILE, user?.id],
    queryFn: ({ signal }) => userRepo.getMyProfile({ signal }),
    refetchInterval: () => 180_000 + Math.floor(Math.random() * 120_000), // 3 - 5 mins
  });

  async function handleInit() {
    let defaultAuthState: StoreInitialState = {
      user: undefined,
      auth: undefined,
    };

    if (initialState.auth && initialState.user) {
      return initialiseStore(initialState);
    }

    if (!initialState.auth) {
      return initialiseStore(defaultAuthState);
    }

    try {
      const axios = createAPIInstance(CLIENT_CONFIG.API_BASE_URL);
      const userRepo = new UserRepository(axios);

      let res = await userRepo.getMyProfile({
        headers: {
          authorization: `Bearer ${initialState.auth.token}`,
        },
      });

      return initialiseStore({ auth: initialState.auth, user: res });
    } catch (error: any) {
      console.log("error initialising auth", error);
      return initialiseStore(defaultAuthState);
    }
  }

  useEffect(() => {
    if (!auth) return;

    const abortController = new AbortController();
    const now = Date.now();
    const timeout = auth.expiresIn - now - 5 * 60 * 1000; // Refresh 5 minutes before expiry

    // do not refresh timeout is less than 5 seconds
    if (timeout <= 5_000) {
      return;
    }

    console.log("setting timer for", timeout / (1000 * 60), "m");
    const timer = setTimeout(async () => {
      try {
        const res = await authRepo.refreshToken({
          signal: abortController.signal,
        });

        setAuth({ auth: res });
      } catch (error) {
        console.log("error refreshing auth", error);
      }
    }, timeout);

    return () => {
      abortController.abort();
      clearTimeout(timer);
    };
  }, [auth]);

  useEffect(() => {
    handleInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      setAuth({ user: data });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (initialised) {
    return <>{children}</>;
  }

  return <main className={cn("h-dvh bg-black pb-40 pt-20")} />;
}

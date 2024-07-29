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
import { PropsWithChildren, useEffect, useMemo, useRef } from "react";

const _5_MINS = 300_000;
const _1_MIN = 60_000;

export default function AuthProvider(
  props: PropsWithChildren & { initialState: StoreInitialState }
) {
  const { children, initialState } = props;
  const { initialiseStore, reset, setAuth } = useAppStore();
  const initialised = useAppStore(({ initialised }) => initialised);
  const auth = useAppStore(({ auth }) => auth);
  const user = useAppStore(({ user }) => user);
  const userRepo = useMemo(() => new UserRepository(clientAPI), []);
  const authRepo = useMemo(() => new AuthRepository(clientAPI), []);
  const refreshTimerRef = useRef<NodeJS.Timeout>();
  const logout = useLogout();

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

    try {
      if (initialState.auth && initialState.user) {
        return initialiseStore(initialState);
      }

      let initialData: StoreInitialState = { auth: undefined, user: undefined };
      if (
        !initialState.auth ||
        initialState.auth.expiresIn - Date.now() <= _5_MINS // if access token expires in 5 mins or less
      ) {
        initialData.auth = await authRepo.refreshToken();
      } else {
        initialData.auth = initialState.auth;
      }

      const axios = createAPIInstance(CLIENT_CONFIG.API_BASE_URL, {
        headers: { authorization: `Bearer ${initialData.auth.token}` },
      });
      const userRepo = new UserRepository(axios);
      initialData.user = await userRepo.getMyProfile();

      return initialiseStore(initialData);
    } catch (error: any) {
      console.log("error initialising auth", error);
      return initialiseStore(defaultAuthState);
    }
  }

  async function handleRefreshToken(signal: AbortSignal) {
    try {
      console.log("refreshing token");
      const res = await authRepo.refreshToken({
        signal: signal,
      });

      setAuth({ auth: res });
    } catch (error) {
      console.log("error refreshing auth", error);
    }
  }

  useEffect(() => {
    if (!auth || refreshTimerRef.current) return;

    const abortController = new AbortController();
    const timeLeft = auth.expiresIn - Date.now();

    if (timeLeft <= _5_MINS) {
      handleRefreshToken(abortController.signal);
      return;
    }

    console.log("setting timer for", timeLeft / (1000 * 60), "m");
    refreshTimerRef.current = setTimeout(
      async () => handleRefreshToken(abortController.signal),
      timeLeft
    );

    return () => {
      abortController.abort();
      refreshTimerRef.current && clearTimeout(refreshTimerRef.current);
    };
  }, [auth, refreshTimerRef.current]);

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
    return children;
  }

  return <main className={cn("h-dvh bg-black pb-40 pt-20")} />;
}

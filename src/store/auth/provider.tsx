"use client";

import { QUERY_KEYS } from "@/data/query-keys";
import { LOCALSTORAGE_KEYS } from "@/data/storage-keys";
import useLogout from "@/modules/auth/hooks/use-logout.hook";
import { useAuthRepo } from "@/modules/auth/repository";
import { AuthSchema } from "@/modules/auth/validation";
import { useUserRepo } from "@/modules/user/repository";
import { UserSchema } from "@/modules/user/validation";
import { useAppStore } from "@/store";
import { AuthState } from "@/store/auth";
import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren, useEffect } from "react";
import { z } from "zod";

export default function AuthProvider({ children }: PropsWithChildren) {
  const initialiseStore = useAppStore(({ initialiseStore }) => initialiseStore);
  const initialised = useAppStore(({ initialised }) => initialised);
  const set = useAppStore(({ setAuth }) => setAuth);
  const reset = useAppStore(({ reset }) => reset);
  const auth = useAppStore(({ auth }) => auth);
  const user = useAppStore(({ user }) => user);
  const userRepo = useUserRepo();
  const authRepo = useAuthRepo();
  const logout = useLogout();

  const defaultAuth = {
    user: undefined,
    auth: undefined,
  };

  const { data } = useQuery({
    enabled: user !== undefined,
    queryKey: [QUERY_KEYS.GET_USER_PROFILE, user?.id],
    queryFn: ({ signal }) => userRepo.getUserProfile(user!.id, { signal }),
    refetchInterval: 300_000, // 5 mins
  });

  // check auth status
  const {
    data: authStatus,
    isLoading: authStatusLoading,
    refetch: refetchAuthStatus,
  } = useQuery({
    enabled: user !== undefined,
    queryKey: [QUERY_KEYS.GET_AUTH_STATUS, user?.id],
    queryFn: ({ signal }) => authRepo.checkAuthStatus({ signal }),
    refetchInterval: 180_000, // 5 mins
    retry: 1,
  });

  function handleInit() {
    try {
      // fetch auth data locally
      const saved = localStorage.getItem(LOCALSTORAGE_KEYS.AUTH);
      if (saved === null) {
        return initialiseStore(defaultAuth);
      }

      const data = JSON.parse(saved); // can throw error
      // validate data
      const validation = z
        .object({ auth: AuthSchema, user: UserSchema })
        .safeParse(data);

      if (!validation.success) {
        localStorage.removeItem(LOCALSTORAGE_KEYS.AUTH);
        return initialiseStore(defaultAuth);
      }

      return initialiseStore(validation.data);
    } catch (error: any) {
      localStorage.removeItem(LOCALSTORAGE_KEYS.AUTH);
      return initialiseStore(defaultAuth);
    }
  }

  function backupData() {
    if (auth && user) {
      localStorage.setItem(
        LOCALSTORAGE_KEYS.AUTH,
        JSON.stringify({ auth, user } satisfies AuthState)
      );
    }
  }

  function syncAuth() {
    // ensure both user and auth are always available
    if ((auth && !user) || (!auth && user)) {
      reset();
    }

    if (auth && user) {
      localStorage.setItem(
        LOCALSTORAGE_KEYS.AUTH,
        JSON.stringify({ auth, user })
      );
    }
  }

  // TODO set timer for refresh token

  useEffect(() => {
    handleInit();

    return backupData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    syncAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, user]);

  useEffect(() => {
    if (data) {
      set({ user: data });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    refetchAuthStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, user]);

  useEffect(() => {
    if (authStatusLoading) return;

    if (authStatus && !authStatus.authenticated && auth && user) {
      try {
        logout();
      } catch (error: any) {}
    }

    if (authStatus && authStatus.authenticated && !auth && !user) {
      try {
        logout();
      } catch (error: any) {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authStatusLoading, authStatus, auth, user]);

  if (initialised) {
    return <>{children}</>;
  }
}

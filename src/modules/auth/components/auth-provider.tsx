"use client";

import { QUERY_KEYS } from "@/data/query-keys";
import { LOCALSTORAGE_KEYS } from "@/data/storage-keys";
import { useUserRepo } from "@/modules/user/repository";
import { UserSchema } from "@/modules/user/validation";
import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren, useEffect } from "react";
import { z } from "zod";
import useAuthStore from "../store";
import { AuthState } from "../store/types";
import { AuthSchema } from "../validation";

export default function AuthProvider({ children }: PropsWithChildren) {
  const initialiseStore = useAuthStore(
    ({ initialiseStore }) => initialiseStore
  );
  const initialised = useAuthStore(({ initialised }) => initialised);
  const set = useAuthStore(({ set }) => set);
  const reset = useAuthStore(({ reset }) => reset);
  const auth = useAuthStore(({ auth }) => auth);
  const user = useAuthStore(({ user }) => user);
  const userRepo = useUserRepo();

  const { data } = useQuery({
    enabled: !!user,
    queryKey: [QUERY_KEYS.GET_USER_PROFILE, user?.id],
    queryFn: ({ signal }) => userRepo.getUserProfile(user!.id, { signal }),
    refetchInterval: 300_000, // 5 mins
  });

  function handleInit() {
    try {
      // fetch auth data locally
      const saved = localStorage.getItem(LOCALSTORAGE_KEYS.USER);
      if (saved === null) {
        return initialiseStore({});
      }

      const data = JSON.parse(saved);
      // validate data
      const parsed = z
        .object({ auth: AuthSchema, user: UserSchema })
        .safeParse(data);

      if (!parsed.success) {
        localStorage.removeItem(LOCALSTORAGE_KEYS.USER);
        return initialiseStore({});
      }

      return initialiseStore(parsed.data);
    } catch (error: any) {
      localStorage.removeItem(LOCALSTORAGE_KEYS.USER);
      return initialiseStore({});
    }
  }

  function backupData() {
    if (auth && user) {
      localStorage.setItem(
        LOCALSTORAGE_KEYS.USER,
        JSON.stringify({ auth, user } satisfies AuthState)
      );
    }
  }

  function syncAuth() {
    // ensure both user and auth are always available
    if ((auth && !user) || (!auth && user)) {
      reset();
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
  }, [data, user]);

  useEffect(() => {
    if (data) {
      set({ user: data });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (initialised) {
    return <>{children}</>;
  }
}

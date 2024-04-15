"use client";

import { PropsWithChildren, useCallback, useEffect } from "react";
import useAuthStore from "../store";

export default function AuthProvider({ children }: PropsWithChildren) {
  const initialiseStore = useAuthStore(
    ({ initialiseStore }) => initialiseStore
  );
  const initialised = useAuthStore(({ initialised }) => initialised);

  function handleInit() {
    // fetch auth data locally
    // set it if exists
    initialiseStore({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  // set timer for refresh token
  // fetch user data on page refresh

  useEffect(() => {
    handleInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initialised) {
    return <>{children}</>;
  }
}

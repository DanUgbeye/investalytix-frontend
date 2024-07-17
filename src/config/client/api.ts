"use client";
import { logout } from "@/modules/auth/hooks/use-logout";
import { useAppStore } from "@/store";
import {
  addAuthInterceptor,
  addRefreshTokenInterceptor,
  createAPIInstance,
} from "@/utils/api-utils";
import CLIENT_CONFIG from "./app";

const clientAPI = createAPIInstance(CLIENT_CONFIG.API_BASE_URL);

function getAuthToken() {
  const { auth } = useAppStore.getState();
  return auth?.token;
}

addRefreshTokenInterceptor(
  clientAPI,
  (auth) => {
    const { setAuth } = useAppStore.getState();
    setAuth({ auth });
  },
  () => {
    try {
      logout();
    } catch (error: any) {}
  }
);
addAuthInterceptor(clientAPI, getAuthToken);
export { clientAPI };


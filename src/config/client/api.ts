"use client";
import { addAuthInterceptor, createAPIInstance } from "@/utils/api-utils";
import CLIENT_CONFIG from "./app";
import { useAppStore } from "@/store";

const clientAPI = createAPIInstance(CLIENT_CONFIG.API_BASE_URL);

function getAuthToken() {
  const { auth } = useAppStore.getState();
  return auth?.token;
}

addAuthInterceptor(clientAPI, getAuthToken);
export { clientAPI };

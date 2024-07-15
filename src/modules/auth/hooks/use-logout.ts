"use client";

import { clientAPI } from "@/config/client/api";
import { LOCALSTORAGE_KEYS } from "@/data/storage-keys";
import { useAppStore } from "@/store";
import { AuthRepository } from "../repository";

async function logout() {
  const resetAuth = useAppStore.getState().reset;
  const authRepo = new AuthRepository(clientAPI);

  await authRepo.logout();
  resetAuth();
  localStorage.removeItem(LOCALSTORAGE_KEYS.AUTH);
}

export default function useLogout() {
  return logout;
}

"use client";

import { clientAPI } from "@/config/client/api";
import { LOCALSTORAGE_KEYS } from "@/data/storage-keys";
import { useAppStore } from "@/store";
import { AuthRepository } from "../repository";

export async function logout() {
  const { reset } = useAppStore.getState();
  const authRepo = new AuthRepository(clientAPI);

  await authRepo.logout();
  reset();
  localStorage.removeItem(LOCALSTORAGE_KEYS.AUTH);
}

export default function useLogout() {
  return logout;
}

import { clientAPI } from "@/config/api";
import { AuthRepository } from "../repository";
import { LOCALSTORAGE_KEYS } from "@/data/storage-keys";
import useAuthStore from "../store";

async function logout() {
  const resetAuth = useAuthStore.getState().reset;
  const authRepo = new AuthRepository(clientAPI);

  await authRepo.logout();
  resetAuth();
  localStorage.removeItem(LOCALSTORAGE_KEYS.AUTH);
}

export default function useLogout() {
  return logout;
}

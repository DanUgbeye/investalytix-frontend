import { useAppStore } from "@/store";

export default function useIsAuthenticated() {
  const isAuthenticated = useAppStore(({ auth }) => auth !== undefined);
  return isAuthenticated;
}

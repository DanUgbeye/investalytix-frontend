import { useAppStore } from "..";

export default function useTheme() {
  return useAppStore(({ theme, toggleTheme }) => ({
    theme,
    toggleTheme,
  }));
}

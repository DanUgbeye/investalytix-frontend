"use client";

import { useEffect } from "react";
import useTheme from "./useTheme";
import { useAppStore } from "..";

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = useAppStore()
  const { theme } = useTheme();

  function onThemeChange() {
    localStorage.setItem("theme", theme);

    const body = document.querySelector("body");
    if (!body) return;
    if (theme === "dark" && !body.classList.contains("dark"))
      body.classList.add("dark");
    if (theme === "light" && body.classList.contains("dark"))
      body.classList.remove("dark");
  }

  useEffect(() => {
    onThemeChange();
  }, [theme]);

  console.log(store)
  return <>{children}</>;
}

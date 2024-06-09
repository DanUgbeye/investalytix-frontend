"use client";

import { LOCALSTORAGE_KEYS } from "@/data/storage-keys";
import { createContext, useEffect } from "react";
import { Theme } from "..";
import useTheme from "./useTheme";

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, toggleTheme } = useTheme();

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

  return <>{children}</>;
}

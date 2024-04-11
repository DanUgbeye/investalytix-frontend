"use client";
import { createContext, useCallback, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export default function ThemeContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    const body = document.querySelector("body");
    if (!body) return;

    setTheme((theme) => (theme === "light" ? "dark" : "light"));

    body.classList.toggle("dark");
  }, [theme]);
  const value = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

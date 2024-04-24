"use client";
import { createContext, useEffect, useState } from "react";

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

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    // persist theme in local storage
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.classList.toggle("dark");
  }, [theme]);

  // initialize theme from local storage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme((theme as any) ?? "light");
  }, []);

  const value = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

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
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // persist theme in local storage
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    if (theme === "dark" && !body.classList.contains("dark"))
      body.classList.add("dark");
    if (theme === "light" && body.classList.contains("dark"))
      body.classList.remove("dark");
    // body.classList.toggle("dark");
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

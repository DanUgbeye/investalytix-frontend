"use client";
import { createContext, useState } from "react";

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
    const body = document.querySelector("body");
    if (!body) return;

    let newTheme = theme;
    setTheme((theme) => {
      if (theme === "light") {
        newTheme = "dark";
        return "dark";
      } else {
        newTheme = "light";
        return "light";
      }
    });

    if (newTheme === "light" && body.classList.contains("dark"))
      body.classList.toggle("dark");
  };
  const value = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

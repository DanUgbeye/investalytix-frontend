"use client"
import { useContext } from "react";
import { ThemeContext } from "./store";

export default function useTheme() {
  const data = useContext(ThemeContext);

  return data;
}

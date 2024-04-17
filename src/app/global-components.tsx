"use client";

import useTheme from "@/store/theme/useTheme";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GlobalComponents({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  return (
    <>
      <ToastContainer
        position="top-center"
        closeOnClick
        pauseOnHover
        theme={theme}
        stacked
        hideProgressBar
      />

      {children}
    </>
  );
}

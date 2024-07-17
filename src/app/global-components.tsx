"use client";

import AuthModal from "@/modules/auth/components/auth-modal";
import NewsDisplayModal from "@/modules/news/components/news-display-modal";
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
        theme={theme === "light" ? theme : "colored"}
        stacked
        autoClose={4000}
        hideProgressBar
      />
      <NewsDisplayModal />
      <AuthModal />

      {children}
    </>
  );
}

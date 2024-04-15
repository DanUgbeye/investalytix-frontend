"use client";

import AuthProvider from "@/modules/auth/components/auth-provider";
import ThemeContextProvider from "@/store/theme/store";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </AuthProvider>
  );
}

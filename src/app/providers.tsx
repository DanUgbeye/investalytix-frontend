"use client";

import AuthProvider from "@/modules/auth/components/auth-provider";
import ThemeContextProvider from "@/store/theme/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

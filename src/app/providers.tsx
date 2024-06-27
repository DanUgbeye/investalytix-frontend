"use client";

import AuthProvider from "@/store/auth/provider";
import ThemeProvider from "@/store/theme/provider";
import WatchlistProvider from "@/store/watchlist/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <WatchlistProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </WatchlistProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

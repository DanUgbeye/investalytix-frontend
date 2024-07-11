"use client";

import AuthProvider from "@/store/auth/provider";
import SocketServiceProvider from "@/store/socket/provider";
import ThemeProvider from "@/store/theme/provider";
import WatchlistProvider from "@/store/watchlist/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SocketServiceProvider>
          <WatchlistProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </WatchlistProvider>
        </SocketServiceProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

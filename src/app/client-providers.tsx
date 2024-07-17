"use client";

import { StoreInitialState } from "@/store";
import ClientAuthProvider from "@/store/auth/provider";
import SocketServiceProvider from "@/store/socket/provider";
import ThemeProvider from "@/store/theme/provider";
import WatchlistProvider from "@/store/watchlist/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  initialState: StoreInitialState;
}

export default function ClientProviders({ children, initialState }: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ClientAuthProvider initialState={initialState}>
        <SocketServiceProvider>
          <WatchlistProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </WatchlistProvider>
        </SocketServiceProvider>
      </ClientAuthProvider>
    </QueryClientProvider>
  );
}

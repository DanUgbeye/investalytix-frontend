import { StockSocketData } from "@/types/quote";

export const SOCKET_EMIT_EVENTS = {
  LOG_IN: "login",
  LOG_OUT: "logout",

  SUBSCRIBE_FX: "subscribe-fx",
  UNSUBSCRIBE_FX: "unsubscribe-fx",

  SUBSCRIBE_STOCK: "subscribe-stock",
  UNSUBSCRIBE_STOCK: "unsubscribe-stock",

  SUBSCRIBE_CRYPTO: "subscribe-crypto",
  UNSUBSCRIBE_CRYPTO: "unsubscribe-crypto",
} as const;

export type SocketEmitEvent =
  (typeof SOCKET_EMIT_EVENTS)[keyof typeof SOCKET_EMIT_EVENTS];

export type SocketEmitEventsMap = {
  [SOCKET_EMIT_EVENTS.LOG_IN]: (auth: string) => void;
  [SOCKET_EMIT_EVENTS.LOG_OUT]: (userId: string) => void;

  [SOCKET_EMIT_EVENTS.SUBSCRIBE_FX]: (ticker: string) => void;
  [SOCKET_EMIT_EVENTS.UNSUBSCRIBE_FX]: (ticker: string) => void;

  [SOCKET_EMIT_EVENTS.SUBSCRIBE_STOCK]: (ticker: string) => void;
  [SOCKET_EMIT_EVENTS.UNSUBSCRIBE_STOCK]: (ticker: string) => void;

  [SOCKET_EMIT_EVENTS.SUBSCRIBE_CRYPTO]: (ticker: string) => void;
  [SOCKET_EMIT_EVENTS.UNSUBSCRIBE_CRYPTO]: (ticker: string) => void;
};

export const SOCKET_LISTEN_EVENTS = {
  FX: "fx",
  STOCK: "stock",
  CRYPTO: "crypto",
} as const;

export type SocketListenEvent =
  (typeof SOCKET_LISTEN_EVENTS)[keyof typeof SOCKET_LISTEN_EVENTS];

export type SocketListenEventsMap = {
  [SOCKET_LISTEN_EVENTS.FX]: (data: StockSocketData) => void;
  [SOCKET_LISTEN_EVENTS.STOCK]: (data: StockSocketData) => void;
  [SOCKET_LISTEN_EVENTS.CRYPTO]: (data: StockSocketData) => void;
};

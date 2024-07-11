import CLIENT_CONFIG from "@/config/client/app";
import { Socket, io } from "socket.io-client";
import { SocketEmitEventsMap, SocketListenEventsMap } from "./types";

export const socket = io(CLIENT_CONFIG.API_BASE_URL, {
  autoConnect: false,
  reconnection: true,
  reconnectionDelay: 5_000 + Math.floor(Math.random() * 20_000),
}) as Socket<SocketListenEventsMap, SocketEmitEventsMap>;

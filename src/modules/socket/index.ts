import CLIENT_CONFIG from "@/config/client/app";
import { Socket, io } from "socket.io-client";
import { SocketEmitEventsMap, SocketListenEventsMap } from "./types";

export const socket = io(CLIENT_CONFIG.API_BASE_URL, {
  autoConnect: false,
  reconnection: true,
}) as Socket<SocketListenEventsMap, SocketEmitEventsMap>;

import { socket } from "@/modules/socket";
import { SocketService } from "@/modules/socket/service";
import { StateCreator } from "zustand";
import { AppStore } from "..";

export type SocketServiceState = {
  socketService: SocketService;
};

export type SocketServiceActions = {
  // setSocketService: (socketService?: SocketService) => void;
};

export type SocketServiceStore = SocketServiceState & SocketServiceActions;

export const createSocketServiceStore: StateCreator<
  AppStore,
  [],
  [],
  SocketServiceStore
> = (set, get) => ({
  socketService: new SocketService(socket),
  // setSocketService: (socketService) => set({ socketService }),
});

"use client";

import { socket } from "@/modules/socket";
import { PropsWithChildren, useCallback, useEffect } from "react";
import { useAppStore } from "..";

interface Props extends PropsWithChildren {}

export default function SocketServiceProvider(props: Props) {
  const { children } = props;
  const auth = useAppStore(({ auth }) => auth);
  const socketService = useAppStore(({ socketService }) => socketService);

  // on connection to chat socket
  const handleConnection = useCallback(() => {
    console.log("connected to socket server");
    // socketService?.setSocket(socket)
    if (auth) {
      socketService.authenticate(auth.token);
    }
    socketService.addListeners();
  }, [auth]);

  // on disconnection from chat socket
  const handleDisconnection = useCallback(() => {
    console.log("disconnected from chat server");
    socketService.removeListeners();
  }, []);

  useEffect(() => {
    socket.on("connect", handleConnection);
    socket.on("disconnect", handleDisconnection);
    socket.connect();

    return () => {
      socket.disconnect();
      socket.off("connect", handleConnection);
      socket.off("disconnect", handleDisconnection);
    };
  }, [auth, socket.connected]);

  return <>{children}</>;
}

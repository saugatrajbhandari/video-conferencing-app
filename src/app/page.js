"use client";

import React, { useEffect } from "react";
import { useSocket } from "./context/socket-provider";
import usePeer from "./hooks/use-peer";

function Page() {
  const { socket } = useSocket();
  const { peer } = usePeer();

  useEffect(() => {
    if (!socket) return;

    socket?.on("connect", () => console.log("socket id", socket.id));
  }, [socket]);

  return <div>page</div>;
}

export default Page;

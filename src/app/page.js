"use client";

import React, { useEffect } from "react";
import { useSocket } from "./context/socket-provider";

function Page() {
  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket?.on("connect", () => console.log(socket.id));
  }, [socket]);

  return <div>page</div>;
}

export default Page;

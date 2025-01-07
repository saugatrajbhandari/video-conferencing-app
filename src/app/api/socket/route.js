import { NextResponse } from "next/server";
import { Server } from "socket.io";

export function GET(req, res) {
  console.log(res, "res");

  if (res.socket.server.io) {
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket) => console.log(socket, "socket connected"));
  }
  return NextResponse.json({ message: "socket" });
}

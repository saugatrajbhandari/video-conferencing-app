"use client";

import React, { useEffect, useState } from "react";

import usePeer from "../hooks/use-peer";
import useMediaStream from "../hooks/use-media-streams";
import ReactPlayer from "../components/react-player";
import useClient from "../hooks/use-client";
import { useSocket } from "../context/socket-provider";

function Room() {
  const { peer, id } = usePeer();
  const isClient = useClient();

  const stream = useMediaStream();
  const { socket } = useSocket();

  const [players, setPlayers] = useState({});

  useEffect(() => {
    if (!socket || !stream || !peer) return;

    const handleUserConnected = (userId) => {
      console.log(console.log("user connected", userId));

      var call = peer.call(userId, stream);

      call.on("stream", function (remoteStream) {
        console.log("incomming stream");
        // Show stream in some video/canvas element.

        setPlayers((prev) => ({
          ...prev,
          [userId]: {
            muted: true,
            playerId: callerId,
            playing: true,
            stream: remoteStream,
          },
        }));
      });
    };

    socket.on("user-connected", handleUserConnected);

    return () => socket.off("user-connected", handleUserConnected);
  }, [socket, peer, stream]);

  useEffect(() => {
    if (!peer) return;

    peer.on("call", (call) => {
      const { peer: callerId } = call;
      call.answer(stream);
      call.on("stream", function (remoteStream) {
        console.log("incomming stream", callerId);
        // Show stream in some video/canvas element.

        setPlayers((prev) => ({
          ...prev,
          [callerId]: {
            muted: true,
            playerId: callerId,
            playing: true,
            stream: remoteStream,
          },
        }));
      });
    });
  }, [peer]);

  useEffect(() => {
    if (!stream) return;

    setPlayers((prev) => ({
      ...prev,
      [id]: {
        muted: true,
        playerId: id,
        playing: true,
        stream,
      },
    }));
  }, []);

  return (
    <div>
      {isClient &&
        Object.keys(players).map((items) => {
          return <ReactPlayer {...items} />;
        })}
    </div>
  );
}

export default Room;

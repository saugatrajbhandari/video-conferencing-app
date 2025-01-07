"use client";

import React from "react";

import usePeer from "../hooks/use-peer";
import useMediaStream from "../hooks/use-media-streams";
import ReactPlayer from "../components/react-player";

function Room() {
  const { peer, id } = usePeer();

  const stream = useMediaStream();

  return (
    <div>
      <ReactPlayer muted={true} playerId={id} playing={true} stream={stream} />
    </div>
  );
}

export default Room;

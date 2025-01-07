import React from "react";
import ReactVideoPlayer from "react-player";

function ReactPlayer({ playerId, muted, playing, stream }) {
  return (
    <ReactVideoPlayer
      key={playerId}
      muted={muted}
      playing={playing}
      url={stream}
    />
  );
}

export default ReactPlayer;

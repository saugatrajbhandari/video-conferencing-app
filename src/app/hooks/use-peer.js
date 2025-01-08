import { useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import { useSocket } from "../context/socket-provider";
import { useParams } from "next/navigation";

const usePeer = () => {
  const [peer, setPeer] = useState();
  const [id, setId] = useState();
  const { socket } = useSocket();
  const { roomid } = useParams();

  const isPeerSet = useRef();

  useEffect(() => {
    if (!socket || isPeerSet.current || !roomid) return;

    isPeerSet.current = true;

    const myPeer = new Peer();
    setPeer(myPeer);

    myPeer.on("open", (id) => {
      console.log(id, "peer id");
      setId(id);
      console.log(socket);
      socket?.emit("join-room", roomid, id);
    });
  }, [socket, roomid]);

  return { peer, id };
};

export default usePeer;

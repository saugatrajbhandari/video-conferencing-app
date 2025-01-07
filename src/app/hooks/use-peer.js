import { useEffect, useState } from "react";
import Peer from "peerjs";

const usePeer = () => {
  const [peer, setPeer] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    const peerInstance = new Peer();

    setPeer(peerInstance);

    peerInstance.on("open", (id) => {
      console.log(id, "peer id");
      setId(id);
    });
  }, []);

  return { peer, id };
};

export default usePeer;

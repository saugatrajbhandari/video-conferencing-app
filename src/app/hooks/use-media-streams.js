import { useState, useEffect, useRef } from "react";

const useMediaStream = () => {
  const [stream, setStream] = useState();

  const hasStream = useRef();

  useEffect(() => {
    if (hasStream.current) return;

    hasStream.current = true;

    (async () => {
      const openMediaDevices = async (constraints) => {
        return await navigator.mediaDevices.getUserMedia(constraints);
      };

      try {
        const stream = await openMediaDevices({ video: true, audio: true });
        setStream(stream);
        console.log("Got MediaStream:", stream);
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    })();
  }, []);

  return stream;
};

export default useMediaStream;

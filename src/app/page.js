"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export default function LobbyPage() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (roomId.trim()) {
      router.push(`/${roomId}`);
    }
  };

  const handleCreateRoom = () => {
    const newRoomId = uuidv4();
    router.push(`/${newRoomId}`);
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Video Call Lobby</h1>
      <form onSubmit={handleJoinRoom} className="space-y-4">
        <div>
          <label
            htmlFor="roomId"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Room ID
          </label>
          <input
            type="text"
            id="roomId"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter room ID"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Join Room
          </button>
          <button
            type="button"
            onClick={handleCreateRoom}
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Create New Room
          </button>
        </div>
      </form>
    </div>
  );
}

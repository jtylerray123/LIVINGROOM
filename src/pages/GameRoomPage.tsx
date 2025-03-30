import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const GameRoomPage: React.FC = () => {
  const { roomCode } = useParams<{ roomCode: string }>();
  const navigate = useNavigate();
  const { isMobile } = useSelector((state: RootState) => state.app);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Room Code */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Room Code</h1>
          <p className="text-4xl font-mono bg-gray-100 p-4 rounded-lg">{roomCode}</p>
        </div>

        {/* Player List */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Players</h2>
          <div className="space-y-2">
            {/* Placeholder for player list */}
          </div>
        </div>

        {/* Team Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Teams</h2>
          <div className="space-y-4">
            {/* Placeholder for team selection */}
          </div>
        </div>

        {/* Host Controls */}
        <div className="space-y-4">
          <button
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => navigate(`/play/${roomCode}`)}
          >
            Start Game
          </button>
          <button
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => navigate('/')}
          >
            Leave Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameRoomPage; 
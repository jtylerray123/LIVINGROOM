import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const GamePlayPage: React.FC = () => {
  const { roomCode } = useParams<{ roomCode: string }>();
  const navigate = useNavigate();
  const { isMobile } = useSelector((state: RootState) => state.app);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Game Status */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Game in Progress</h1>
          <p className="text-xl text-gray-600">Room: {roomCode}</p>
        </div>

        {/* Game Timer */}
        <div className="text-center mb-8">
          <div className="text-4xl font-mono">00:00</div>
        </div>

        {/* Game Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          {/* Placeholder for game-specific content */}
        </div>

        {/* Game Controls */}
        <div className="space-y-4">
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Next Turn
          </button>
          <button
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => navigate('/')}
          >
            End Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePlayPage; 
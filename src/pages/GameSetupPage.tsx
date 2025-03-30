import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const GameSetupPage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const { isMobile } = useSelector((state: RootState) => state.app);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Game Setup</h1>
      
      {/* Game Settings */}
      <div className="max-w-md mx-auto space-y-6">
        {/* Player Count */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Players
          </label>
          <input
            type="number"
            min="2"
            max="20"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Game Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Game Duration (minutes)
          </label>
          <input
            type="number"
            min="5"
            max="60"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categories
          </label>
          <div className="space-y-2">
            {/* Placeholder for category checkboxes */}
          </div>
        </div>

        {/* Start Game Button */}
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => navigate('/room/ABCD')} // Placeholder room code
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default GameSetupPage; 
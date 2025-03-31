import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GameSetupPage from './pages/GameSetupPage';
import GameRoomPage from './pages/GameRoomPage';
import GamePlayPage from './pages/GamePlayPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cozy-cream font-cozy">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/setup/:gameId" element={<GameSetupPage />} />
        <Route path="/room/:roomCode" element={<GameRoomPage />} />
        <Route path="/play/:roomCode" element={<GamePlayPage />} />
      </Routes>
    </div>
  );
};

export default App; 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';
import { games } from '../games/gamesData';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { isMobile } = useSelector((state: RootState) => state.app);

  return (
    <div className="min-h-screen bg-cozy-cream flex flex-col items-center">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-cozy-warm py-6 px-4 shadow-cozy"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-cozy-brown text-center">
          Living Room Games
        </h1>
        <p className="text-cozy-rust text-center mt-2">
          Gather around and play together
        </p>
      </motion.header>

      {/* Main Content */}
      <main className="w-full max-w-4xl px-4 py-8 flex flex-col items-center">
        {/* Game Code Input */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md mb-8"
        >
          <div className="cozy-card">
            <h2 className="text-xl font-semibold text-cozy-brown mb-4">Join a Game</h2>
            <input
              type="text"
              placeholder="Enter game code"
              className="cozy-input mb-4"
            />
            <button className="cozy-button w-full">
              Join Game
            </button>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-md mb-8"
        >
          <div className="cozy-card">
            <h2 className="text-xl font-semibold text-cozy-brown mb-4">Find a Game</h2>
            <input
              type="text"
              placeholder="Search games..."
              className="cozy-input"
            />
          </div>
        </motion.div>

        {/* Game List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              thumbnail={game.thumbnail}
              playerCount={game.playerCount}
              duration={game.duration}
              difficulty={game.difficulty}
              tags={game.tags}
            />
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-cozy-warm py-4 px-4 mt-auto">
        <p className="text-center text-cozy-brown text-sm">
          Made with ❤️ for cozy game nights
        </p>
      </footer>
    </div>
  );
};

export default HomePage; 
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GameCardProps {
  title: string;
  thumbnail: string;
  playerCount: {
    min: number;
    max: number;
  };
  duration: {
    min: number;
    max: number;
  };
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  thumbnail,
  playerCount,
  duration,
  difficulty,
  tags,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-cozy-sage';
      case 'Medium':
        return 'bg-cozy-amber';
      case 'Hard':
        return 'bg-cozy-rust';
      default:
        return 'bg-cozy-sage';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="cozy-card cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Thumbnail */}
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-cozy-brown mb-2">{title}</h3>

      {/* Basic Info */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        <span className="px-3 py-1 bg-cozy-warm text-cozy-brown rounded-full text-sm">
          {playerCount.min}-{playerCount.max} Players
        </span>
        <span className="px-3 py-1 bg-cozy-warm text-cozy-brown rounded-full text-sm">
          {duration.min}-{duration.max} min
        </span>
        <span className={`px-3 py-1 ${getDifficultyColor(difficulty)} text-white rounded-full text-sm`}>
          {difficulty}
        </span>
      </div>

      {/* Expandable Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-cozy-warm">
              <h4 className="text-lg font-medium text-cozy-brown mb-2">Game Details</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-cozy-latte text-cozy-brown rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GameCard; 
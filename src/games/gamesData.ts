export interface Game {
  id: number;
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

export const games: Game[] = [
  {
    id: 1,
    title: "Charades",
    thumbnail: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-4.0.3",
    playerCount: { min: 4, max: 16 },
    duration: { min: 15, max: 45 },
    difficulty: "Easy",
    tags: ["Acting", "Party", "Family Friendly", "No Props"]
  },
  {
    id: 2,
    title: "5 Second Rule",
    thumbnail: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3",
    playerCount: { min: 3, max: 12 },
    duration: { min: 20, max: 40 },
    difficulty: "Medium",
    tags: ["Quick Thinking", "Party", "Fast-Paced", "Verbal"]
  },
  {
    id: 3,
    title: "Categories",
    thumbnail: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3",
    playerCount: { min: 2, max: 10 },
    duration: { min: 10, max: 30 },
    difficulty: "Easy",
    tags: ["Word Game", "Quick Play", "Educational", "Verbal"]
  },
  {
    id: 4,
    title: "20 Questions",
    thumbnail: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3",
    playerCount: { min: 2, max: 8 },
    duration: { min: 15, max: 25 },
    difficulty: "Easy",
    tags: ["Deduction", "Classic", "Family Friendly", "No Props"]
  }
]; 
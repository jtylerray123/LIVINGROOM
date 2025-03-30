import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Game {
  id: string;
  name: string;
  description: string;
  minPlayers: number;
  maxPlayers: number;
  duration: number;
  difficulty: 'easy' | 'medium' | 'hard';
  categories: string[];
  teamBased: boolean;
}

interface GamesState {
  list: Game[];
  filters: {
    playerCount?: number;
    duration?: number;
    difficulty?: Game['difficulty'];
    categories?: string[];
  };
  searchTerm: string;
}

const initialState: GamesState = {
  list: [],
  filters: {},
  searchTerm: '',
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.list = action.payload;
    },
    setFilters: (state, action: PayloadAction<GamesState['filters']>) => {
      state.filters = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setGames, setFilters, setSearchTerm } = gamesSlice.actions;
export default gamesSlice.reducer; 
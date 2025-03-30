import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Player {
  id: string;
  name: string;
  teamId?: string;
  isHost: boolean;
  isConnected: boolean;
  joinedAt: string;
}

interface Team {
  id: string;
  name: string;
  score: number;
}

interface RoomState {
  code: string;
  gameId: string;
  status: 'waiting' | 'playing' | 'ended';
  createdAt: string;
  lastActivity: string;
  hostId: string;
  settings: {
    roundsPerTeam: number;
    timePerTurn: number;
    selectedCategories: string[];
  };
  players: Player[];
  teams: Team[];
  gameState: {
    round: number;
    turn: number;
    currentPlayerId: string;
    currentTeamId: string;
    timeRemaining: number;
    scores: Record<string, number>;
    gameSpecificState: Record<string, any>;
  };
}

const initialState: RoomState = {
  code: '',
  gameId: '',
  status: 'waiting',
  createdAt: new Date().toISOString(),
  lastActivity: new Date().toISOString(),
  hostId: '',
  settings: {
    roundsPerTeam: 3,
    timePerTurn: 60,
    selectedCategories: [],
  },
  players: [],
  teams: [],
  gameState: {
    round: 1,
    turn: 0,
    currentPlayerId: '',
    currentTeamId: '',
    timeRemaining: 60,
    scores: {},
    gameSpecificState: {},
  },
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoom: (state, action: PayloadAction<Partial<RoomState>>) => {
      Object.assign(state, action.payload);
    },
    addPlayer: (state, action: PayloadAction<Player>) => {
      state.players.push(action.payload);
    },
    removePlayer: (state, action: PayloadAction<string>) => {
      state.players = state.players.filter(p => p.id !== action.payload);
    },
    updatePlayer: (state, action: PayloadAction<Partial<Player> & { id: string }>) => {
      const player = state.players.find(p => p.id === action.payload.id);
      if (player) {
        Object.assign(player, action.payload);
      }
    },
    addTeam: (state, action: PayloadAction<Team>) => {
      state.teams.push(action.payload);
    },
    updateTeam: (state, action: PayloadAction<Partial<Team> & { id: string }>) => {
      const team = state.teams.find(t => t.id === action.payload.id);
      if (team) {
        Object.assign(team, action.payload);
      }
    },
    updateGameState: (state, action: PayloadAction<Partial<RoomState['gameState']>>) => {
      Object.assign(state.gameState, action.payload);
    },
  },
});

export const {
  setRoom,
  addPlayer,
  removePlayer,
  updatePlayer,
  addTeam,
  updateTeam,
  updateGameState,
} = roomSlice.actions;
export default roomSlice.reducer; 
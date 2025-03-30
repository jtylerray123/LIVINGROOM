import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
  id: string;
  name: string;
  teamId?: string;
  isHost: boolean;
  deviceId: string;
}

const initialState: PlayerState = {
  id: '',
  name: '',
  isHost: false,
  deviceId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayer: (state, action: PayloadAction<Partial<PlayerState>>) => {
      Object.assign(state, action.payload);
    },
    clearPlayer: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setPlayer, clearPlayer } = playerSlice.actions;
export default playerSlice.reducer; 
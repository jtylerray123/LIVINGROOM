import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import gamesReducer from './slices/gamesSlice';
import roomReducer from './slices/roomSlice';
import playerReducer from './slices/playerSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    games: gamesReducer,
    room: roomReducer,
    player: playerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
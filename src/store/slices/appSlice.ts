import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  currentView: 'home' | 'setup' | 'room' | 'game';
  isMobile: boolean;
}

const initialState: AppState = {
  currentView: 'home',
  isMobile: window.innerWidth < 768,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentView: (state, action: PayloadAction<AppState['currentView']>) => {
      state.currentView = action.payload;
    },
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setCurrentView, setIsMobile } = appSlice.actions;
export default appSlice.reducer; 
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface GameHistoryState {
  games: string[];
}

const initialState: GameHistoryState = {
  games: [],
};

export const gameHistorySlice = createSlice({
  name: 'gameHistory',
  initialState,
  reducers: {
    addGame: (state, action: PayloadAction<string>) => {
      const game = action.payload;
      if (!state.games.includes(game)) {
        state.games.push(game);
      }
    },
    removeGame: (state, action: PayloadAction<string>) => {
      const gameToRemove = action.payload;
      console.log(state.games, gameToRemove);
      state.games = state.games.filter(game => game !== gameToRemove);
    },
    clearState: (state) => {
      state.games = [];
    },
  },
});

export const { addGame, removeGame, clearState } = gameHistorySlice.actions;

export const allGamesHistory = (state: RootState) => state.gameHistory.games;

export default gameHistorySlice.reducer;


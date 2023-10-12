/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

export const GameModeContext = createContext({
  gameMode: '',
  setGameMode: (_gameMode: string) => {},
});

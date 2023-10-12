/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";

interface SettingsContextValue {
  gameMode: string;
  difficulty: string;
  timer: string;
  setGameMode: React.Dispatch<React.SetStateAction<string>>;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  setTimer: React.Dispatch<React.SetStateAction<string>>;
}

interface SettingsProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const SettingsContext = createContext<SettingsContextValue>({
  gameMode: "",
  difficulty: "",
  timer: "",
  setGameMode: () => { },
  setDifficulty: () => { },
  setTimer: () => { },
});

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [gameMode, setGameMode] = useState(localStorage.getItem('gameMode') || 'PVP');
  const [difficulty, setDifficulty] = useState(localStorage.getItem('difficulty') || 'easy');
  const [timer, setTimer] = useState(localStorage.getItem('timer') || '10');

  const value = {
    gameMode,
    difficulty,
    timer,
    setGameMode,
    setDifficulty,
    setTimer,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

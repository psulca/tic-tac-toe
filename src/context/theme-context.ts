/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: '',
  setTheme: (_theme: string) => {},
});

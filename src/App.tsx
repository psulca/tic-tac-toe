import { Outlet } from 'react-router-dom'
import './App.css'

import { ThemeContext } from './context/theme-context'
import { GameModeContext } from './context/gameMode-context'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState('light')
  const [gameMode, setGameMode] = useState('PVP')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GameModeContext.Provider value={{ gameMode, setGameMode }}>
        <div className={`main-container ${theme}`}>
          <Outlet />
        </div>
      </GameModeContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
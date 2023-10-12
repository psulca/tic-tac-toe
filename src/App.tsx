import { Outlet } from 'react-router-dom'
import './App.css'

import { ThemeContext } from './context/theme-context'
import { GameModeContext } from './context/gameMode-context'
import { useState, useMemo, useEffect } from 'react'

function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme')
    || (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'))
  const [gameMode, setGameMode] = useState('PVP')

  const themeValue = useMemo(() => theme, [theme])

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const newTheme = e.matches ? 'dark' : 'light'
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
    })
  }, [themeValue])

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
import { Outlet } from 'react-router-dom'
import './App.css'

import { ThemeContext } from './context/theme-context'
import { useState, useMemo, useEffect } from 'react'
import { SettingsProvider } from './context/settingsContext'

function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme')
    || (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'))

  const themeValue = useMemo(() => theme, [theme])

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const newTheme = e.matches ? 'dark' : 'light'
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
    })
  }, [themeValue])

  return (
    <SettingsProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`main-container ${theme}`}>
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </SettingsProvider>
  )
}

export default App
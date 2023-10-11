import { Outlet } from 'react-router-dom'
import './App.css'

import { ThemeContext } from './context/theme-context'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`main-container ${theme}`}>
        <Outlet />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
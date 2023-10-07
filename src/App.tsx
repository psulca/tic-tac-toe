import { Outlet } from 'react-router-dom'
import HeaderTicTacToe from './components/HeaderTicTacToe'
import './App.css'

function App() {
  return (
    <>
      <HeaderTicTacToe />
      <Outlet />
    </>
  )
}

export default App
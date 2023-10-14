import { Link } from "react-router-dom"
import { PlayButtonSvg } from "../svgs/mainMenuSvgs/PlayButtonSvg"
import { useContext } from "react"
import { SettingsContext } from "../../context/settingsContext"


export default function CardMenu() {

  const { gameMode, setGameMode } = useContext(SettingsContext)

  const handleToPVP = () => {
    if (gameMode === 'PVC') {
      setGameMode('PVP')
      localStorage.setItem('gameMode', 'PVP')
    }
  }

  const handleToPVC = () => {
    if (gameMode === 'PVP') {
      setGameMode('PVC')
      localStorage.setItem('gameMode', 'PVC')
    }
  }

  return (
    <main className='menu-container'>
      <h1>Tic Tac Toe</h1>
      <section className='menu-card'>
        <header className='menu-card-header'>
          <Link to={'/game'} aria-label="Go to game page">
            <PlayButtonSvg />
          </Link>
        </header>
        <section className='menu-card-modes'>
          <h2>Select Game Mode</h2>
          <div className='menu-card-modes-select'>
            <button className={`border-draw border-line-main ${gameMode === 'PVP' && 'selected'}`}
              onClick={handleToPVP}>PVP</button>
            <button className={`border-draw border-line-main ${gameMode === 'PVC' && 'selected'}`}
              onClick={handleToPVC}>PVC</button>
          </div>
        </section>
      </section>
    </main>
  )
}
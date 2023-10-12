import { Link } from "react-router-dom"
import { PlayButtonSvg } from "../svgs/PlayButtonSvg"
import { useContext } from "react"
import { GameModeContext } from "../../context/gameMode-context"


export default function CardMenu() {

  const { gameMode, setGameMode } = useContext(GameModeContext)

  const handleToPVP = () => {
    if(gameMode === 'PVC') {
      setGameMode('PVP')
    }
  }

  const handleToPVC = () => {
    if(gameMode === 'PVP') {
      setGameMode('PVC')
    }
  }

  return (
    <main className='menu-container'>
      <h1>Tic Tac Toe</h1>
      <section className='menu-card'>
        <header className='menu-card-header'>
          <Link to={'/game'}>
            <PlayButtonSvg />
          </Link>
        </header>
        <section className='menu-card-modes'>
          <h3>Select Game Mode</h3>
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
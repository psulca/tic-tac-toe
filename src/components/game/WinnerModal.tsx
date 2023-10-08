import { Link } from "react-router-dom"
interface WinnerModalProps {
  winner: string;
  resetGame: () => void;
}

export default function WinnerModal({ winner, resetGame }: WinnerModalProps) {
  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <h2>{winner}</h2>
        <button onClick={resetGame}>reset game</button>
        <Link to='/'>
          <button> return to main menu</button>
        </Link>
      </div>
    </div>
  )
}
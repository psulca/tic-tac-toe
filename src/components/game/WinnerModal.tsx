import { Link } from "react-router-dom"
import { DrawTextSvg } from "../svgs/modalSvgs/DrawTextSvg";
import { WinTextSvg } from "../svgs/modalSvgs/WinTextSvg";
import { XMarkOneSvg } from "../svgs/gameSvgs/XMarkOneSvg";
import { OMarkOneSvg } from "../svgs/gameSvgs/OMarkOneSvg";

interface WinnerModalProps {
  winner: string;
  resetGame: () => void;
}

export default function WinnerModal({ winner, resetGame }: WinnerModalProps) {
  return (
    <div className='modal-overlay'>
      <div className='modal-container border-draw border-dashed'>
        {winner === 'X' && <XMarkOneSvg id={9} />}
        {winner === 'O' && <OMarkOneSvg id={9} />}
        {winner === 'draw' ? <DrawTextSvg /> : <WinTextSvg /> }
        <button className='border-draw border-line' onClick={resetGame}>reset game</button>
        <Link to='/'>
          <button className='border-draw border-line'> return to main menu</button>
        </Link>
      </div>
    </div>
  )
}
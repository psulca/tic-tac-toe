import { BoardSvg } from "../svgs/gameSvgs/BoardSvg";
import { XMarkOneSvg } from "../svgs/gameSvgs/XMarkOneSvg";
import { OMarkOneSvg } from "../svgs/gameSvgs/OMarkOneSvg";

interface BoardProps {
  board: string[];
  drawSymbolOnBoard: (cell: number) => void;
}

export default function Board({ board, drawSymbolOnBoard }: BoardProps) {

  return (
    <main className='tictactoe-board-container'>
      <div className='tictactoe-board'>
        {board.map((item, index) => (
          <div key={index} className='tictactoe-board-item' onClick={() => drawSymbolOnBoard(index)}>
            {item === 'X' && <XMarkOneSvg id={index} />}
            {item === 'O' && <OMarkOneSvg id={index} />}
          </div>
        ))}
        <BoardSvg />
      </div>
    </main>
  )
}
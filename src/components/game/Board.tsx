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
            <p>{item}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
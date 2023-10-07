import { useState } from "react"

export default function TicTacToe() {

  //const TURNS = ['X', 'O']
  const [board, setBoard] = useState<string[]>(new Array(9).fill(''))
  // const [turn, setTurn] = useState<string>('X')
  // const [winner, setWinner] = useState<string>('')
  // const [score, setScore] = useState<{ X: number, O: number }>({ X: 0, O: 0 })
  // const [isGameOver, setIsGameOver] = useState<boolean>(false)

  return (
    <>
      <section className='tictactoe-container'>
        <header className="tictactoe-score">
          score
        </header>
        <main className='tictactoe-board-container'>
          <div className='tictactoe-board'>
            {
              board.map((item, index) => (
                <div key={index} className='tictactoe-board-item'>
                  {item}
                </div>
              ))
            }
          </div>
        </main>
        <footer className='tictactoe-turn'>
          <div>turn</div>
        </footer>
      </section>
      <dialog open>
        <h2>Winner | Draw</h2>
      </dialog>
    </>
  )
}
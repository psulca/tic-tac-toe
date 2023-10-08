interface TurnProps {
  turn: string;
  score: { X: number; O: number; D: number };
}

export default function TicTacToeFooter({ score, turn }: TurnProps) {
  return (
    <footer className='tictactoe-turn'>
      <section className='tictactoe-score-player'>
        <p>O logo</p>
        <p>{score.O}</p>
      </section>
      <section className='turn-icon'>
        <p>{turn}</p>
      </section>
      <section className='tictactoe-score-player'>
        <p>X logo</p>
        <p>{score.X}</p>
      </section>
    </footer>
  )
}
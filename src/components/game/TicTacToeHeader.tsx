import { Link } from "react-router-dom";

interface ScoreProps {
  scoreD: number;
  round: number;
}

export default function TicTacToeHeader({ scoreD, round }: ScoreProps) {
  return (
    <header className='tictactoe-header'>
      <section className='utility-icon'>
        <Link to='/'>
          <p>back logo</p>
        </Link>
      </section>
      <section className='tictactoe-header-info'>
        <p>
          Round: {round}
        </p>
        <div>
          D logo: {scoreD}
        </div>
      </section>
      <section className='utility-icon'>
        <p>mode logo</p>
      </section>

    </header>
  )
}
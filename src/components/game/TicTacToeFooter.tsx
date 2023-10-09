import { PlayerOneSvg } from "../svgs/PlayerOneSvg";
import { PlayerTwoSvg } from "../svgs/PlayerTwoSvg";
import { TurnArrowSvg } from "../svgs/TurnArrowSvg";

interface TurnProps {
  turn: string;
  score: { X: number; O: number; D: number };
}

export default function TicTacToeFooter({ score, turn }: TurnProps) {
  return (
    <footer className='tictactoe-turn-container'>
      <div className='tictactoe-turn'>
        <section className='tictactoe-score-player'>
          <PlayerOneSvg />
          <p>{score.O}</p>
        </section>
        <section className='turn-icon'>
          {turn}
          <TurnArrowSvg turn={turn} />
          <div>
            {score.D}
          </div>
        </section>
        <section className='tictactoe-score-player'>
          <PlayerTwoSvg />
          <p>{score.X}</p>
        </section>
      </div>
    </footer>
  )
}
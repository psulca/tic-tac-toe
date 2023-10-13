import { PlayerOneSvg } from "../svgs/utilitySvgs/PlayerOneSvg";
import { PlayerTwoSvg } from "../svgs/utilitySvgs/PlayerTwoSvg";
import { TurnArrowSvg } from "../svgs/gameSvgs/TurnArrowSvg";

interface TurnProps {
  turn: string;
  score: { X: number; O: number; D: number };
  time: number;
}

export default function TicTacToeFooter({ score, turn, time }: TurnProps) {


  return (
    <footer className='tictactoe-turn-container'>
      <div className='tictactoe-turn'>
        <section className='tictactoe-score-player'>
          <PlayerOneSvg />
          <p>{score.O}</p>
        </section>
        <section className='turn-icon'>
          {isNaN(time) ? '' : `${time}s`}
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
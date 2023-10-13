import { PlayerOneSvg } from "../svgs/utilitySvgs/PlayerOneSvg";
import { PlayerTwoSvg } from "../svgs/utilitySvgs/PlayerTwoSvg";
import { TurnArrowSvg } from "../svgs/gameSvgs/TurnArrowSvg";
import { ComputerSvg } from "../svgs/utilitySvgs/ComputerSvg";

import { SettingsContext } from "../../context/settingsContext";
import { useContext } from "react";

interface TurnProps {
  turn: string;
  score: { X: number; O: number; D: number };
  time: number;
}

export default function TicTacToeFooter({ score, turn, time }: TurnProps) {

  const { gameMode } = useContext(SettingsContext)

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
          {gameMode === 'PVP' ? <PlayerTwoSvg /> : <ComputerSvg />}
          <p>{score.X}</p>
        </section>
      </div>
    </footer>
  )
}
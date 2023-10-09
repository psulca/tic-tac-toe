import { Link } from 'react-router-dom'
import { BackArrowSvg } from '../svgs/BackArrowSvg'
import { DarkModeSvg } from '../svgs/DarkModeSvg';
import { LightModeSvg } from '../svgs/LightModeSvg';

interface ScoreProps {
  round: number;
}

export default function TicTacToeHeader({ round }: ScoreProps) {
  return (
    <header className='tictactoe-header'>
      <div className='tictactoe-header-content'>
        <div className='tictactoe-nav'>
          <div className='utility-icon'>
            <Link to='/'>
              <BackArrowSvg />
            </Link>
          </div>
          <div className='utility-icon'>
            <DarkModeSvg />
            <LightModeSvg />
          </div>
        </div>

        <section className='tictactoe-round'>
          <p>
            Round: {round}
          </p>
        </section>
      </div>
    </header>
  )
}
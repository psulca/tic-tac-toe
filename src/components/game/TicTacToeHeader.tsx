import { Link } from 'react-router-dom'
import { BackArrowSvg } from '../svgs/utilitySvgs/BackArrowSvg'
import { DarkModeSvg } from '../svgs/utilitySvgs/DarkModeSvg';
import { LightModeSvg } from '../svgs/utilitySvgs/LightModeSvg';



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
            <LightModeSvg />
            <DarkModeSvg />
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
import { Link } from 'react-router-dom'
import { BackArrowSvg } from '../svgs/BackArrowSvg'
import { DarkModeSvg } from '../svgs/DarkModeSvg';
import { LightModeSvg } from '../svgs/LightModeSvg';

import { useContext } from 'react';
import { ThemeContext } from '../../context/theme-context';

interface ScoreProps {
  round: number;
}

export default function TicTacToeHeader({ round }: ScoreProps) {

  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  

  return (
    <header className='tictactoe-header'>
      <div className='tictactoe-header-content'>
        <div className='tictactoe-nav'>
          <div className='utility-icon'>
            <Link to='/'>
              <BackArrowSvg />
            </Link>
          </div>
          <div onClick={handleTheme} className='utility-icon'>
            {theme === 'light' ? <LightModeSvg /> : <DarkModeSvg />}
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
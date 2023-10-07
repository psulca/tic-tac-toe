import { Link } from 'react-router-dom'

export default function Modal({handleModal} : {handleModal : () => void}) {

  return (
    <div className='modal'>
      <h1>Game Settings</h1>
      <div>
        <h2>Select Difficulty</h2>
        <p>easy</p>
        <p>medium</p>
        <p>hard</p>
      </div>
      <div>
        <h2>Time per turn</h2>
        <input type="text" />
      </div>
      <div>
        <h2>First move</h2>
        <p>Player</p>
        <p>Computer</p>
      </div>
      <Link to='game'>
        <button>
          Start Game
        </button>
      </Link>
      <button onClick={handleModal}>Select mode</button>
    </div>
  )
}
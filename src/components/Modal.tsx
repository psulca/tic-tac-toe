export default function Modal() {
  return (
    <div className='modal'>
      <div>
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
      </div>
      <button>
        Start Game
      </button>
    </div>
  )
}
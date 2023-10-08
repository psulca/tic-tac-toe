export default function Modal({ handleModal }: { handleModal: () => void }) {

  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <h1>Game Settings</h1>
        <div>
          <h2>Select Difficulty</h2>
          <select name='difficulty' id='difficulty'>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='impossible'>Impossible</option>
          </select>
        </div>
        <div>
          <h2>Time per turn</h2>
          <select name="timer" id="timer">
            <option value="10">10s</option>
            <option value="20">20s</option>
            <option value="30">30s</option>
            <option value="unlimited">Unlimited</option>
          </select>
        </div>
        <div>
          <h2>First move</h2>
          <select name='move' id="move">
            <option value="player">Player</option>
            <option value="computer">Computer</option>
          </select>
        </div>
        <button className='game-settings-apply' onClick={handleModal}>Apply</button>
      </div>
    </div>
  )
}
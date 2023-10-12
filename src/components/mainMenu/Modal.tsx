export default function Modal({ handleModal }: { handleModal: () => void }) {

  return (
    <div className='modal-overlay'>
      <div className='modal-container border-draw border-dashed'>
        <h2>Game Settings</h2>
        <div>
          <h3>Select Difficulty</h3>
          <select name='difficulty' id='difficulty' className='select-drop'>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='impossible'>Impossible</option>
          </select>
        </div>
        <div>
          <h3>Time per turn</h3>
          <select name="timer" id="timer" className='select-drop'>
            <option value="10">10s</option>
            <option value="20">20s</option>
            <option value="30">30s</option>
            <option value="unlimited">Unlimited</option>
          </select>
        </div>
        <div>
          <h3>First move</h3>
          <select name='move' id="move" className='select-drop'>
            <option value="player">Player</option>
            <option value="computer">Computer</option>
          </select>
        </div>
        <button className='border-draw border-line' onClick={handleModal}>Apply</button>
      </div>
    </div>
  )
}
import { useContext } from "react"
import { SettingsContext } from "../../context/settingsContext"

export default function Modal({ handleModal }: { handleModal: () => void }) {

  const { difficulty, setDifficulty, timer, setTimer } = useContext(SettingsContext)

  const handleDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value)
    localStorage.setItem('difficulty', e.target.value)
  }

  const handleTimer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimer(e.target.value)
    localStorage.setItem('timer', e.target.value)
  }

  return (
    <div className='modal-overlay'>
      <div className='modal-container border-draw border-dashed'>
        <h2>Game Settings</h2>
        <div>
          <h3>Select Difficulty</h3>
          <select name='difficulty' value={difficulty} className='select-drop' onChange={handleDifficulty}>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='impossible'>Impossible</option>
          </select>
        </div>
        <div>
          <h3>Time per turn</h3>
          <select name="timer" value={timer} className='select-drop' onChange={handleTimer}>
            <option value="10">10s</option>
            <option value="20">20s</option>
            <option value="30">30s</option>
            <option value="unlimited">Unlimited</option>
          </select>
        </div>
        <button className='border-draw border-line' onClick={handleModal}>Apply</button>
      </div>
    </div>
  )
}
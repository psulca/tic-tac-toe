import { Link } from "react-router-dom"

export default function CardMenu({ handleModal }: { handleModal: () => void }) {
  return (
    <main className='menu-container'>
      <section className='menu-card'>
        <header className='menu-card-header'>
          <Link to={'/game'}>
            LOGO
          </Link>
        </header>
        <section className='menu-card-modes'>
          <h1>Select Game Mode</h1>
          <div className='menu-card-modes-select'>
            <p>PVP</p>
            <p onClick={handleModal}>PVC</p>
          </div>
        </section>
      </section>
    </main>
  )
}
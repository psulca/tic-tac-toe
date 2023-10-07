export default function CardMenu({ handleModal }: { handleModal: () => void }) {
  return (
    <main className='menu-container'>
      <section className='menu-card'>
        <header className='menu-card-header'>
          <h1>Select Game Mode</h1>
        </header>
        <main className="menu-card-main">
          <p>PVP</p>
          <p onClick={handleModal}>PVC</p>
        </main>
      </section>
    </main>
  )
}
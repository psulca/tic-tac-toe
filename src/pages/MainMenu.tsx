import { useState } from "react"
import CardMenu from "../components/mainMenu/CardMenu"
import Modal from "../components/mainMenu/Modal"
import HeaderMainMenu from '../components/mainMenu/HeaderMainMenu'

export default function MainMenu() {

  const [isConfigModalOpen, handleConfigModal] = useState(false)

  const handleModal = () => {
    handleConfigModal(!isConfigModalOpen)
  }

  return (
    <div className="mainMenu-container">
      <HeaderMainMenu />
      <CardMenu handleModal={handleModal} />
      {isConfigModalOpen && <Modal handleModal={handleModal} />}
    </div>
  )
}
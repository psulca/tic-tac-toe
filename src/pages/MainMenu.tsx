import { useState } from "react"
import CardMenu from "../components/CardMenu"
import Modal from "../components/Modal"


export default function MainMenu() {

  const [isConfigModalOpen, handleConfigModal] = useState(false)

  const handleModal = () => {
    handleConfigModal(!isConfigModalOpen)
  }

  return (
    <>
      <CardMenu handleModal={handleModal}/>
      {isConfigModalOpen && <Modal handleModal={handleModal}/>}
    </>
  )
}
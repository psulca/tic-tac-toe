import { useState } from "react"
import CardMenu from "../components/CardMenu"
import Modal from "../components/Modal"


export default function MainMenu() {

  const [isModalOpen, setModal] = useState(false)

  const handleModal = () => {
    setModal(!isModalOpen)
  }

  return (
    <>
      <CardMenu handleModal={handleModal}/>
      {isModalOpen && <Modal handleModal={handleModal}/>}
    </>
  )
}
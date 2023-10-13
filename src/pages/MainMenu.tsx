import { useState } from "react"
import CardMenu from "../components/mainMenu/CardMenu"
import Modal from "../components/mainMenu/Modal"
import { LightModeSvg } from "../components/svgs/utilitySvgs/LightModeSvg"
import { DarkModeSvg } from "../components/svgs/utilitySvgs/DarkModeSvg"
import { ConfigSvg } from "../components/svgs/mainMenuSvgs/ConfigSvg"

export default function MainMenu() {

  const [isConfigModalOpen, handleConfigModal] = useState(false)

  const handleModal = () => {
    handleConfigModal(!isConfigModalOpen)
  }

  return (
    <div className="mainMenu-container">
      <div className='main-nav'>
        <div className='utility-icon' onClick={handleModal}>
          <ConfigSvg/>
        </div>
        <div className='utility-icon'>
          <LightModeSvg />
          <DarkModeSvg />
        </div>
      </div>
      <CardMenu />
      {isConfigModalOpen && <Modal handleModal={handleModal} />}
    </div>
  )
}
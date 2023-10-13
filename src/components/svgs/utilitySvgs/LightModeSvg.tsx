import { useEffect, useRef, useContext } from "react"
import { ThemeContext } from "../../../context/theme-context"
import Vivus from "vivus"


export function LightModeSvg() {

  const vivusInstance = useRef<Vivus>()
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    vivusInstance.current = new Vivus('light-mode-svg', { type: 'oneByOne' }).setFrameProgress(1)
  }, [])

  const onEnter = () => {
    vivusInstance.current && vivusInstance.current.stop().play(-1)
  }

  const onLeave = () => {
    vivusInstance.current && vivusInstance.current.stop().play(1.5)
  }

  const toDarkMode = () => {
    setTheme('dark')
    localStorage.setItem('theme', 'dark');
  }

  return (
    <svg onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={toDarkMode} id='light-mode-svg' className={theme === 'dark' ? 'dark-on' : ''} height="22" viewBox="0 0 99 81" fill="none" stroke='#DDE6ED' xmlns="http://www.w3.org/2000/svg">
      <path data-ignore="true" d="M33.1142 28.9933C30.9554 29.2472 27.5992 33.6583 26.9329 35.5092C23.9745 43.727 28.656 50.4175 37.0766 52.0808C42.6344 53.1787 49.7133 52.8838 54.6344 49.8443C60.4925 46.226 59.6398 36.2228 57.8395 30.7191C56.8636 27.7356 55.3657 24.8634 52.2393 23.7453C49.6212 22.809 46.9125 22.9748 44.702 24.6963C41.3983 27.2691 38.927 30.3478 36.2841 33.4312" strokeWidth="5" strokeLinecap="round" />
      <path d="M3 60.3754C6.05743 57.0401 9.80934 54.4831 13.1437 51.4997C14.1134 50.6321 16.2611 50.3368 16.9476 48.9637" strokeWidth="5" strokeLinecap="round" />
      <path d="M10.6078 15.6797C12.2213 15.6797 13.7327 17.7737 14.7287 18.832C16.3884 20.5954 18.1337 22.2194 19.8181 23.9038C20.2932 24.3789 21.1337 24.5807 21.4559 25.1894C21.7465 25.7381 22.0707 26.2631 22.6535 26.4574" strokeWidth="5" strokeLinecap="round" />
      <path d="M56.8885 3C56.8885 5.89912 55.8141 9.10991 54.8281 11.8405C54.2207 13.5225 53.0846 15.4461 53.0846 17.2646" strokeWidth="5" strokeLinecap="round" />
      <path d="M68.9342 39.454C69.3404 38.2354 73.8186 38.7137 74.6753 38.6615C79.0063 38.3974 83.2389 38.3083 87.5486 37.7281C90.1197 37.382 92.9823 37.235 95.5615 37.235" strokeWidth="5" strokeLinecap="round" />
      <path d="M60.0584 59.4244C62.6051 59.4244 64.2625 63.0819 65.6058 64.8133C68.3353 68.3314 71.0628 72.2404 73.0551 76.225" strokeWidth="5" strokeLinecap="round" />
      <path d="M38.503 60.3754C38.503 62.7624 37.5564 65.3538 36.7244 67.5606C35.7027 70.2702 34.3175 72.7862 33.0437 75.3797C32.7585 75.9604 32.4616 77.5023 31.8462 77.8099" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}
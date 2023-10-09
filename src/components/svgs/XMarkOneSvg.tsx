import Vivus from "vivus"
import { useEffect } from "react"

export function XMarkOneSvg({ id }: { id: number }) {

  useEffect(() => {
    new Vivus(`xMark${id}`, { duration: 40, type: 'oneByOne' })
  }, [id])

  return (
    <svg id={`xMark${id}`} height="70" viewBox="0 0 72 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5C7.56476 5.42746 9.45562 9.34269 10.8561 11.2489C18.324 21.4135 24.4879 32.3105 32.3164 42.2789C42.5019 55.2484 53.5259 67.5479 63.5607 80.629C63.7559 80.8835 67.6801 86.9884 66.703 84.0569" stroke="#030000" strokeWidth="10" strokeLinecap="round" />
      <path d="M61.5611 15.9265C54.0358 28.9433 44.6113 40.3963 35.8515 52.5627C28.4614 62.8267 20.8671 72.4919 12.7129 82.1287" stroke="#030000" strokeWidth="10" strokeLinecap="round" />
    </svg>
  )
}
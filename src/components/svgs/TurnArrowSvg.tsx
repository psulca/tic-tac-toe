import { useEffect, useState } from "react"

interface TurnArrowProps {
  turn: string;
}

export function TurnArrowSvg({ turn }: TurnArrowProps) {

  const [turnDirection, setTurnDirection] = useState('rotate(0)')

  useEffect(() => {
    if (turn === 'X') {
      setTurnDirection('rotate(0)')
    } else {
      setTurnDirection('rotate(180)')
    }
  }, [turn])

  return (
    <svg id='turn-direction' xmlns="http://www.w3.org/2000/svg" viewBox="1.44546 1.40943 114.3 58.36" transform={turnDirection} fill="#fff">
      <path d="M 75.3638 1.4438 C 79.5079 1.1461 80.47 2.7823 78.2513 6.3525 C 61.5575 13.7366 45.0023 21.4368 28.5863 29.4525 C 56.7873 28.3853 84.9884 27.1344 113.19 25.6988 C 115.4648 25.4701 116.2346 26.4328 115.5 28.5863 C 84.0857 31.2416 52.612 33.5516 21.0788 35.5163 C 33.6938 42.1125 46.3987 48.5614 59.1938 54.8625 C 61.2306 56.1925 61.4229 57.7327 59.7713 59.4825 C 59.1938 59.8677 58.6163 59.8677 58.0388 59.4825 C 39.0134 50.8841 20.2447 41.7405 1.7325 32.0513 C 0.9985 29.9341 1.6722 28.4904 3.7538 27.72 C 27.7373 19.0893 51.6071 10.3304 75.3638 1.4438 Z M 19.3463 28.0088 C 17.1683 29.1978 15.0508 30.5451 12.9938 32.0513 C 12.3169 31.8093 11.7394 31.4247 11.2613 30.8963 C 13.8834 29.7014 16.5785 28.7393 19.3463 28.0088 Z" />
    </svg>
  )
}
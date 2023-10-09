import Vivus from 'vivus'
import { useEffect } from 'react';

export function BoardSvg() {

  useEffect(() => {
    new Vivus('board', { duration: 100, type: 'oneByOne' })
  }, [])

  return (
    <svg id='board' viewBox="0 0 340 352" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M102.889 5.35002C102.889 17.3493 103.288 29.5579 103.614 41.5953C103.943 53.7695 105.788 65.9232 105.788 78.1627C105.788 94.6744 105.788 111.186 105.788 127.698C105.788 136.481 105.064 145.312 105.064 153.996C105.064 161.781 105.242 169.41 104.016 177.112C102.021 189.657 103.614 203.501 103.614 216.136C103.614 224.164 103.614 232.192 103.614 240.219C103.614 248.676 103.614 257.134 103.614 265.591C103.614 280.174 101.521 294.55 100.754 309.125C100.35 316.803 100.714 324.588 100.714 332.282C100.714 336.625 99.5204 342.943 101.439 346.78" stroke="black" strokeWidth="10" strokeLinecap="round" />
      <path d="M223.223 6.79984C223.223 21.5315 221.901 36.9709 223.787 51.5828C225.733 66.6637 225.398 81.8476 225.398 97.0505C225.398 115.874 224.673 134.586 224.673 153.392C224.673 175.87 225.144 198.549 222.861 220.929C221.815 231.173 223.457 241.6 222.337 251.818C221.489 259.552 221.048 267.187 221.048 274.974C221.048 280.058 220.163 285.991 221.209 290.963C222.35 296.383 224.126 301.764 225.237 307.072C226.549 313.342 225.398 321.148 225.398 327.57C225.398 333.49 225.398 339.41 225.398 345.33" stroke="black" strokeWidth="10" strokeLinecap="round" />
      <path d="M5.91385 113C21.8848 113 37.8769 114.547 53.8578 114.547C66.8613 114.547 80.1289 115.08 93.0377 116.494C98.5241 117.096 104.739 117.125 110.251 117.125C114.613 117.125 118.976 117.125 123.339 117.125C129.083 117.125 134.939 117.703 140.667 118.127C148.542 118.71 156.586 117.971 164.438 118.929C176.558 120.407 189.67 119.187 201.871 119.187C219.509 119.187 237.089 118.671 254.712 118.671C263.694 118.671 272.661 119.094 281.606 119.187C292.78 119.302 303.931 118.671 315.086 118.671C321.654 118.671 328.422 118.156 334.819 118.156" stroke="black" strokeWidth="10" strokeLinecap="round" />
      <path d="M6.3154 245.058C16.9289 245.058 27.5423 245.058 38.1558 245.058C42.7073 245.058 46.8677 244.646 51.3505 244.193C56.9732 243.625 62.6214 243.725 68.2225 243.025C81.0309 241.424 94.1755 241.554 107.071 241.554C114.633 241.554 122.237 241.165 129.827 241.165C138.101 241.165 146.77 240.846 154.962 239.694C162.666 238.611 170.728 239.218 178.496 239.218C187.553 239.218 196.596 238.829 205.664 238.829C210.648 238.829 215.649 238.712 220.632 238.85C224.092 238.947 227.516 239.57 230.972 239.607C232.833 239.628 234.76 239.435 236.596 239.802C242.139 240.911 247.861 239.563 253.36 240.581C257.583 241.363 262.016 240.583 266.208 241.36C271.379 242.317 276.939 241.944 282.193 241.944C286.451 241.944 290.617 242.722 294.826 242.722C298.583 242.722 302.219 243.501 305.944 243.501C309.837 243.501 313.731 243.501 317.624 243.501C321.568 243.501 324.648 241.119 328.31 240.386" stroke="black" strokeWidth="10" strokeLinecap="round" />
    </svg>

  )
}
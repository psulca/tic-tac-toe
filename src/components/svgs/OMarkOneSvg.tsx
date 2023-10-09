import Vivus from "vivus"
import { useEffect } from "react"

export function OMarkOneSvg({ id }: { id: number }) {

  useEffect(() => {
    new Vivus(`oMark${id}`, { duration: 40, type: 'oneByOne' })
  }, [id])

  return (
    <svg id={`oMark${id}`} height="70" viewBox="0 0 71 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M39.6328 7.4177C30.9543 7.4177 23.7603 12.8622 18.2081 19.4869C11.2422 27.7985 6.70933 40.7144 10.2096 51.4811C13.5119 61.6387 24.3409 65.3546 33.991 64.8358C42.4144 64.3829 53.4379 58.6623 58.4865 51.7667C62.4661 46.3312 62.1802 36.7907 60.5575 30.5563C58.5611 22.8857 52.659 14.5844 46.5601 9.63158C42.5505 6.37548 35.3273 2.31748 31.2772 7.4177C29.2934 9.91573 27.7782 12.7727 26.778 15.7733" stroke="black" strokeWidth="10" strokeLinecap="round" />
    </svg>

  )
}
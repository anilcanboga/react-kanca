import { useEffect, useState } from 'react'

export const useScrollDirection = ({
  threshold = 10,
  initialDirection = 'down'
} = {}) => {
  const [scrollDir, setScrollDir] = useState(initialDirection)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      const direction = scrollY > lastScrollY ? 'down' : 'up'
      setScrollDir(direction)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrollDir
}

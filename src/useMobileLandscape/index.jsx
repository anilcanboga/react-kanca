import { useState, useEffect } from 'react'

export const useMobileLandscape = () => {
  const [isLandscape, setIsLandscape] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileLandscape, setIsMobileLandscape] = useState(false)

  const handleResize = () => {
    const landscape = window.innerWidth > window.innerHeight
    const mobile = window.innerWidth <= 996
    setIsLandscape(landscape)
    setIsMobile(mobile)
    setIsMobileLandscape(landscape && mobile)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { isMobileLandscape, isLandscape, isMobile }
}

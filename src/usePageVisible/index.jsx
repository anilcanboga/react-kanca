import { useState, useEffect } from 'react'

export const usePageVisible = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleVisibilityChange = () => {
    setIsVisible(document.visibilityState === 'visible')
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return isVisible
}

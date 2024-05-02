import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [size, setSize] = useState({ width: '', height: '' })

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return size
}

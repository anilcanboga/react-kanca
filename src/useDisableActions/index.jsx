import { useEffect } from 'react'

export const useDisableActions = () => {
  useEffect(() => {
    const handleEvent = (e) => e.preventDefault()

    document.addEventListener('copy', handleEvent)
    document.addEventListener('cut', handleEvent)
    document.addEventListener('paste', handleEvent)
    document.addEventListener('selectstart', handleEvent)

    return () => {
      document.removeEventListener('copy', handleEvent)
      document.removeEventListener('cut', handleEvent)
      document.removeEventListener('paste', handleEvent)
      document.removeEventListener('selectstart', handleEvent)
    }
  }, [])
}

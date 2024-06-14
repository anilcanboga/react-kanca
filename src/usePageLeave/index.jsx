import { useEffect } from 'react'

export const usePageLeave = (onLeave) => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const returnValue = onLeave()
      if (returnValue) {
        event.preventDefault()
        event.returnValue = returnValue
        return returnValue
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [onLeave])
}

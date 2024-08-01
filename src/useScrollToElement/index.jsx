import { useCallback } from 'react'

export const useScrollToElement = () => {
  const scrollToElement = useCallback((selectorOrRef, options = {}) => {
    let element

    if (typeof selectorOrRef === 'string') {
      element = document.querySelector(selectorOrRef)
    } else if (selectorOrRef.current) {
      element = selectorOrRef.current
    }

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', ...options })
    }
  }, [])

  return scrollToElement
}

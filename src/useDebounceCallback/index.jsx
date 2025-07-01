import { useRef, useEffect, useCallback } from 'react'

export function useDebounceCallback(callback, delay) {
  const timeoutRef = useRef(null)

  const debouncedFn = useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay]
  )

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  return debouncedFn
}

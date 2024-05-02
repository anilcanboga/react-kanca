import { useState, useEffect } from 'react'

export const useDebounce = (value, delay) => {
  const [debounce, setDebounce] = useState('')

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debounce
}

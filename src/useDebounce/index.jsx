import { useState, useEffect } from 'react'

/* export const useDebounce = (value, delay) => {
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
} */

export const useDebounce = () => {
  const [debouncedValue, setDebouncedValue] = useState(null)

  const debounce = (value, delay) => {
    const handler = setTimeout(() => {
      if (typeof value === 'function') {
        value()
      } else {
        setDebouncedValue(value)
      }
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }

  return [debouncedValue, debounce]
}

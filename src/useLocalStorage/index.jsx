import { useState, useCallback, useEffect } from 'react'

export function useLocalStorage(key, initialValue, options = {}) {
  const isBrowser = typeof window !== 'undefined'

  const readRaw = () => {
    if (!isBrowser) return false

    const item = localStorage.getItem(key)
    if (item === null) return typeof initialValue === 'string'

    try {
      JSON.parse(item)
      return false // parse edilebiliyorsa json
    } catch {
      return true // parse edilemiyorsa düz string
    }
  }

  const shouldUseRaw = options?.raw ?? readRaw()

  const serializer = shouldUseRaw
    ? String
    : options?.serializer || JSON.stringify

  const deserializer = shouldUseRaw
    ? (value) => value
    : options?.deserializer || JSON.parse

  const readValue = () => {
    if (!isBrowser) return initialValue

    try {
      const item = localStorage.getItem(key)
      return item !== null ? deserializer(item) : initialValue
    } catch (error) {
      console.warn(`useLocalStorage read error for key "${key}":`, error)
      return initialValue
    }
  }

  const [storedValue, setStoredValue] = useState(readValue)

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value

        setStoredValue(valueToStore)
        localStorage.setItem(key, serializer(valueToStore))
      } catch (error) {
        console.warn(`useLocalStorage write error for key "${key}":`, error)
      }
    },
    [key, storedValue, serializer]
  )

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key)
      setStoredValue(undefined)
    } catch (error) {
      console.warn(`useLocalStorage remove error for key "${key}":`, error)
    }
  }, [key])

  useEffect(() => {
    setStoredValue(readValue())
  }, [key])

  return [storedValue, setValue, remove]
}

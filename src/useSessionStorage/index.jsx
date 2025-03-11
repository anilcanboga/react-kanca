import { useState, useCallback } from 'react'

const safeJSONParse = (value) => {
  try {
    return JSON.parse(value)
  } catch {
    return value // Eğer JSON formatı değilse, direkt string olarak döndür
  }
}

export const useSessionStorage = (key, initialValue, options) => {
  if (!key) {
    throw new Error('useSessionStorage key may not be falsy')
  }

  const deserializer = options?.raw ? (value) => value : safeJSONParse

  const serializer = options?.raw
    ? String
    : (value) => (typeof value === 'string' ? value : JSON.stringify(value))

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key)
      if (item !== null) {
        return deserializer(item)
      } else if (initialValue !== undefined) {
        // Eğer initialValue varsa sessionStorage'a yaz
        window.sessionStorage.setItem(key, serializer(initialValue))
        return initialValue
      }
      return undefined
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback(
    (valueOrFunc) => {
      try {
        setStoredValue((prev) => {
          const newValue =
            typeof valueOrFunc === 'function' ? valueOrFunc(prev) : valueOrFunc

          if (typeof newValue === 'undefined') return prev

          const valueToStore = serializer(newValue)
          window.sessionStorage.setItem(key, valueToStore)
          return deserializer(valueToStore)
        })
      } catch {
        // Hata yönetimi
      }
    },
    [key, deserializer, serializer]
  )

  const remove = useCallback(() => {
    try {
      window.sessionStorage.removeItem(key)
      setStoredValue(undefined)
    } catch {
      // Hata yönetimi
    }
  }, [key])

  return [storedValue, setValue, remove]
}

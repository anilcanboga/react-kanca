import { useCallback, useState, useRef, useLayoutEffect } from 'react'
import { isBrowser, noop } from '../utils/util'

export const useLocalStorage = (key, initialValue = undefined, options) => {
  if (!isBrowser) {
    return [initialValue, noop, noop]
  }
  if (!key) {
    throw new Error('useLocalStorage key may not be falsy')
  }

  const deserializer = options?.raw
    ? (value) => value
    : options?.deserializer || JSON.parse

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const initializer = useRef((key) => {
    try {
      const serializer = options?.raw
        ? String
        : options?.serializer || JSON.stringify

      const localStorageValue = localStorage.getItem(key)
      if (localStorageValue !== null) {
        return deserializer(localStorageValue)
      } else if (initialValue !== undefined) {
        localStorage.setItem(key, serializer(initialValue))
        return initialValue
      }
      return undefined
    } catch {
      return initialValue
    }
  })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState(() => initializer.current(key))

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    setState(initializer.current(key))
  }, [key])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const safeJSONParse = (value) => {
    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  }

  const set = useCallback(
    (valOrFunc) => {
      try {
        setState((prev) => {
          const newState =
            typeof valOrFunc === 'function' ? valOrFunc(prev) : valOrFunc
          if (typeof newState === 'undefined') return prev

          const value = options?.raw
            ? String(newState)
            : options?.serializer
              ? options.serializer(newState)
              : typeof newState === 'string'
                ? newState
                : JSON.stringify(newState)

          localStorage.setItem(key, value)
          return safeJSONParse(value)
        })
      } catch {
        // Hata yönetimi
      }
    },
    [key, setState]
  )

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key)
      setState(undefined)
    } catch {
      // localStorage hatası yönetimi
    }
  }, [key, setState])

  return [state, set, remove]
}

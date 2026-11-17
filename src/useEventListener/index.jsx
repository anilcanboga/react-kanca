import { useEffect, useRef } from 'react'

export function useEventListener(eventName, handler, element, options) {
  const savedHandler = useRef(handler)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  const capture = typeof options === 'boolean' ? options : options?.capture
  const passive = options?.passive
  const once = options?.once
  const signal = options?.signal

  useEffect(() => {
    const target =
      element === undefined
        ? typeof window !== 'undefined'
          ? window
          : null
        : element && 'current' in Object(element)
          ? element.current
          : element

    if (!target || typeof target.addEventListener !== 'function') {
      return
    }

    const listener = (event) => {
      savedHandler.current(event)
    }

    const listenerOptions = {
      capture,
      passive,
      once,
      signal
    }

    target.addEventListener(eventName, listener, listenerOptions)

    return () => {
      target.removeEventListener(eventName, listener, capture)
    }
  }, [eventName, element, capture, passive, once, signal])
}

import { useCallback, useEffect } from 'react'
import { off, on } from '../utils/util'

export const useBeforeUnload = (enabled = true, message) => {
  const handler = useCallback(
    (event) => {
      const finalEnabled = typeof enabled === 'function' ? enabled() : true

      if (!finalEnabled) {
        return
      }

      event.preventDefault()

      if (message) {
        event.returnValue = message
      }

      return message
    },
    [enabled, message]
  )

  useEffect(() => {
    if (!enabled) {
      return
    }

    on(window, 'beforeunload', handler)

    return () => off(window, 'beforeunload', handler)
  }, [enabled, handler])
}

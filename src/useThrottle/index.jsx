import { useEffect, useRef, useState } from 'react'

const useEffectOnce = (effect) => {
  useEffect(effect, [])
}

const useUnmount = (fn) => {
  const fnRef = useRef(fn)
  fnRef.current = fn
  useEffectOnce(() => () => fnRef.current())
}

export const useThrottle = (value, ms = 200) => {
  const [state, setState] = useState(value)
  const timeout = useRef()
  const nextValue = useRef(null)
  const hasNextValue = useRef(0)

  useEffect(() => {
    if (!timeout.current) {
      setState(value)
      const timeoutCallback = () => {
        if (hasNextValue.current) {
          hasNextValue.current = false
          setState(nextValue.current)
          timeout.current = setTimeout(timeoutCallback, ms)
        } else {
          timeout.current = undefined
        }
      }
      timeout.current = setTimeout(timeoutCallback, ms)
    } else {
      nextValue.current = value
      hasNextValue.current = true
    }
  }, [value])

  useUnmount(() => {
    timeout.current && clearTimeout(timeout.current)
  })

  return state
}

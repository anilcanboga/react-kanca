import { useSyncExternalStore, useState, useRef, useEffect } from 'react'
import { deepAssign } from './deepAssign'
import { deepClone } from './deepClone'
import {
  createOrGetState,
  subscribeToGlobalState,
  getGlobalSnapshot,
  setGlobalState
} from './store'

export const useS = (
  keyOrInitialValue,
  initialValueOrGlobal,
  globalOrPersistent,
  persistentParam
) => {
  const hasSecondParam = initialValueOrGlobal !== undefined
  const isKeyFirst = typeof keyOrInitialValue === 'string' && hasSecondParam

  const key = isKeyFirst
    ? keyOrInitialValue
    : `useD_${Math.random().toString(36).substr(2, 9)}`
  const initialValue = isKeyFirst ? initialValueOrGlobal : keyOrInitialValue
  const global = isKeyFirst ? globalOrPersistent : false
  const persistent = isKeyFirst ? persistentParam : false

  const initialized = useRef(false)

  function getPersistentValue() {
    if (typeof window === 'undefined' || !persistent) return undefined
    try {
      const stored = localStorage.getItem(key)
      if (stored !== null) {
        if (typeof initialValue === 'string') {
          return stored
        } else {
          return JSON.parse(stored)
        }
      }
    } catch {}
    return undefined
  }

  function setPersistentValue(val) {
    if (typeof window === 'undefined' || !persistent) return
    try {
      if (typeof val === 'string') {
        localStorage.setItem(key, val)
      } else {
        localStorage.setItem(key, JSON.stringify(val))
      }
    } catch {}
  }

  const persistentValue = getPersistentValue()
  const initial = persistentValue !== undefined ? persistentValue : initialValue

  if (global && !initialized.current) {
    createOrGetState(key, initial)
    initialized.current = true
  }

  const globalState = useSyncExternalStore(
    (cb) => subscribeToGlobalState(key, cb),
    () => getGlobalSnapshot(key)
  )

  const [localState, setLocalState] = useState(initial)

  const setState = (val) => {
    const current = global ? getGlobalSnapshot(key) : localState
    let cloned = deepClone(current)

    const resolved = typeof val === 'function' ? val(cloned) : val

    if (
      typeof cloned === 'object' &&
      cloned !== null &&
      typeof resolved === 'object' &&
      resolved !== null &&
      !Array.isArray(cloned) &&
      !Array.isArray(resolved)
    ) {
      deepAssign(cloned, resolved)
    } else {
      cloned = resolved
    }

    if (global) {
      setGlobalState(key, cloned)
    } else {
      setLocalState(cloned)
    }
    setPersistentValue(cloned)
  }

  useEffect(() => {
    if (!persistent) return
    const value = global ? globalState : localState
    setPersistentValue(value)
  }, [global ? globalState : localState])

  return [global ? globalState : localState, setState]
}

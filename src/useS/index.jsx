import { useSyncExternalStore, useState, useRef } from 'react'
import { deepClone } from './deepClone.js'
import { deepAssign } from './deepAssign.js'
import {
  createOrGetState,
  subscribeToGlobalState,
  getGlobalSnapshot,
  setGlobalState
} from './store.js'

export const useS = (key, initialValue, global = false) => {
  const initialized = useRef(false)

  if (global && !initialized.current) {
    createOrGetState(key, initialValue)
    initialized.current = true
  }

  const globalState = useSyncExternalStore(
    (cb) => subscribeToGlobalState(key, cb),
    () => getGlobalSnapshot(key)
  )

  const [localState, setLocalState] = useState(initialValue)

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
  }

  return [global ? globalState : localState, setState]
}

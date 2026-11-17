import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

const getSnapshot = () => true
const getServerSnapshot = () => false

export function useIsClient() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

const store = new Map()

export function createOrGetState(key, initial) {
  if (!store.has(key)) {
    store.set(key, {
      value: initial,
      listeners: new Set()
    })
  }
  return store.get(key)
}

export function setGlobalState(key, newValue) {
  const entry = store.get(key)
  if (entry) {
    entry.value = newValue
    entry.listeners.forEach((fn) => fn())
  }
}

export function subscribeToGlobalState(key, listener) {
  const entry = store.get(key)
  if (!entry) return () => {}
  entry.listeners.add(listener)
  return () => entry.listeners.delete(listener)
}

export function getGlobalSnapshot(key) {
  const entry = store.get(key)
  return entry?.value
}

export function debugGlobalStore() {
  console.log('Global store snapshot:')
  for (const [key, entry] of store.entries()) {
    console.log(`useS key name -> ${key}:`, entry.value)
  }
}

export function deepClone(value) {
  if (Array.isArray(value)) {
    return value.map(deepClone)
  }

  if (value && typeof value === 'object') {
    const clone = {}
    for (const key in value) {
      clone[key] = deepClone(value[key])
    }
    return clone
  }

  return value
}

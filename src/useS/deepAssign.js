export function deepAssign(target, source) {
  for (const key in source) {
    const sourceValue = source[key]
    const targetValue = target[key]

    if (
      typeof sourceValue === 'object' &&
      sourceValue !== null &&
      !Array.isArray(sourceValue) &&
      typeof targetValue === 'object' &&
      targetValue !== null &&
      !Array.isArray(targetValue)
    ) {
      deepAssign(targetValue, sourceValue)
    } else {
      target[key] = sourceValue
    }
  }

  return target
}

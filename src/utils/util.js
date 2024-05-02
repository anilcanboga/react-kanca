export const noop = () => {}

export function on(obj, ...args) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args)
  }
}

export function off(obj, ...args) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args)
  }
}

export const isBrowser = typeof window !== 'undefined'

export const isNavigator = typeof navigator !== 'undefined'

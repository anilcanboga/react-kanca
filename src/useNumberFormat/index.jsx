import { useMemo } from 'react'

export function useNumberFormat(value, locale = navigator.language) {
  return useMemo(() => {
    return new Intl.NumberFormat(locale).format(value)
  }, [value, locale])
}

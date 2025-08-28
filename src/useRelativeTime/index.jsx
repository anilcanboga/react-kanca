import { useMemo } from 'react'

export function useRelativeTime(
  value,
  unit = 'day',
  locale = navigator.language
) {
  return useMemo(() => {
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
    return rtf.format(value, unit)
  }, [value, unit, locale])
}

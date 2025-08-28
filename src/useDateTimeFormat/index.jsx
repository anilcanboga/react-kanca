import { useMemo } from 'react'

export function useDateTimeFormat(
  date,
  options = {},
  locale = navigator.language
) {
  return useMemo(() => {
    return new Intl.DateTimeFormat(locale, options).format(date)
  }, [date, locale, JSON.stringify(options)])
}

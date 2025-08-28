import { useMemo } from 'react'

export function useCurrency(
  value,
  currencyCode = 'USD',
  locale = navigator.language
) {
  return useMemo(() => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode
    }).format(value)
  }, [value, currencyCode, locale])
}

import { useCallback, useState } from 'react'

const getCookie = (name) => {
  const match = document.cookie.match(
    new RegExp(
      '(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'
    )
  )
  return match ? decodeURIComponent(match[1]) : null
}

const setCookie = (name, value, options = {}) => {
  const { days, seconds, path = '/' } = options
  let expires = ''

  if (days || seconds) {
    const date = new Date()
    if (days) date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    if (seconds) date.setTime(date.getTime() + seconds * 1000)
    expires = '; expires=' + date.toUTCString()
  }

  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=${path}`
}

const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
}

export const useCookie = (cookieName) => {
  const [value, setValue] = useState(() => getCookie(cookieName))

  const updateCookie = useCallback(
    (newValue, options) => {
      setCookie(cookieName, newValue, options)
      setValue(newValue)
    },
    [cookieName]
  )

  const removeCookie = useCallback(() => {
    deleteCookie(cookieName)
    setValue(null)
  }, [cookieName])

  return [value, updateCookie, removeCookie]
}

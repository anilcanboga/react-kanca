import { useEffect, useRef } from "react"

const getCookieValue = name => {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
  return match ? decodeURIComponent(match[2]) : undefined
}

export const useCookieListener = (cookieName, onChange) => {
  const lastValue = useRef(getCookieValue(cookieName))

  useEffect(() => {
    const checkCookie = () => {
      const currentValue = getCookieValue(cookieName)
      if (currentValue !== lastValue.current) {
        lastValue.current = currentValue
        onChange(currentValue)
      }
    }

    const intervalId = setInterval(checkCookie, 1000)

    return () => clearInterval(intervalId)
  }, [cookieName, onChange])
}

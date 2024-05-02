import { useState, useEffect } from 'react'

export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState(getInitialColorScheme())

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (e) => {
      setColorScheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', listener)

    return () => {
      mediaQuery.removeEventListener('change', listener)
    }
  }, [])

  function getInitialColorScheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    return isDarkMode ? 'dark' : 'light'
  }

  return colorScheme
}

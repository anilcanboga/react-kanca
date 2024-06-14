import { useState, useEffect } from 'react'

export const usePreferredLanguage = () => {
  const [preferredLanguage, setPreferredLanguage] = useState('')

  useEffect(() => {
    const language = navigator.language || navigator.userLanguage
    setPreferredLanguage(language)
  }, [])

  return preferredLanguage
}

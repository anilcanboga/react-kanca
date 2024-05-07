import { useState } from 'react'

export const useSessionStorage = (key, initialValue) => {
  // İlk değeri sessionStorage'den alıyoruz, yoksa belirlenen başlangıç değerini kullanıyoruz
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  // State güncellendiğinde, sessionStorage'ye de yazıyoruz
  const setValue = (value) => {
    try {
      setStoredValue(value)
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}

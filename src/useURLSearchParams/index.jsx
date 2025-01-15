import { useState, useEffect } from 'react'

export const useURLSearchParams = () => {
  const [searchParams, setSearchParams] = useState(
    new URLSearchParams(window.location.search)
  )

  useEffect(() => {
    const handlePopState = () => {
      setSearchParams(new URLSearchParams(window.location.search))
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const updateSearchParams = (newParams) => {
    const params = new URLSearchParams(searchParams)
    Object.keys(newParams).forEach((key) => {
      if (newParams[key] === null) {
        params.delete(key)
      } else {
        params.set(key, newParams[key])
      }
    })
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.pushState({}, '', newUrl)
    setSearchParams(params)
  }

  return [searchParams, updateSearchParams]
}

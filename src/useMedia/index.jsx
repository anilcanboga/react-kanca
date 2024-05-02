import { useEffect, useState } from 'react'

export const useMedia = (width = 1024) => {
  const [screenStatus, setScreenStatus] = useState(
    window.matchMedia(`(max-width: ${width}px)`).matches
  )

  useEffect(() => {
    const matchMedia = window.matchMedia(`(max-width: ${width}px)`)

    const onChangeHandle = (e) => {
      console.log(e.matches)
      setScreenStatus(e.matches)
    }

    matchMedia.addEventListener('change', onChangeHandle)
  })

  return screenStatus
}

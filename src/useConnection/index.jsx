import { useEffect, useState } from 'react'

export const useConnection = () => {
  const [status, setStatus] = useState(true)

  useEffect(() => {
    const events = ['online', 'offline']
    const eventHandle = () => setStatus(navigator.online)
    events.forEach((event) => window.addEventListener(event, eventHandle))

    return () => {
      events.forEach((event) => window.removeEventListener(event, eventHandle))
    }
  }, [])

  return { status }
}

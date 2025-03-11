import { useState, useEffect, useRef } from 'react'

export const useUserAnalytics = ({ inactiveTimeout = 10000 } = {}) => {
  const [isActive, setIsActive] = useState(true)
  const [totalActiveTime, setTotalActiveTime] = useState(0)
  const [totalInactiveTime, setTotalInactiveTime] = useState(0)

  const lastActivityRef = useRef(Date.now())
  const isActiveRef = useRef(isActive)
  const intervalRef = useRef(null)

  useEffect(() => {
    isActiveRef.current = isActive
  }, [isActive])

  const updateActivity = () => {
    lastActivityRef.current = Date.now()
    if (!isActiveRef.current) {
      setIsActive(true)
    }
  }

  const checkInactivity = () => {
    if (Date.now() - lastActivityRef.current >= inactiveTimeout) {
      setIsActive(false)
    }
  }

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      setIsActive(false)
    } else {
      updateActivity()
    }
  }

  useEffect(() => {
    const handleMouseMove = () => updateActivity()
    const handleClick = () => updateActivity()
    const handleKeydown = () => updateActivity()
    const handleTouch = () => updateActivity()

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('touchstart', handleTouch)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    intervalRef.current = setInterval(() => {
      checkInactivity()
      if (isActiveRef.current) {
        setTotalActiveTime((prev) => prev + 1)
      } else {
        setTotalInactiveTime((prev) => prev + 1)
      }
    }, 1000)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('touchstart', handleTouch)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      clearInterval(intervalRef.current)
    }
  }, [inactiveTimeout])

  return {
    isActive,
    lastActivity: lastActivityRef.current,
    totalActiveTime,
    totalInactiveTime
  }
}

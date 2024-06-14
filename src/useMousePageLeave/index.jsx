import { useEffect } from 'react'

export function useMousePageLeave(onPageLeave) {
  useEffect(() => {
    document.documentElement.addEventListener('mouseleave', onPageLeave)
    return () =>
      document.documentElement.removeEventListener('mouseleave', onPageLeave)
  }, [])
}

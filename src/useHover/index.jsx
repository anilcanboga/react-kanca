import { useState, useRef, useEffect } from 'react'

export const useHover = () => {
  const [state, setState] = useState(false)
  const ref = useRef(null)

  const onMouseEnter = () => setState(true)
  const onMouseLeave = () => setState(false)

  useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener('mouseenter', onMouseEnter)
      node.addEventListener('mouseleave', onMouseLeave)

      return () => {
        node.removeEventListener('mouseenter', onMouseEnter)
        node.removeEventListener('mouseleave', onMouseLeave)
      }
    }
  }, [])

  return [ref, state]
}

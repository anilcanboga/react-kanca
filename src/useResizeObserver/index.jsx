import { useEffect, useState } from 'react'

export function useResizeObserver({ ref, box = 'content-box' }) {
  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const element = ref?.current

    if (!element || typeof ResizeObserver === 'undefined') {
      return
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return

      let width
      let height

      if (box === 'border-box') {
        const borderBox = entry.borderBoxSize
        const dimensions = Array.isArray(borderBox) ? borderBox[0] : borderBox

        const fallback = entry.target.getBoundingClientRect()

        width = dimensions?.inlineSize ?? fallback.width
        height = dimensions?.blockSize ?? fallback.height
      } else {
        width = entry.contentRect.width
        height = entry.contentRect.height
      }

      setSize((previous) => {
        if (previous.width === width && previous.height === height) {
          return previous
        }

        return { width, height }
      })
    })

    observer.observe(element, { box })

    return () => {
      observer.disconnect()
    }
  }, [ref, box])

  return size
}

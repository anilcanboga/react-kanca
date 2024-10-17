import { useRef } from 'react'

export const useSelection = () => {
  const elementRef = useRef(null)

  const getSelectedText = () => {
    if (elementRef.current) {
      const selection = window.getSelection()
      const range = selection.getRangeAt(0)
      return range.toString()
    }
    return ''
  }

  return {
    elementRef,
    getSelectedText
  }
}

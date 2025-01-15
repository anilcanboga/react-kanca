import { useEffect } from 'react'

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = 'react-kanca'
    }
  }, [title])
}

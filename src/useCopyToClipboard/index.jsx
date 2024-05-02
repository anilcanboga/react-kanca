import { useState } from 'react'

export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true)
      })
      .catch((err) => {
        setError(err)
      })
  }

  return { copied, error, copyToClipboard }
}

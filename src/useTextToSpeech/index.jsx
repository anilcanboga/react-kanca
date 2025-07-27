import { useEffect, useState, useRef, useCallback } from "react"

export const useTextToSpeech = () => {
  const [speaking, setSpeaking] = useState(false)
  const [paused, setPaused] = useState(false)
  const [supported, setSupported] = useState(false)
  const [voices, setVoices] = useState([])

  const utteranceRef = useRef(null)

  useEffect(() => {
    if ("speechSynthesis" in window) {
      setSupported(true)
      const populateVoices = () => {
        const allVoices = window.speechSynthesis.getVoices()
        setVoices(allVoices)
      }

      populateVoices()

      // bazı tarayıcılarda sesler async yükleniyor
      window.speechSynthesis.onvoiceschanged = populateVoices
    }
  }, [])

  const speak = useCallback(
    (text, options) => {
      if (!supported) return

      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel()
      }

      const utterance = new SpeechSynthesisUtterance(text)

      if (options?.lang) utterance.lang = options.lang
      if (options?.voiceURI) {
        const selectedVoice = voices.find(v => v.voiceURI === options.voiceURI)
        if (selectedVoice) utterance.voice = selectedVoice
      }

      utterance.rate = options?.rate ?? 1
      utterance.pitch = options?.pitch ?? 1
      utterance.volume = options?.volume ?? 1

      utterance.onstart = () => {
        setSpeaking(true)
        setPaused(false)
      }
      utterance.onend = () => {
        setSpeaking(false)
        setPaused(false)
      }
      utterance.onerror = () => {
        setSpeaking(false)
        setPaused(false)
      }

      utteranceRef.current = utterance
      window.speechSynthesis.speak(utterance)
    },
    [supported, voices]
  )

  const pause = () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause()
      setPaused(true)
    }
  }

  const resume = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume()
      setPaused(false)
    }
  }

  const cancel = () => {
    window.speechSynthesis.cancel()
    setSpeaking(false)
    setPaused(false)
  }

  return {
    speak,
    pause,
    resume,
    cancel,
    speaking,
    paused,
    supported,
    voices
  }
}

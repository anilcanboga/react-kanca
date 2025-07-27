import { useEffect, useRef, useState } from "react"

export const useSpeechToText = ({ lang = "en-US", interim = true } = {}) => {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [interimTranscript, setInterimTranscript] = useState("")
  const [error, setError] = useState(null)

  const recognitionRef = useRef(null)

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      setError("Speech Recognition bu tarayıcıda desteklenmiyor.")
      return
    }

    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = interim
    recognition.lang = lang

    recognition.onresult = event => {
      let finalTranscript = ""
      let interimTranscriptLocal = ""

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const result = event.results[i]
        if (result.isFinal) {
          finalTranscript += result[0].transcript + " "
        } else {
          interimTranscriptLocal += result[0].transcript
        }
      }

      if (finalTranscript) {
        setTranscript(prev => prev + finalTranscript)
        setInterimTranscript("")
      } else {
        setInterimTranscript(interimTranscriptLocal)
      }
    }

    recognition.onerror = event => {
      setError(`Recognition error: ${event.error}`)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognitionRef.current = recognition
  }, [lang, interim])

  const startListening = () => {
    if (recognitionRef.current) {
      setTranscript("") // reset on each start
      setInterimTranscript("")
      recognitionRef.current.start()
      setIsListening(true)
    }
  }

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
  }

  return {
    transcript,
    interimTranscript,
    isListening,
    error,
    startListening,
    stopListening
  }
}

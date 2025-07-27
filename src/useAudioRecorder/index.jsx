import { useState, useRef, useCallback } from "react"

export const useAudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [audioURL, setAudioURL] = useState(null)
  const mediaRecorderRef = useRef(null)
  const audioChunks = useRef([])

  const startRecording = useCallback(async () => {
    setAudioURL(null) // önceki sesi temizle
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)

      mediaRecorderRef.current = mediaRecorder
      audioChunks.current = []

      mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
          audioChunks.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks.current, { type: "audio/webm" })
        const url = URL.createObjectURL(blob)
        setAudioURL(url)
        stream.getTracks().forEach(track => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error("Mikrofona erişilemedi:", error)
    }
  }, [])

  const stopRecording = useCallback(() => {
    mediaRecorderRef.current?.stop()
    setIsRecording(false)
  }, [])

  return {
    isRecording,
    audioURL,
    startRecording,
    stopRecording
  }
}
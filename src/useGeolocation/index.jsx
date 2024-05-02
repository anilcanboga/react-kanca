import { useEffect, useState } from 'react'

export const useGeolocation = (options) => {
  const [state, setState] = useState({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: Date.now()
  })
  let mounted = true
  let watchId

  const onEvent = (event) => {
    if (mounted) {
      setState({
        loading: false,
        accuracy: event.coords.accuracy,
        altitude: event.coords.altitude,
        altitudeAccuracy: event.coords.altitudeAccuracy,
        heading: event.coords.heading,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
        timestamp: event.timestamp
      })
    }
  }
  const onEventError = (error) =>
    mounted && setState((oldState) => ({ ...oldState, loading: false, error }))

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent, onEventError, options)
    watchId = navigator.geolocation.watchPosition(
      onEvent,
      onEventError,
      options
    )

    return () => {
      mounted = false
      navigator.geolocation.clearWatch(watchId)
    }
  }, [])

  return state
}

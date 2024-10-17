import { useReducer, useEffect } from 'react'

const initialState = {
  data: null,
  loading: true,
  error: null
}

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload }
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload }
    default:
      throw new Error()
  }
}

export const useFetch = (url, options) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' })

      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const result = await response.json()
        dispatch({ type: 'FETCH_SUCCESS', payload: result })
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message })
      }
    }

    fetchData()
  }, [url, options])

  return state
}

import { useCallback, useEffect, useRef, useState } from 'react'

export const useStateValidator = (
  state,
  validator,
  initialState = [undefined]
) => {
  const validatorInner = useRef(validator)
  const stateInner = useRef(state)

  validatorInner.current = validator
  stateInner.current = state

  const [validity, setValidity] = useState(initialState)

  const validate = useCallback(() => {
    if (validatorInner.current.length >= 2) {
      validatorInner.current(stateInner.current, setValidity)
    } else {
      setValidity(validatorInner.current(stateInner.current))
    }
  }, [setValidity])

  useEffect(() => {
    validate()
  }, [state])

  return [validity, validate]
}

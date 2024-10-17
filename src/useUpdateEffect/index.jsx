import { useEffect } from 'react'
import { useIsFirstRender } from '../useIsFirstRender'

export const useUpdateEffect = (effect, dependencies) => {
  const isFirstRender = useIsFirstRender()

  useEffect(() => {
    if (!isFirstRender) {
      return effect()
    }
  }, dependencies)
}

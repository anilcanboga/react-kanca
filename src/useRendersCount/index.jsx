import { useRef } from "react"

export const useRendersCount = () => {
  return ++useRef(0).current
}

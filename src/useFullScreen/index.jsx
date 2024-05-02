import { useState } from 'react'

export const useFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    } else if (document.documentElement.mozRequestFullScreen) {
      /* Firefox */
      document.documentElement.mozRequestFullScreen()
    } else if (document.documentElement.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      document.documentElement.webkitRequestFullscreen()
    } else if (document.documentElement.msRequestFullscreen) {
      /* IE/Edge */
      document.documentElement.msRequestFullscreen()
    }
    setIsFullScreen(true)
  }

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari & Opera */
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen()
    }
    setIsFullScreen(false)
  }

  return { isFullScreen, enterFullScreen, exitFullScreen }
}

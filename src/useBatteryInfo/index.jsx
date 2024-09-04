import { useState, useEffect } from 'react'

export const useBatteryInfo = () => {
  const [batteryLevel, setBatteryLevel] = useState(null)
  const [isCharging, setIsCharging] = useState(null)
  const [dischargingTime, setDischargingTime] = useState(null)

  useEffect(() => {
    const getBatteryInfo = async () => {
      try {
        const battery = await navigator.getBattery()

        const updateBatteryInfo = () => {
          setBatteryLevel(Math.round(battery.level * 100))
          setIsCharging(battery.charging)
          setDischargingTime(battery.dischargingTime)
        }

        updateBatteryInfo()

        battery.addEventListener('chargingchange', updateBatteryInfo)
        battery.addEventListener('levelchange', updateBatteryInfo)
        battery.addEventListener('chargingtimechange', updateBatteryInfo)
        battery.addEventListener('dischargingtimechange', updateBatteryInfo)

        return () => {
          battery.removeEventListener('chargingchange', updateBatteryInfo)
          battery.removeEventListener('levelchange', updateBatteryInfo)
          battery.removeEventListener('chargingtimechange', updateBatteryInfo)
          battery.removeEventListener(
            'dischargingtimechange',
            updateBatteryInfo
          )
        }
      } catch (error) {
        console.error('Batarya bilgisi alınamadı: ' + error.message)
      }
    }

    getBatteryInfo()

    // Cleanup function
    return () => {}
  }, [])

  return { batteryLevel, isCharging, dischargingTime }
}

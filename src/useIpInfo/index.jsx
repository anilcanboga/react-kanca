import { useEffect, useState } from 'react'

export const useIpInfo = () => {
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchGeo() {
      try {
        const res = await fetch('https://ipapi.co/json/')
        if (!res.ok) throw new Error('IP bilgisi alınamadı')
        const data = await res.json()

        setLocation({
          ip: data.ip,
          country: data.country_name,
          city: data.city,
          region: data.region,
          countryCode: data.country_code
        })
      } catch (err) {
        setError(err.message || 'Bilinmeyen hata')
      }
    }

    fetchGeo()
  }, [])

  return { location, error }
}

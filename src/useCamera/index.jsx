import { useEffect, useRef, useState } from 'react';

export const useCamera = (constraints = { video: true }) => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);
  const streamRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);

        if (!isMounted) return;

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play().catch((e) => {
            console.warn('Otomatik oynatma başarısız:', e.message);
          });
        }
      } catch (err) {
        if (isMounted) {
          console.error('Kamera hatası:', err);
          setError(err);
        }
      }
    };

    startCamera();

    return () => {
      isMounted = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    };
  }, [constraints]);

  return { videoRef, error };
}

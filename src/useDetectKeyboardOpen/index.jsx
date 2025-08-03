import { useEffect, useState } from "react";

export const useDetectKeyboardOpen = (minKeyboardHeight = 300, defaultValue) => {
  const initial =
    typeof window !== "undefined" &&
    typeof window.visualViewport !== "undefined"
      ? window.screen.height - minKeyboardHeight > window.visualViewport.height
      : false;

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(
    defaultValue ?? initial
  );

  useEffect(() => {
    if (typeof window.visualViewport === "undefined") return;

    const handleResize = () => {
      const newState =
        window.screen.height - minKeyboardHeight >
        window.visualViewport.height;
      setIsKeyboardOpen((prev) => (prev !== newState ? newState : prev));
    };

    window.visualViewport.addEventListener("resize", handleResize);
    return () => {
      window.visualViewport.removeEventListener("resize", handleResize);
    };
  }, [minKeyboardHeight]);

  return isKeyboardOpen;
};


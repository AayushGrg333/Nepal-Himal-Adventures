"use client"

import { useState, useEffect } from "react"

export function useRotatingText(words: string[], interval = 1000) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words, interval])

  return words[currentIndex]
}

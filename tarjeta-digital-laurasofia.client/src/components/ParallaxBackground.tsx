"use client"

import type React from "react"
import { useEffect, useState } from "react"
import styles from "../styles/ParallaxBackground.module.css"

const ParallaxBackground: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [stars, setStars] = useState<
    Array<{
      id: number
      size: number
      x: number
      y: number
      delay: number
      duration: number
    }>
  >([])

  useEffect(() => {
    // Generate stars
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }))

    setStars(generatedStars)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      const height = document.body.scrollHeight - window.innerHeight
      const scrollProgress = position / height
      setScrollPosition(scrollProgress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={styles.parallaxBackground}>
      <div className={styles.gradientBackground} style={{ opacity: 1 - scrollPosition * 0.3 }}></div>

      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.star}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        ></div>
      ))}

      <div
        className={`${styles.decorativeShape} ${styles.shape1}`}
        style={{ transform: `translateY(${scrollPosition * -50}px)` }}
      ></div>

      <div
        className={`${styles.decorativeShape} ${styles.shape2}`}
        style={{ transform: `translateY(${scrollPosition * 50}px)` }}
      ></div>
    </div>
  )
}

export default ParallaxBackground

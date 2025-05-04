"use client"

import React, { useEffect, useState, useRef } from "react"
import type { Photo } from "../../../types/invitation"
import styles from "../../../styles/PhotoCarousel.module.css"

interface PhotoCarouselProps {
  photos: Photo[]
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // 1) Observador para saber cuándo el carrusel entra en el viewport
  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }   // dispara cuando al menos 50% es visible
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // 2) Autoplay sólo si está en vista
  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setCurrentIndex(i => (i === photos.length - 1 ? 0 : i + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isInView, photos.length])

  const goToPrevious = () =>
    setCurrentIndex(i => (i === 0 ? photos.length - 1 : i - 1))

  const goToNext = () =>
    setCurrentIndex(i => (i === photos.length - 1 ? 0 : i + 1))

  const goToSlide = (slideIndex: number) => setCurrentIndex(slideIndex)

  return (
    <div ref={containerRef} className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselGradient} />
        <div
          className={styles.carouselSlide}
          style={{ backgroundImage: `url(${photos[currentIndex].src})` }}
          aria-label={photos[currentIndex].alt}
        />
      </div>

      <button onClick={goToPrevious} className={`${styles.carouselButton} ${styles.prevButton}`} aria-label="Anterior">
        {/* SVG ← */}
      </button>
      <button onClick={goToNext} className={`${styles.carouselButton} ${styles.nextButton}`} aria-label="Siguiente">
        {/* SVG → */}
      </button>

      <div className={styles.carouselDots}>
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`${styles.carouselDot} ${currentIndex === idx ? styles.activeDot : ""}`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default PhotoCarousel

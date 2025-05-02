"use client"

import type React from "react"
import { useState } from "react"
import type { Photo } from "../../../types/invitation"
import styles from "../../../styles/PhotoCarousel.module.css"

interface PhotoCarouselProps {
  photos: Photo[]
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === photos.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselGradient}></div>
        <div
          className={styles.carouselSlide}
          style={{ backgroundImage: `url(${photos[currentIndex].src})` }}
          aria-label={photos[currentIndex].alt}
        ></div>
      </div>

      <button onClick={goToPrevious} className={`${styles.carouselButton} ${styles.prevButton}`} aria-label="Anterior">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button onClick={goToNext} className={`${styles.carouselButton} ${styles.nextButton}`} aria-label="Siguiente">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div className={styles.carouselDots}>
        {photos.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`${styles.carouselDot} ${currentIndex === slideIndex ? styles.activeDot : ""}`}
            aria-label={`Ir a imagen ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default PhotoCarousel

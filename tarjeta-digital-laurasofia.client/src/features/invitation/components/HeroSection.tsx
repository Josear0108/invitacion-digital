"use client"

import type React from "react"
import ParallaxSection from "../../../components/ParallaxSection"
import styles from "../../../styles/HeroSection.module.css"

const HeroSection: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className={styles.heroSection}>
      <ParallaxSection speed={0.2} direction="up" className={styles.titleContainer}>
        <h1 className={styles.title}>Angelly</h1>
      </ParallaxSection>

      <ParallaxSection speed={0.4} direction="up" className={styles.subtitleContainer}>
        <h2 className={styles.subtitle}>Mis XV Años</h2>
      </ParallaxSection>

      <ParallaxSection speed={0.6} direction="up" className={styles.introContainer}>
        <p className={styles.intro}>
          Hace 15 veranos llegue a este mundo, en un día lleno de sol, para darle a mi familia jubilo y llenarlos de
          amor.
        </p>
      </ParallaxSection>

      <div className={styles.scrollIndicator} onClick={scrollToContent}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection

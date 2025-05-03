"use client"

import type React from "react"
import { motion } from "framer-motion"
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
    <motion.section
      className={styles.heroSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <ParallaxSection speed={0.2} direction="up" className={styles.titleContainer}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Laura Sofía
        </motion.h1>
      </ParallaxSection>

      <ParallaxSection speed={0.4} direction="up" className={styles.subtitleContainer}>
        <motion.h2
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Mis XV Años
        </motion.h2>
      </ParallaxSection>

      <ParallaxSection speed={0.6} direction="up" className={styles.introContainer}>
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Hace quince años nació una hermosa niña, enviada por Dios para ser criada y formada como el más grande tesoro. Hay momentos en la vida que imaginamos, soñamos y esperamos. Uno de esos momentos ha llegado.
        </motion.p>
      </ParallaxSection>

      <motion.div
        className={styles.scrollIndicator}
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.6, 1, 0.6],
          y: [0, 10, 0],
        }}
        transition={{
          delay: 1.5,
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
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
      </motion.div>
    </motion.section>
  )
}

export default HeroSection

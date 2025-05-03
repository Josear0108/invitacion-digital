"use client"

import type React from "react"
import { motion } from "framer-motion"
import styles from "../../../styles/FloralBackground.module.css"

interface FloralBackgroundProps {
  color?: string
}

const FloralBackground: React.FC<FloralBackgroundProps> = ({ color = "rgba(255, 133, 161, 0.05)" }) => {
  // Crear patrones florales para el fondo
  const patterns = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 100 + 100,
    rotation: Math.random() * 360,
    delay: Math.random() * 5,
    duration: Math.random() * 20 + 20,
  }))

  return (
    <div className={styles.backgroundContainer}>
      {patterns.map((pattern) => (
        <motion.div
          key={pattern.id}
          className={styles.patternElement}
          style={{
            left: `${pattern.x}%`,
            top: `${pattern.y}%`,
            width: `${pattern.size}px`,
            height: `${pattern.size}px`,
            backgroundColor: color,
            borderRadius: "50%",
          }}
          initial={{ opacity: 0, scale: 0.5, rotate: pattern.rotation }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [0.5, 0.7, 0.5],
            rotate: [pattern.rotation, pattern.rotation + 10, pattern.rotation],
          }}
          transition={{
            duration: pattern.duration,
            delay: pattern.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default FloralBackground

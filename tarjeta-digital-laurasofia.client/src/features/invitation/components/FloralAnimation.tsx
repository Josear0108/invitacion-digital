"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import styles from "../../../styles/FloralAnimation.module.css"

interface Flower {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  delay: number
  duration: number
  type: number // 0-3 para diferentes tipos de flores
}

interface FloralAnimationProps {
  count?: number
  colors?: string[]
}

const FloralAnimation: React.FC<FloralAnimationProps> = ({
  count = 20,
  colors = ["#FFD1DC", "#FFACC7", "#FF85A1", "#FF5A8A"], // Tonos rosados
}) => {
  const [flowers, setFlowers] = useState<Flower[]>([])

  useEffect(() => {
    // Generar flores con posiciones aleatorias
    const generatedFlowers = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.5,
      delay: Math.random() * 2,
      duration: Math.random() * 5 + 5,
      type: Math.floor(Math.random() * 4),
    }))

    setFlowers(generatedFlowers)
  }, [count])

  return (
    <div className={styles.floralContainer}>
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className={styles.flower}
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            color: colors[flower.type % colors.length],
          }}
          initial={{
            opacity: 0,
            scale: 0,
            rotate: flower.rotation - 20,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, flower.scale, flower.scale, 0],
            rotate: [flower.rotation - 20, flower.rotation, flower.rotation + 20, flower.rotation + 40],
            y: [0, -20, -40, -60],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 5 + 5,
          }}
        >
          {flower.type === 0 && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2C7.03,2,3,6.03,3,11c0,4.97,4.03,9,9,9s9-4.03,9-9C21,6.03,16.97,2,12,2z M12,18c-3.86,0-7-3.14-7-7 s3.14-7,7-7s7,3.14,7,7S15.86,18,12,18z" />
              <circle cx="12" cy="11" r="4" />
            </svg>
          )}
          {flower.type === 1 && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2l3,6l7,1l-5,5l1,7l-6-3l-6,3l1-7l-5-5l7-1L12,2z" />
            </svg>
          )}
          {flower.type === 2 && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z" />
              <circle cx="12" cy="12" r="5" />
            </svg>
          )}
          {flower.type === 3 && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,14,12,14z" />
              <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  )
}

export default FloralAnimation

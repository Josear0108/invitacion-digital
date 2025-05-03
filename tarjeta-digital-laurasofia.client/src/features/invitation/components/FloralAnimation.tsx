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
  type: number // 0-4 para diferentes tipos de flores
}

interface FloralAnimationProps {
  count?: number
}

const FloralAnimation: React.FC<FloralAnimationProps> = ({ count = 20 }) => {
  const [flowers, setFlowers] = useState<Flower[]>([])

  useEffect(() => {
    // Generar flores con posiciones aleatorias
    const generatedFlowers = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.3 + 0.2, // Flores más pequeñas para no sobrecargar visualmente
      delay: Math.random() * 2,
      duration: Math.random() * 5 + 5,
      type: Math.floor(Math.random() * 5),
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
          <img
            src={`/invitacion-digital/assets/small-flower.png`}
            alt="Flor decorativa"
            className={styles.flowerImage}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default FloralAnimation

"use client"

import type React from "react"
import { motion } from "framer-motion"
import styles from "../styles/FloralGif.module.css"

interface FloralGifProps {
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "center"
}

const FloralGif: React.FC<FloralGifProps> = ({ position = "center" }) => {
  const positionClass = styles[position]

  return (
    <motion.div
      className={`${styles.gifContainer} ${positionClass}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <img src="/assets/flowers/flower-animation.gif" alt="Animación floral" className={styles.floralGif} />
    </motion.div>
  )
}

export default FloralGif

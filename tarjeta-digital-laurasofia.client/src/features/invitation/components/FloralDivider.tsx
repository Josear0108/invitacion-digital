"use client"

import type React from "react"
import { motion } from "framer-motion"
import styles from "../../../styles/FloralDivider.module.css"

interface FloralDividerProps {
  color?: string
}

const FloralDivider: React.FC<FloralDividerProps> = ({ color = "#FF85A1" }) => {
  return (
    <div className={styles.dividerContainer}>
      <motion.div
        className={styles.line}
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className={styles.flowerContainer}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill={color}>
          <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      </motion.div>

      <motion.div
        className={styles.line}
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </div>
  )
}

export default FloralDivider

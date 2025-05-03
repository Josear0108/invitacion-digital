"use client"

import type React from "react"
import { motion } from "framer-motion"
import styles from "../../../styles/DecorativeBorder.module.css"

interface DecorativeBorderProps {
  color?: string
}

const DecorativeBorder: React.FC<DecorativeBorderProps> = ({ color = "#FF85A1" }) => {
  return (
    <div className={styles.borderContainer}>
      {/* Esquina superior izquierda */}
      <motion.div
        className={`${styles.cornerDecoration} ${styles.topLeft}`}
        style={{ color }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      </motion.div>

      {/* Esquina superior derecha */}
      <motion.div
        className={`${styles.cornerDecoration} ${styles.topRight}`}
        style={{ color }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      </motion.div>

      {/* Esquina inferior izquierda */}
      <motion.div
        className={`${styles.cornerDecoration} ${styles.bottomLeft}`}
        style={{ color }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      </motion.div>

      {/* Esquina inferior derecha */}
      <motion.div
        className={`${styles.cornerDecoration} ${styles.bottomRight}`}
        style={{ color }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      </motion.div>

      {/* Líneas decorativas */}
      <motion.div
        className={`${styles.decorativeLine} ${styles.topLine}`}
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.3 }}
      />
      <motion.div
        className={`${styles.decorativeLine} ${styles.rightLine}`}
        style={{ backgroundColor: color }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
      />
      <motion.div
        className={`${styles.decorativeLine} ${styles.bottomLine}`}
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.7 }}
      />
      <motion.div
        className={`${styles.decorativeLine} ${styles.leftLine}`}
        style={{ backgroundColor: color }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 1.9 }}
      />
    </div>
  )
}

export default DecorativeBorder

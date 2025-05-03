"use client"

import type React from "react"
import { motion } from "framer-motion"
import styles from "../../../styles/FloralDivider.module.css"

const FloralDivider: React.FC = () => {
  return (
    <div className={styles.dividerContainer}>
      <motion.div
        className={styles.line}
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
        <img src="/assets/flowers/divider-flower.png" alt="Flor decorativa" />
      </motion.div>

      <motion.div
        className={styles.line}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </div>
  )
}

export default FloralDivider

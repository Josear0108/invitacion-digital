"use client"

import type React from "react"
import { motion } from "framer-motion"
import styles from "../../../styles/FloralBorder.module.css"

const FloralBorder: React.FC = () => {
  return (
    <div className={styles.borderContainer}>
      {/* Esquina superior izquierda */}
      <motion.div
        className={`${styles.cornerFlower} ${styles.topLeft}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src="/invitacion-digital/assets/corner-flower.png" alt="Decoración floral" />
      </motion.div>

      {/* Esquina superior derecha */}
      <motion.div
        className={`${styles.cornerFlower} ${styles.topRight}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <img src="/invitacion-digital/assets/corner-flower.jpg" alt="Decoración floral" />
      </motion.div>

      {/* Esquina inferior izquierda */}
      <motion.div
        className={`${styles.cornerFlower} ${styles.bottomLeft}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <img src="/invitacion-digital/assets/corner-flower.jpg" alt="Decoración floral" />
      </motion.div>

      {/* Esquina inferior derecha */}
      <motion.div
        className={`${styles.cornerFlower} ${styles.bottomRight}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <img src="/invitacion-digital/assets/abajo-derecho.png" alt="Decoración floral" />
      </motion.div>

      {/* Líneas decorativas con flores pequeñas */}
      {/* <div className={styles.decorativeLine}>
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={`top-${index}`}
            className={`${styles.lineFlower} ${styles.topLine}`}
            style={{ left: `${(index + 1) * 16.6}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
          >
            <img src="/invitacion-digital/assets/small-flowe.png" alt="Flor pequeña" />
          </motion.div>
        ))}
      </div>

      <div className={styles.decorativeLine}>
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={`bottom-${index}`}
            className={`${styles.lineFlower} ${styles.bottomLine}`}
            style={{ left: `${(index + 1) * 16.6}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
          >
            <img src="/invitacion-digital/assets/small-flowes.png" alt="Flor pequeña" />
          </motion.div>
        ))}
      </div> */}
    </div>
  )
}

export default FloralBorder

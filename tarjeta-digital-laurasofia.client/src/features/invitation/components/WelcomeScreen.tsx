"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInvitation } from "../../../context/InvitationContext"
import styles from "../../../styles/WelcomeScreen.module.css"
import FloralAnimation from "./FloralAnimation"
import FloralBorder from "./FloralBorder"

const WelcomeScreen: React.FC = () => {
  const { startExperience } = useInvitation()

  return (
    <motion.div className={styles.welcomeScreen} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
      {/* Borde floral decorativo */}
      <FloralBorder />

      {/* Animación de flores flotantes */}
      <FloralAnimation count={25} />

      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Dale play
      </motion.h1>

      <motion.div
        className={styles.playButtonContainer}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className={styles.playButtonGlow}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
        />
        <button onClick={startExperience} className={styles.playButton} aria-label="Iniciar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.playIcon}
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </button>
      </motion.div>

      <motion.h2
        className={styles.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Laura Sofía
      </motion.h2>

      <motion.h3
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Mis XV Años
      </motion.h3>
    </motion.div>
  )
}

export default WelcomeScreen

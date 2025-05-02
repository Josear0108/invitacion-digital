"use client"

import type React from "react"
import { useInvitation } from "../../../context/InvitationContext"
import styles from "../../../styles/WelcomeScreen.module.css"

const WelcomeScreen: React.FC = () => {
  const { startExperience } = useInvitation()

  return (
    <div className={styles.welcomeScreen}>
      <h1 className={styles.title}>Dale play</h1>

      <div className={styles.playButtonContainer}>
        <div className={styles.playButtonGlow}></div>
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
      </div>

      <h2 className={styles.name}>Angelly</h2>
      <h3 className={styles.subtitle}>Mis XV Años</h3>
    </div>
  )
}

export default WelcomeScreen

"use client"

import type React from "react"
import { useInvitation } from "../../../context/InvitationContext"
import ParallaxSection from "../../../components/ParallaxSection"
import styles from "../../../styles/ActionButtons.module.css"

const ActionButtons: React.FC = () => {
  const { setConfirmOpen, setMapOpen } = useInvitation()

  return (
    <ParallaxSection speed={0.9} direction="up" className={styles.actionButtonsContainer}>
      <div className={styles.actionButtons}>
        <button className={styles.confirmButton} onClick={() => setConfirmOpen(true)}>
          CONFIRMAR ASISTENCIA
        </button>

        <button className={styles.mapButton} onClick={() => setMapOpen(true)}>
          Ver Mapa Completo
        </button>
      </div>
    </ParallaxSection>
  )
}

export default ActionButtons

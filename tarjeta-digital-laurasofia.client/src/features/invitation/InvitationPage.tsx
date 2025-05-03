"use client"

import type React from "react"
import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { useInvitation } from "../../context/InvitationContext"
import WelcomeScreen from "./components/WelcomeScreen"
import MainContent from "./components/MainContent"
import ConfirmationDialog from "./components/ConfirmationDialog"
import MapDialog from "./components/MapDialog"
import { photos, itineraryEvents } from "./data/invitationData"
import styles from "../../styles/InvitationPage.module.css"

const InvitationPage: React.FC = () => {
  const { started, confirmOpen, mapOpen } = useInvitation()

  useEffect(() => {
    // Preload audio
    const audio = document.getElementById("background-music") as HTMLAudioElement
    if (audio) {
      audio.load()
    }
  }, [])

  return (
    <div className={styles.invitationPage}>
      <audio id="background-music" loop src={`/invitacion-digital/audio/music.mp3`} />

      <AnimatePresence mode="wait">
        {!started ? (
          <WelcomeScreen key="welcome" />
        ) : (
          <MainContent key="main" photos={photos} itineraryEvents={itineraryEvents} />
        )}
      </AnimatePresence>

      {confirmOpen && <ConfirmationDialog />}
      {mapOpen && <MapDialog />}
    </div>
  )
}

export default InvitationPage

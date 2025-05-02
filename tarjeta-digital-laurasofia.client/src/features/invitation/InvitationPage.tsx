"use client"

import type React from "react"
import { useEffect } from "react"
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
    audio.load()
  }, [])

  return (
    <div className={styles.invitationPage}>
      <audio id="background-music" loop src="/assets/quinceanera-music.mp3" />

      {!started ? <WelcomeScreen /> : <MainContent photos={photos} itineraryEvents={itineraryEvents} />}

      {confirmOpen && <ConfirmationDialog />}
      {mapOpen && <MapDialog />}
    </div>
  )
}

export default InvitationPage

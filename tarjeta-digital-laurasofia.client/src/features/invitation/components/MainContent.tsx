"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { Photo, TimelineEvent } from "../../../types/invitation"
import HeroSection from "./HeroSection"
import PhotoCarousel from "./PhotoCarousel"
import EventDetails from "./EventDetails"
import TabsSection from "./TabsSection"
import DressCode from "./DressCode"
import GiftSection from "./GiftSection"
import ActionButtons from "./ActionButtons"
import MusicControl from "./MusicControl"
import Footer from "./Footer"
import ParallaxBackground from "../../../components/ParallaxBackground"
import styles from "../../../styles/MainContent.module.css"
import FloralAnimation from "./FloralAnimation"

interface MainContentProps {
  photos: Photo[]
  itineraryEvents: TimelineEvent[]
}

const MainContent: React.FC<MainContentProps> = ({ photos, itineraryEvents }) => {
  return (
    <motion.div
      className={styles.mainContent}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ParallaxBackground />
      <MusicControl />

      {/* Menos flores en el contenido principal para no distraer */}
      <FloralAnimation count={30} />

      <HeroSection />

      <motion.div
        className={styles.contentContainer}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <PhotoCarousel photos={photos} />

        <div className={styles.poeticIntro}>
          <p>
            El tiempo ha pasado y ha llegado el día de la celebración, por eso te invito a que compartas conmigo, llenos
            de emoción.
          </p>
        </div>

        <EventDetails />

        <TabsSection itineraryEvents={itineraryEvents} />

        <DressCode />

        <GiftSection />

        <ActionButtons />

        <Footer />
      </motion.div>
    </motion.div>
  )
}

export default MainContent

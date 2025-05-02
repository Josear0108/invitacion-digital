import type React from "react"
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

interface MainContentProps {
  photos: Photo[]
  itineraryEvents: TimelineEvent[]
}

const MainContent: React.FC<MainContentProps> = ({ photos, itineraryEvents }) => {
  return (
    <div className={styles.mainContent}>
      <ParallaxBackground />
      <MusicControl />

      <HeroSection />

      <div className={styles.contentContainer}>
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
      </div>
    </div>
  )
}

export default MainContent

"use client"

import type React from "react"
import { useState } from "react"
import type { TimelineEvent } from "../../../types/invitation"
import { useInvitation } from "../../../context/InvitationContext"
import Timeline from "./Timeline"
import ParallaxSection from "../../../components/ParallaxSection"
import styles from "../../../styles/TabsSection.module.css"

interface TabsSectionProps {
  itineraryEvents: TimelineEvent[]
}

const TabsSection: React.FC<TabsSectionProps> = ({ itineraryEvents }) => {
  const [activeTab, setActiveTab] = useState<"itinerary" | "directions">("itinerary")
  const { setMapOpen } = useInvitation()

  return (
    <ParallaxSection speed={0.6} direction="up" className={styles.tabsContainer}>
      <div className={styles.tabs}>
        <div className={styles.tabsHeader}>
          <button
            className={`${styles.tabButton} ${activeTab === "itinerary" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("itinerary")}
          >
            Itinerario
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === "directions" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("directions")}
          >
            Cómo Llegar
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "itinerary" && (
            <div className={styles.itineraryTab}>
              <h3>Programa del Evento</h3>
              <Timeline events={itineraryEvents} />
            </div>
          )}

          {activeTab === "directions" && (
            <div className={styles.directionsTab}>
              <h3>Cómo Llegar</h3>

              <div className={styles.directionsContent}>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.directionsIcon}
                  >
                    <path d="M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a1 1 0 00-.8-.4H5.24a2 2 0 00-1.8 1.1l-.8 1.63A6 6 0 002 12.42V16h2"></path>
                    <circle cx="6.5" cy="16.5" r="2.5"></circle>
                    <circle cx="16.5" cy="16.5" r="2.5"></circle>
                  </svg>
                  En automóvil
                </h4>
                <ul className={styles.directionsList}>
                  <li>Toma la autopista principal hacia el norte</li>
                  <li>En el kilómetro 15, gira a la derecha en la salida "Finca Pórtico"</li>
                  <li>Sigue el camino por 2 km hasta ver la entrada principal</li>
                  <li>Habrá estacionamiento disponible para todos los invitados</li>
                </ul>
              </div>

              <div className={styles.mapPlaceholder}>
                <p>Mapa de ubicación</p>
              </div>

              <button className={styles.viewMapButton} onClick={() => setMapOpen(true)}>
                Ver mapa completo
              </button>
            </div>
          )}
        </div>
      </div>
    </ParallaxSection>
  )
}

export default TabsSection

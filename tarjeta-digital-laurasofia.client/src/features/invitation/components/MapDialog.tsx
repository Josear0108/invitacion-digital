"use client"

import type React from "react"
import { useInvitation } from "../../../context/InvitationContext"
import Dialog from "../../../components/Dialog"
import styles from "../../../styles/MapDialog.module.css"

const MapDialog: React.FC = () => {
  const { setMapOpen } = useInvitation()

  return (
    <Dialog title="Ubicación" description="Finca Pórtico Torcoroma" onClose={() => setMapOpen(false)}>
      <div className={styles.mapContainer}>
        <div className={styles.mapPlaceholder}>
          <p>Mapa de ubicación</p>
        </div>
      </div>

      <div className={styles.mapInfo}>
        <p>
          <strong>Dirección:</strong> Km 15 Autopista Norte, Entrada Finca Pórtico
        </p>
        <p>
          <strong>Referencia:</strong> A 5 minutos del centro comercial Plaza Norte
        </p>
        <p>
          <strong>Estacionamiento:</strong> Disponible para todos los invitados
        </p>
      </div>

      <div className={styles.mapActions}>
        <button className={styles.googleMapsButton} onClick={() => window.open("https://maps.google.com", "_blank")}>
          Abrir en Google Maps
        </button>

        <button className={styles.closeButton} onClick={() => setMapOpen(false)}>
          Cerrar
        </button>
      </div>
    </Dialog>
  )
}

export default MapDialog

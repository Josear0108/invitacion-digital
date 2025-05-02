"use client"

import type React from "react"
import type { FormEvent } from "react"
import { useInvitation } from "../../../context/InvitationContext"
import Dialog from "../../../components/Dialog"
import styles from "../../../styles/ConfirmationDialog.module.css"

const ConfirmationDialog: React.FC = () => {
  const { setConfirmOpen, guestData, updateGuestData } = useInvitation()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to a server
    alert(`¡Gracias por confirmar, ${guestData.name}! Esperamos verte en la celebración.`)
    setConfirmOpen(false)
  }

  return (
    <Dialog
      title="Confirmar Asistencia"
      description="Por favor completa la siguiente información para confirmar tu asistencia."
      onClose={() => setConfirmOpen(false)}
    >
      <form onSubmit={handleSubmit} className={styles.confirmationForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            value={guestData.name}
            onChange={(e) => updateGuestData({ name: e.target.value })}
            placeholder="Tu nombre completo"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="guests">Número de acompañantes</label>
          <input
            id="guests"
            type="number"
            min="0"
            value={guestData.guests}
            onChange={(e) => updateGuestData({ guests: e.target.value })}
            placeholder="¿Cuántas personas asistirán?"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Mensaje (opcional)</label>
          <textarea
            id="message"
            value={guestData.message}
            onChange={(e) => updateGuestData({ message: e.target.value })}
            placeholder="Escribe un mensaje para Angelly"
            rows={3}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Confirmar
        </button>
      </form>
    </Dialog>
  )
}

export default ConfirmationDialog

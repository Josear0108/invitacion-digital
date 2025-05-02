"use client"

import type React from "react"
import { type ReactNode, useEffect, useRef } from "react"
import styles from "../styles/Dialog.module.css"

interface DialogProps {
  title: string
  description?: string
  children: ReactNode
  onClose: () => void
}

const Dialog: React.FC<DialogProps> = ({ title, description, children, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Prevent body scrolling when dialog is open
    document.body.style.overflow = "hidden"

    // Focus trap
    const dialog = dialogRef.current
    if (dialog) {
      dialog.focus()
    }

    // Cleanup
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  return (
    <div
      className={styles.dialogBackdrop}
      onClick={handleBackdropClick}
      onKeyDown={handleEscape}
      tabIndex={-1}
      ref={dialogRef}
    >
      <div className={styles.dialogContent}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.dialogHeader}>
          <h2 className={styles.dialogTitle}>{title}</h2>
          {description && <p className={styles.dialogDescription}>{description}</p>}
        </div>

        <div className={styles.dialogBody}>{children}</div>
      </div>
    </div>
  )
}

export default Dialog

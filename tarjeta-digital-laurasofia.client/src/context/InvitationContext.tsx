"use client"

import type React from "react"
import { createContext, useState, useContext, type ReactNode } from "react"
import type { GuestConfirmation } from "../types/invitation"

interface InvitationContextType {
  started: boolean
  isPlaying: boolean
  confirmOpen: boolean
  mapOpen: boolean
  guestData: GuestConfirmation
  setStarted: (value: boolean) => void
  setIsPlaying: (value: boolean) => void
  setConfirmOpen: (value: boolean) => void
  setMapOpen: (value: boolean) => void
  updateGuestData: (data: Partial<GuestConfirmation>) => void
  resetGuestData: () => void
  toggleMusic: () => void
  startExperience: () => void
}

const defaultGuestData: GuestConfirmation = {
  name: "",
  guests: "",
  message: "",
}

const InvitationContext = createContext<InvitationContextType | undefined>(undefined)

export const InvitationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [started, setStarted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [mapOpen, setMapOpen] = useState(false)
  const [guestData, setGuestData] = useState<GuestConfirmation>(defaultGuestData)

  const updateGuestData = (data: Partial<GuestConfirmation>) => {
    setGuestData((prev) => ({ ...prev, ...data }))
  }

  const resetGuestData = () => {
    setGuestData(defaultGuestData)
  }

  const toggleMusic = () => {
    const audio = document.getElementById("background-music") as HTMLAudioElement

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error)
      })
    }

    setIsPlaying(!isPlaying)
  }

  const startExperience = () => {
    setStarted(true)
    const audio = document.getElementById("background-music") as HTMLAudioElement

    audio.play().catch((error) => {
      console.error("Error playing audio:", error)
      // Still set isPlaying to true even if autoplay fails
      setIsPlaying(true)
    })

    setIsPlaying(true)
  }

  return (
    <InvitationContext.Provider
      value={{
        started,
        isPlaying,
        confirmOpen,
        mapOpen,
        guestData,
        setStarted,
        setIsPlaying,
        setConfirmOpen,
        setMapOpen,
        updateGuestData,
        resetGuestData,
        toggleMusic,
        startExperience,
      }}
    >
      {children}
    </InvitationContext.Provider>
  )
}

export const useInvitation = (): InvitationContextType => {
  const context = useContext(InvitationContext)
  if (context === undefined) {
    throw new Error("useInvitation must be used within an InvitationProvider")
  }
  return context
}
